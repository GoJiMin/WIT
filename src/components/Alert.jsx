import React from "react";
import styles from "./Alert.module.css";

export default function Alert({ content, btnText, close, confirm }) {
  return (
    <section>
      <div className={styles.overlay} onClick={close} />
      <article className={styles.content}>
        {content}
        <button
          type='button'
          onClick={() => {
            confirm();
            close();
          }}
          className={styles.confirmBtn}
        >
          {btnText}
        </button>
      </article>
    </section>
  );
}
