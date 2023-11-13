import React, { useState } from "react";
import styles from "./Book.module.css";
import Modal from "./Modal.jsx";
import { libraryLocation } from "../services/library";
import { unescapeHtml } from "./../services/unescape";
import Region from "./Region.jsx";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { useAuthContext } from "../context/AuthContext";
import { addUpdateToLibrary, removeFromLibrary } from "../services/firebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRegion } from "../hooks/useRegion";

export default function Book({
  data: { title, description, author, cover, isbn13 },
  animation,
  hasBookMark,
}) {
  const {
    handleSelect,
    handleDepth2Select,
    options__depth1,
    options__depth2,
    region,
    setRegion,
  } = useRegion();

  const queryClient = useQueryClient();

  const [library, setLibrary] = useState([]);
  const { uid } = useAuthContext();

  const handleConfirm = () => {
    if (region.region === null) {
      return;
    }
    libraryLocation({
      isbn: isbn13,
      region: region?.region?.value,
      dtl_region: region?.dtl_region?.value,
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
            {uid && !hasBookMark && (
              <button className={styles.addFavor} onClick={handleAdd}>
                <AiOutlineHeart />
              </button>
            )}
            {uid && hasBookMark && (
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
          <div className={styles.showDes}>
            <Modal
              text={<AiOutlineQuestionCircle />}
              type={"description"}
              title={unescapeTitle}
              author={author}
              content={unescapeDes}
            />
          </div>
        </div>
        <p className={styles.description}>{unescapeDes}</p>
        <div className={styles.libraryLocation}>
          <Modal
            type='confirm'
            text={"소장 도서관"}
            title={"위치 선택"}
            library={library}
            handleConfirm={handleConfirm}
            region={region}
            setRegion={setRegion}
            component={
              <Region
                regionData={{
                  handleSelect,
                  handleDepth2Select,
                  options__depth1,
                  options__depth2,
                  region,
                }}
                library={library}
                setLibrary={setLibrary}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
