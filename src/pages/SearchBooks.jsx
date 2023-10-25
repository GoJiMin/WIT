import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { searchToTag, serchToTagMock } from "../services/aladin";
import Book from "../components/Book";
import styles from "./SearchBooks.module.css";
import Button from "../components/Button";
import { HiArrowUp } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function SearchBooks() {
  const [books, setBooks] = useState("");
  const listBox = useRef();
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const handleSearch = () => {
    searchToTag(categoryId).then((res) => setBooks(res));
    scrollToTop();
  };

  const scrollToTop = () => {
    listBox.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      {books && (
        <section className={styles.section}>
          <ul className={styles.bookList} ref={listBox}>
            {books &&
              books.item.map((book) => (
                <li key={book.isbn13}>
                  <Book data={book} />
                </li>
              ))}
          </ul>
          <div className={styles.search}>
            <Button text={"다시 선택할래요. 🔍"} handleFunction={handleClick} />
            <Button
              text={"다시 추천 받을래요. 🤔"}
              handleFunction={handleSearch}
            />
          </div>
          <button className={styles.up} onClick={scrollToTop}>
            <HiArrowUp />
          </button>
        </section>
      )}
    </>
  );
}
