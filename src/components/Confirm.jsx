import React from "react";
import styles from "./Confirm.module.css";
import { useOutletContext } from "react-router-dom";

export default function Confirm({ title, content, close, confirm, library }) {
  const { sizing } = useOutletContext();
  return (
    <section className={styles.section}>
      <div className={styles.background} onClick={close}></div>
      <div className={styles.contentBox}>
        <header className={styles.header}>
          <p
            // className={
            //   library.length !== 0
            //     ? `${styles.title} ${styles.hide}`
            //     : `${styles.title}`
            // }
            className={styles.title}
          >
            {library.length !== 0 ? "도서관 선택" : title}
          </p>
        </header>
        <div
          className={
            library.length !== 0
              ? `${styles.content} ${styles.sizeUp}`
              : sizing
              ? `${styles.content} ${styles.sizeDown}`
              : `${styles.content}`
          }
        >
          {content}
        </div>
        <div
          className={
            library.length !== 0
              ? `${styles.btnContainer} ${styles.hide}`
              : `${styles.btnContainer}`
          }
          // className={styles.btnContainer}
        >
          <button className={styles.cancelBtn} onClick={close}>
            취소
          </button>
          <button
            className={styles.confirmBtn}
            onClick={() => {
              confirm && confirm();
            }}
          >
            검색
          </button>
        </div>
      </div>
    </section>
  );
}
