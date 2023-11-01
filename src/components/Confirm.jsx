import React from "react";
import styles from "./Confirm.module.css";

export default function Confirm({ title, content, close, confirm }) {
  return (
    <section className={styles.section}>
      <div className={styles.background} onClick={close}></div>
      <div className={styles.contentBox}>
        <header className={styles.header}>
          <p className={styles.title}>{title}</p>
        </header>
        <div className={styles.content}>{content}</div>
        <div className={styles.btnContainer}>
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
