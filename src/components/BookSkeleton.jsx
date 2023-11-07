import React from "react";
import styles from "./BookSkeleton.module.css";

export default function BookSkeleton() {
  return (
    <section className={styles.book}>
      <div className={styles.img}></div>
      <div className={styles.textBox}>
        <div className={styles.title}></div>
        <div className={styles.author}></div>
        <div className={styles.description}></div>
        <div className={styles.library}></div>
      </div>
    </section>
  );
}
