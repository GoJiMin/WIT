import React from "react";
import { useMyLibrary } from "../hooks/useMyLibrary";
import {
  MdFirstPage,
  MdLastPage,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { HiArrowUp } from "react-icons/hi2";
import Book from "./../components/Book.jsx";
import BookSkeleton from "./../components/BookSkeleton";
import Pagination from "react-js-pagination";
import styles from "./MyLibrary.module.css";
import "./pagination.css";
import { Link } from "react-router-dom";

export default function MyLibrary() {
  const {
    handlePageChange,
    scrollToTopBehavior,
    currentPage,
    books,
    page,
    postPerPage,
    hasBooks,
    isFetching,
    listBox,
  } = useMyLibrary();

  if (isFetching)
    return (
      <section className={styles.bookMarkSection}>
        <ul className={styles.bookMarkList}>
          {[1, 2, 3, 4, 5].map((n) => (
            <li key={n}>
              <BookSkeleton />
            </li>
          ))}
        </ul>
      </section>
    );

  if (!hasBooks)
    return (
      <section className={styles.section}>
        <div className={styles.errorBox}>
          <p className={styles.error}>서재가 비어있어요.</p>
          <p className={styles.error__text}>
            책을 검색하고 마음에 드는 책을 나의 서재에 추가해 보세요!
          </p>
          <Link to='/select'>
            <button className={styles.error__btn}>검색하기</button>
          </Link>
        </div>
      </section>
    );

  return (
    <section className={styles.section}>
      {currentPage && (
        <section className={styles.bookMarkSection}>
          <ul className={styles.bookMarkList} ref={listBox}>
            {currentPage &&
              currentPage.map((book) => (
                <Book
                  key={book.isbn13}
                  data={book}
                  hasBookMark={true}
                  animation={false}
                />
              ))}
          </ul>
          <button className={styles.btn} onClick={scrollToTopBehavior}>
            <HiArrowUp />
          </button>
          <Pagination
            activePage={page}
            itemsCountPerPage={postPerPage}
            totalItemsCount={books?.length}
            pageRangeDisplayed={5}
            prevPageText={<MdOutlineKeyboardArrowLeft />}
            firstPageText={<MdFirstPage />}
            nextPageText={<MdOutlineKeyboardArrowRight />}
            lastPageText={<MdLastPage />}
            onChange={handlePageChange}
          />
        </section>
      )}
    </section>
  );
}
