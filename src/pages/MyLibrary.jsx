import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getLibrary } from "../services/firebase";
import Book from "./../components/Book.jsx";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "react-js-pagination";
import "./pagination.css";

export default function MyLibrary() {
  const { uid } = useAuthContext();
  console.log(uid);
  const {
    isLoading,
    error,
    data: books,
  } = useQuery(["books"], () => getLibrary(uid));

  const [bookMarkList, setBookMarkList] = useState([]); // 받아온 북마크 데이터
  const [currentPage, setCurrentPage] = useState(bookMarkList); // 목록에 보여줄 게시글
  const [page, setPage] = useState(1); // 현재 페이지 번호

  const postPerPage = 5; // 페이지 당 게시글 개수
  const indexOfLastPage = page * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    books && setBookMarkList(books);
  }, []);

  useEffect(() => {
    setCurrentPage(bookMarkList.slice(indexOfFirstPage, indexOfLastPage));
  }, [bookMarkList, page]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error!</p>;

  const hasBooks = books && books.length > 0;

  return (
    <section>
      <p>나의 서재</p>
      {!hasBooks && <p>서재에 추가된 책이 없습니다.</p>}
      {hasBooks && (
        <>
          <ul>
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
            totalItemsCount={bookMarkList.length}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </>
      )}
    </section>
  );
}
