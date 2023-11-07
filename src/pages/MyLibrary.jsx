import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getLibrary } from "../services/firebase";
import Book from "./../components/Book.jsx";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "react-js-pagination";
import "./pagination.css";
import styles from "./MyLibrary.module.css";
import BookSkeleton from "./../components/BookSkeleton";

export default function MyLibrary() {
  const { uid } = useAuthContext();
  console.log(uid);
  const { isFetching, data: books } = useQuery(["books"], () =>
    getLibrary(uid)
  );

  const [currentPage, setCurrentPage] = useState(books); // 목록에 보여줄 게시글
  const [page, setPage] = useState(1); // 현재 페이지 번호

  const postPerPage = 5; // 페이지 당 게시글 개수
  const indexOfLastPage = page * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setCurrentPage(books.slice(indexOfFirstPage, indexOfLastPage));
  }, [books, page]);

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

  const hasBooks = books && books.length > 0;

  return (
    <section className={styles.section}>
      {/* <p>나의 서재</p> */}
      {!hasBooks && <p>서재에 추가된 책이 없습니다.</p>}
      {currentPage && (
        <section className={styles.bookMarkSection}>
          <ul className={styles.bookMarkList}>
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
          <Pagination
            activePage={page}
            itemsCountPerPage={postPerPage}
            totalItemsCount={books?.length}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </section>
      )}
    </section>
  );
}
