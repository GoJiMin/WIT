import React from "react";
import styles from "./Description.module.css";

export default function Description({ title, content, author, close }) {
  return (
    <section>
      <div className={styles.overlay} onClick={close} />

      <article className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <span className={styles.author}>{author}</span>
        </div>
        <p className={styles.description}>{content}</p>
        <button type='button' onClick={close} className={styles.confirmBtn}>
          닫기
        </button>
      </article>
    </section>
  );
}
