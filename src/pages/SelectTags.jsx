import React, { useMemo, useState } from "react";
import { DETAIL_LIST, TAG_LIST } from "../data/tagData";
import Button from "../components/Button";
import styles from "./SelectTags.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SelectTags() {
  const navigate = useNavigate();
  const [tag, setTag] = useState();
  const handleClick = (e) => {
    setTag(e.target.id);
  };

  const handleSearch = (categoryId) => {
    navigate(`/search/${categoryId}`);
  };

  return (
    <section className={styles.section}>
      <ul className={styles.tagList}>
        {TAG_LIST.map(({ id, tagName }) => (
          <li className={styles.tag} key={id} onClick={handleClick}>
            <Button text={tagName} id={id} />
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
    </section>
  );
}
