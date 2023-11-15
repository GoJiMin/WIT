import React from "react";
import styles from "./Book.module.css";
import Modal from "./Modal.jsx";
import Region from "./Region.jsx";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { unescapeHtml } from "./../services/unescape";
import { useRegion } from "../hooks/useRegion";
import { useBookMark } from "./../hooks/useBookMark";
import { useLibrary } from "../hooks/useLibrary";

export default function Book({
  data: { title, description, author, cover, isbn13 },
  animation,
  hasBookMark,
}) {
  const {
    handleSelect,
    handleDepth2Select,
    handleResetRegion,
    options__depth1,
    options__depth2,
    region,
  } = useRegion();

  const { library, loading, handleConfirm, handleReset } = useLibrary({
    region,
    isbn13,
  });

  const { handleAdd, handleDelete, uid } = useBookMark({
    title,
    description,
    author,
    cover,
    isbn13,
  });

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
            loading={loading}
            options={options__depth2}
            handleConfirm={handleConfirm}
            region={region}
            handleResetRegion={handleResetRegion}
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
                handleReset={handleReset}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
