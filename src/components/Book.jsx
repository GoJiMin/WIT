import React from "react";
import styles from "./Book.module.css";

export default function Book({ data: { title, description, author, cover } }) {
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
      </div>
    </section>
  );
}
