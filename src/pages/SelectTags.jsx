import React, { useRef, useState } from "react";
import { DETAIL_LIST, TAG_LIST } from "../data/tagData";
import Button from "../components/Button";
import styles from "./SelectTags.module.css";
import { useNavigate } from "react-router-dom";

export default function SelectTags() {
  const navigate = useNavigate();
  const [tag, setTag] = useState();
  const clicked = useRef();
  const handleClick = (e) => {
    setTag(e.target.id);
    clicked.current = e.target.id;
  };

  const handleSearch = (categoryId) => {
    navigate(`/search/${categoryId}`);
  };

  return (
    <section className={styles.section}>
      <ul className={styles.tagList}>
        {TAG_LIST.map(({ id, tagName }) => (
          <li
            className={
              clicked.current / 1 === id / 1
                ? `${styles.tag} ${styles.clicked}`
                : `${styles.tag}`
            }
            key={id}
          >
            <Button text={tagName} id={id} handleFunction={handleClick} />
          </li>
        ))}
      </ul>
      <div className={styles.line}></div>
      {tag && (
        <ul className={styles.detailList}>
          {DETAIL_LIST[tag].map(({ id, tagName }) => (
            <li
              className={styles.tag__sub}
              key={id}
              onClick={() => handleSearch(id)}
            >
              <Button text={tagName} id={id} />
            </li>
          ))}
        </ul>
      )}
      <img
        className={styles.logo}
        src='src\assets\image\bookLogo2.png'
        alt='bookLogo2'
      />
    </section>
  );
}
