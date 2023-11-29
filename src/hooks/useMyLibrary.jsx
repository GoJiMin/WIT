import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { getLibrary } from "../services/firebase";
import { useEffect } from "react";
import { useRef } from "react";

export function useMyLibrary() {
  const { uid } = useAuthContext();
  const listBox = useRef();
  const { isFetching, data: books } = useQuery(["books"], () =>
    getLibrary(uid)
  );

  const [currentPage, setCurrentPage] = useState(books); // 목록에 보여줄 게시글
  const [page, setPage] = useState(1); // 현재 페이지 번호

  const hasBooks = books && books.length > 0;
  const postPerPage = 10; // 페이지 당 게시글 개수
  const indexOfLastPage = page * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;

  const handlePageChange = (page) => {
    scrollToTop();
    setPage(page);
  };

  const handleSetCurrentPage = () => {
    setCurrentPage(books?.slice(indexOfFirstPage, indexOfLastPage));
  };

  const scrollToTop = () => {
    listBox.current?.scrollTo({ top: 0 });
  };

  const scrollToTopBehavior = () => {
    listBox.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleSetCurrentPage();
  }, [books, page]);

  return {
    handlePageChange,
    scrollToTopBehavior,
    currentPage,
    books,
    page,
    postPerPage,
    hasBooks,
    isFetching,
    listBox,
  };
}
