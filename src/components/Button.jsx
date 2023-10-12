import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, id }) {
  return (
    <button className={styles.button} id={id && id}>
      {text}
    </button>
  );
}
