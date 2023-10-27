import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, id, handleFunction, active, disabled }) {
  return (
    <button
      className={
        active ? `${styles.button} ${styles.clicked}` : `${styles.button}`
      }
      id={id && id}
      disabled={disabled}
      onClick={handleFunction && handleFunction}
    >
      {text}
    </button>
  );
}
