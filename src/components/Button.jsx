import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, id, handleFunction, active }) {
  return (
    <button
      className={
        active ? `${styles.button} ${styles.clicked}` : `${styles.button}`
      }
      id={id && id}
      onClick={handleFunction && handleFunction}
    >
      {text}
    </button>
  );
}
