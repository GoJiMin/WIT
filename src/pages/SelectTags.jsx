import React, { useRef, useState } from "react";
import { DETAIL_LIST, TAG_LIST } from "../data/tagData";
import Button from "../components/Button.jsx";
import styles from "./SelectTags.module.css";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";

export default function SelectTags() {
  const navigate = useNavigate();
  const tagList = useRef();
  const [tag, setTag] = useState();
  const [category, setCategory] = useState({ categoryId: null, text: "" });

  const clicked = useRef();
  const handleClick = (e) => {
    setTag(e.target.id);
    setCategory(null);
    clicked.current = e.target.id;
    tagList?.current.scrollTo({
      top: 0,
    });
  };

  const handleSearch = () => {
    if (category.categoryId === null) {
      setCategory((prev) => ({ ...prev, text: "먼저 태그를 선택해주세요!" }));
      return;
    }
    navigate(`/search/${category?.categoryId}`);
  };

  return (
    <section className={styles.section}>
      <div className={styles.searchBox}>
        <div className={styles.input}>
          <p className={styles.text}>통합검색</p>
          <p className={styles.text}>{category?.text}</p>
        </div>
        <p className={styles.search} onClick={handleSearch}>
          <MdSearch />
        </p>
      </div>
      <article className={styles.tagBox}>
        <ul className={styles.tagList}>
          {TAG_LIST.map(({ id, tagName }) => (
            <li key={id} className={styles.tag}>
              <Button
                text={tagName}
                id={id}
                handleFunction={handleClick}
                active={clicked.current / 1 === id / 1 ? true : false}
              />
            </li>
          ))}
        </ul>
        <section className={styles.detailSection} ref={tagList}>
          <ul key={tag} className={styles.detailList}>
            {tag &&
              DETAIL_LIST[tag].map(({ id, tagName }) => (
                <li className={styles.tag__sub} key={id}>
                  <Button
                    text={tagName}
                    id={id}
                    active={id / 1 === category?.categoryId / 1 ? true : false}
                    handleFunction={() =>
                      setCategory({
                        categoryId: id,
                        text: tagName,
                      })
                    }
                  />
                </li>
              ))}
          </ul>
        </section>
      </article>
    </section>
  );
}
