import React from "react";
import { DETAIL_LIST, TAG_LIST } from "../data/tagData";
import Button from "../components/Button.jsx";
import styles from "./SelectTags.module.css";
import { MdSearch } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";
import { useSelectTags } from "../hooks/useSelectTags";
import { useContact } from "./../hooks/useContact";

export default function SelectTags() {
  const {
    handleSearch,
    handleClick,
    handleSetCategory,
    handleCheck,
    handleKeywordSearch,
    checked,
    category,
    tag,
    tagList,
  } = useSelectTags();

  const { isSubmitted, errors, register, handleSubmit } = useContact();

  return (
    <section className={styles.section}>
      {checked && (
        <div>
          <form
            className={styles.keywordBox}
            onSubmit={handleSubmit(handleKeywordSearch)}
          >
            <div className={styles.container}>
              <label className={styles.label} htmlFor='text'>
                W
              </label>
              <input
                className={styles.inputKeyword}
                id='text'
                type='text'
                autoComplete='off'
                aria-invalid={
                  isSubmitted ? (errors.text ? "true" : "false") : undefined
                }
                {...register("text", {
                  required: "검색어는 필수 입력 사항입니다.",
                  minLength: {
                    value: 2,
                    message: "검색어는 2자 이상이여야 합니다,",
                  },
                })}
              />
            </div>
            {errors.text && (
              <small className={styles.error} role='alert'>
                {errors.text.message}
              </small>
            )}
            <button className={styles.search} type='submit'>
              <MdSearch />
            </button>
          </form>

          <p className={styles.info}>
            제목 또는 저자를 입력해 검색할 수 있어요!
          </p>
        </div>
      )}
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
        <button
          className={
            checked ? `${styles.check} ${styles.enabled}` : `${styles.check}`
          }
          onClick={handleCheck}
        >
          직접 검색
          <span className={styles.icon}>
            <SlMagnifier />
          </span>
        </button>
      </div>
    </section>
  );
}
