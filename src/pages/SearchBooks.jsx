import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchToTag, serchToTagMock } from "../services/aladin";
import Book from "../components/Book";
import styles from "./SearchBooks.module.css";

export default function SearchBooks() {
  const { categoryId } = useParams();
  // const {
  //   isLoading,
  //   error,
  //   data: books,
  // } = useQuery(["books"], () => searchToTag(categoryId));

  const { data: books } = useQuery(["books"], serchToTagMock);

  return (
    <section className={styles.section}>
      <ul className={styles.bookList}>
        {books &&
          books.item.map((book) => (
            <li key={book.isbn13}>
              <Book data={book} />
            </li>
          ))}
      </ul>
    </section>
  );
}
