import React, { useMemo, useState } from "react";
import { DETAIL_LIST, TAG_LIST } from "../data/tagData";
import Button from "../components/Button";
import styles from "./SelectTags.module.css";

export default function SelectTags() {
  const [tag, setTag] = useState();
  const handleClick = (e) => {
    setTag(e.target.id);
  };
  return (
    <>
      <ul className={styles.tagList}>
        {TAG_LIST.map(({ id, tagName }) => (
          <li className={styles.tag} key={id} onClick={handleClick}>
            <Button text={tagName} id={id} />
          </li>
        ))}
      </ul>
      {tag && (
        <ul className={styles.detailList}>
          {DETAIL_LIST[tag].map(({ id, tagName }) => (
            <li className={styles.tag} key={id}>
              <Button text={tagName} id={id} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
