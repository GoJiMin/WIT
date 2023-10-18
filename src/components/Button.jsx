import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, id, handleFunction }) {
  return (
    <button
      className={styles.button}
      id={id && id}
      onClick={handleFunction && handleFunction}
    >
      {text}
    </button>
  );
}
