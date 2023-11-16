import React from "react";
import styles from "./SearchKeyword.module.css";
import { useSearchToKeyword } from "../hooks/useSearchBooks";
import {
  MdFirstPage,
  MdLastPage,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { HiArrowUp, HiArrowUturnLeft } from "react-icons/hi2";
import BookSkeleton from "../components/BookSkeleton";
import Book from "../components/Book";
import Pagination from "react-js-pagination";

export default function SearchKeyword() {
  const {
    books,
    isLoading,
    pageNumber,
    bookMarks,
    listBox,
    scrollToTop,
    handlePageChange,
    backspace,
  } = useSearchToKeyword();

  if (isLoading)
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
        <ul className={styles.bookList} ref={listBox}>
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
        <div className={styles.btnContainer}>
          <button className={styles.btn} onClick={backspace}>
            <HiArrowUturnLeft />
          </button>
          <button className={styles.btn} onClick={scrollToTop}>
            <HiArrowUp />
          </button>
        </div>
        <Pagination
          activePage={pageNumber}
          itemsCountPerPage={10}
          totalItemsCount={books?.totalResults}
          pageRangeDisplayed={5}
          prevPageText={<MdOutlineKeyboardArrowLeft />}
          firstPageText={<MdFirstPage />}
          nextPageText={<MdOutlineKeyboardArrowRight />}
          lastPageText={<MdLastPage />}
          onChange={handlePageChange}
        />
      </section>
    </>
  );
}
