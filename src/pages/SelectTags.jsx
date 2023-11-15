import React from "react";
import { DETAIL_LIST, TAG_LIST } from "../data/tagData";
import Button from "../components/Button.jsx";
import styles from "./SelectTags.module.css";
import { MdSearch } from "react-icons/md";
import { useSelectTags } from "../hooks/useSelectTags";

export default function SelectTags() {
  const {
    handleSearch,
    handleClick,
    handleSetCategory,
    handleCheck,
    checked,
    category,
    tag,
    tagList,
  } = useSelectTags();

  return (
    <section className={styles.section}>
      {checked && <div>직접검색</div>}
      {!checked && (
        <>
          <div className={styles.searchBox}>
            <div className={styles.input}>
              <p className={styles.text__type}>W</p>
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
                    active={tag / 1 === id / 1 ? true : false}
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
                        active={
                          id / 1 === category?.categoryId / 1 ? true : false
                        }
                        handleFunction={() => handleSetCategory(id, tagName)}
                      />
                    </li>
                  ))}
              </ul>
            </section>
          </article>
        </>
      )}
      <div className={styles.checkBox}>
        <input
          id='check'
          type='checkbox'
          value={checked}
          className={styles.check}
          onClick={handleCheck}
        />
        <label htmlFor='check' className={styles.checkBox__text}>
          책 제목 검색
        </label>
      </div>
    </section>
  );
}
