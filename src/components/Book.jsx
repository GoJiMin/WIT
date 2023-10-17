import React from "react";
import styles from "./Book.module.css";

export default function Book({
  data: {
    title,
    description,
    author,
    cover,
    isbn13,
    setIsbn,
    setRegion,
    setClicked,
  },
}) {
  const handleClick = () => {};

  return (
    <section className={styles.book}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={cover} alt={title} />
      </div>
      <div className={styles.textBox}>
        <div className={styles.titleBox}>
          <p className={styles.title}>{title}</p>
          <p className={styles.author}>{author}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.linkList}>
          <button className={styles.linkList}>소장 도서관</button>
          <button className={styles.linkList}>알라딘 중고 보유 매장</button>
          <button className={styles.linkList}>구매하러 가기</button>
        </div>
      </div>
    </section>
  );
}
