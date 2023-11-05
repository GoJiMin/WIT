import React, { useRef, useState } from "react";
import styles from "./Book.module.css";
import Modal from "./Modal.jsx";
import { libraryLocation } from "../services/library";
import { unescapeHtml } from "./../services/unescape";
import Region from "./Region.jsx";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAuthContext } from "../context/AuthContext";
import { addUpdateToLibrary, removeFromLibrary } from "../services/firebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Book({
  data: { title, description, author, cover, isbn13 },
  animation,
  hasBookMark,
}) {
  const queryClient = useQueryClient();
  const regionCode = useRef({ region: null, dtl_region: null });
  const [library, setLibrary] = useState([]);
  const { uid } = useAuthContext();

  const handleConfirm = () => {
    if (regionCode.current.region === null) {
      return;
    }
    libraryLocation({
      isbn: isbn13,
      region: regionCode?.current?.region,
      dtl_region: regionCode?.current?.dtl_region,
    }).then((res) => setLibrary(res.data.response));
  };

  const addToUpdate = useMutation(
    ({ uid, book }) => addUpdateToLibrary(uid, book),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["books"]);
        queryClient.invalidateQueries(["bookMarks"]);
      },
    }
  );

  const removeBookMark = useMutation(
    ({ uid, isbn13 }) => removeFromLibrary(uid, isbn13),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["books"]);
        queryClient.invalidateQueries(["bookMarks"]);
      },
    }
  );

  const handleAdd = () => {
    const book = { title, description, author, cover, isbn13 };
    addToUpdate.mutate({ uid, book });
  };

  const handleDelete = () => {
    removeBookMark.mutate({ uid, isbn13 });
  };

  const unescapeTitle = unescapeHtml(title);
  const unescapeDes = unescapeHtml(description);

  return (
    <section className={styles.book}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={cover} alt={title} />
      </div>
      <div className={styles.textBox}>
        <div className={styles.titleBox}>
          <div className={styles.header}>
            <span className={styles.title}>{unescapeTitle}</span>
            {!hasBookMark && (
              <button className={styles.addFavor} onClick={handleAdd}>
                <AiOutlineHeart />
              </button>
            )}
            {hasBookMark && (
              <button
                className={
                  animation ? `${styles.delFavor}` : `${styles.delFavor__non}`
                }
                onClick={handleDelete}
              >
                <AiFillHeart />
              </button>
            )}
          </div>
          <p className={styles.author}>{author}</p>
        </div>
        <p className={styles.description}>{unescapeDes}</p>
        <div className={styles.linkList}></div>
        <Modal
          type='confirm'
          text={"소장 도서관"}
          title={"위치 선택"}
          library={library}
          handleConfirm={handleConfirm}
          region={regionCode.current}
          component={
            <Region
              regionCode={regionCode.current}
              library={library}
              setLibrary={setLibrary}
            />
          }
        />
      </div>
    </section>
  );
}
