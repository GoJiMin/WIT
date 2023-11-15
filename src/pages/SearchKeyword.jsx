import React from "react";
import styles from "./SearchKeyword.module.css";
import { useSearchToKeyword } from "../hooks/useSearchBooks";
import BookSkeleton from "../components/BookSkeleton";
import Book from "../components/Book";

export default function SearchKeyword() {
  const { books, isFetching, bookMarks } = useSearchToKeyword();
  console.log(books);
  if (isFetching)
    return (
      <section className={styles.section}>
        <ul className={styles.bookList}>
          {[1, 2, 3, 4, 5].map((n) => (
            <li key={n}>
              <BookSkeleton />
            </li>
          ))}
        </ul>
      </section>
    );

  return (
    <>
      <section className={styles.section}>
        <ul className={styles.bookList}>
          {books &&
            books.item.map((book) => (
              <li key={book.itemId}>
                <Book
                  data={book}
                  type={"add"}
                  animation={true}
                  hasBookMark={bookMarks?.includes(book.isbn13)}
                />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
