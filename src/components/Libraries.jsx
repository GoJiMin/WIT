import React from "react";
import Library from "./Library";
import styles from "./Libraries.module.css";

export default function Libraries({ library, setLibrary }) {
  const handleReset = () => {
    setLibrary([]);
  };
  return (
    <section className={styles.section}>
      <button onClick={handleReset}>초기화</button>
      <ul className={styles.libList}>
        {library?.libs?.map(({ lib }, idx) => (
          <li key={idx}>
            <Library data={lib} />
          </li>
        ))}
      </ul>
    </section>
  );
}
