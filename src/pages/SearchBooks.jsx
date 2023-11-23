import React from "react";
import Book from "../components/Book.jsx";
import styles from "./SearchBooks.module.css";
import Button from "../components/Button.jsx";
import { HiArrowUp } from "react-icons/hi2";
import BookSkeleton from "../components/BookSkeleton";
import { useScrollToTop, useSearchToTag } from "../hooks/useSearchBooks";

export default function SearchBooks() {
  const { listBox, scrollToTopBehavior, scrollToTop } = useScrollToTop();

  const { handleSearch, handleClick, books, bookMarks, isFetching } =
    useSearchToTag({ scrollToTop });

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
      {books && (
        <section className={styles.section}>
          <ul className={styles.bookList} ref={listBox}>
            {books &&
              books.item.map((book) => (
                <li key={book.isbn13}>
                  <Book
                    data={book}
                    type={"add"}
                    animation={true}
                    hasBookMark={bookMarks?.includes(book.isbn13)}
                  />
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
          <button className={styles.up} onClick={scrollToTopBehavior}>
            <HiArrowUp />
          </button>
        </section>
      )}
    </>
  );
}
