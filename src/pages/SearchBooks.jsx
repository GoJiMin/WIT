import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchToTag, serchToTagMock } from "../services/aladin";
import Book from "../components/Book";
import styles from "./SearchBooks.module.css";
import Button from "../components/Button";

export default function SearchBooks() {
  const [books, setBooks] = useState("");
  const listBox = useRef();
  const { categoryId } = useParams();
  // const {
  //   isLoading,
  //   error,
  //   data: books,
  // } = useQuery(["books"], () => searchToTag(categoryId));

  const handleSearch = () => {
    searchToTag(categoryId).then((res) => setBooks(res));
    scrollToTop();
  };

  const scrollToTop = () => {
    listBox.current?.scrollTo({ top: 0, behavior: "smooth" });
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
            <Button
              text={"다시 추천 받을래요. 🤔"}
              handleFunction={handleSearch}
            />
          </div>
        </section>
      )}
    </>
  );
}
