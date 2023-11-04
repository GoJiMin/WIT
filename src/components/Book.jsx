import React, { useRef, useState } from "react";
import styles from "./Book.module.css";
import Modal from "./Modal.jsx";
import { libraryLocation } from "../services/library";
import { unescapeHtml } from "./../services/unescape";
import Region from "./Region.jsx";
import { AiFillHeart } from "react-icons/ai";
import { useAuthContext } from "../context/AuthContext";
import { addUpdateToLibrary, removeFromLibrary } from "../services/firebase";

export default function Book({
  data: { title, description, author, cover, isbn13 },
  type,
}) {
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

  const handleAdd = () => {
    const book = { title, description, author, cover, isbn13 };
    addUpdateToLibrary(uid, book);
  };

  const handleDelete = () => {
    removeFromLibrary(uid, isbn13);
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
            {type === "add" && (
              <button className={styles.favor} onClick={handleAdd}>
                <AiFillHeart />
              </button>
            )}
            {type === "delete" && (
              <button className={styles.favor} onClick={handleDelete}>
                X
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
