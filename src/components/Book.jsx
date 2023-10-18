import React from "react";
import styles from "./Book.module.css";
import Modal from "./Modal";
import Region from "./Region";

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
        <div className={styles.linkList}></div>
        <Modal
          text={"소장 도서관 위치"}
          title={"위치 선택"}
          component={<Region />}
        />
      </div>
    </section>
  );
}
