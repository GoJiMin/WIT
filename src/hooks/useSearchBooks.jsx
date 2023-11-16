import { useRef } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import { useQueries, useQueryClient } from "@tanstack/react-query";
import { searchToTag, searchToKeyword } from "../services/aladin";
import { getBookMarks } from "../services/firebase";
import { useState } from "react";
import { useEffect } from "react";

export function useSearchToTag() {
  const listBox = useRef();
  const { uid } = useAuthContext();
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const [{ data: books, refetch, isFetching }, { data: bookMarks }] =
    useQueries({
      queries: [
        {
          queryKey: ["bookData", categoryId],
          queryFn: () => searchToTag(categoryId),
        },
        {
          queryKey: ["bookMarks"],
          queryFn: () => getBookMarks(uid),
        },
      ],
    });

  const handleSearch = () => {
    refetch();
    scrollToTop();
  };

  const scrollToTop = () => {
    listBox.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    navigate(-1);
  };

  return {
    handleSearch,
    handleClick,
    scrollToTop,
    books,
    bookMarks,
    isFetching,
    listBox,
  };
}

export function useSearchToKeyword() {
  const queryClient = useQueryClient();
  const listBox = useRef();
  const { keyword } = useParams();
  const { uid } = useAuthContext();
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();

  const [{ data: books, isLoading }, { data: bookMarks }] = useQueries({
    queries: [
      {
        queryKey: ["bookData", pageNumber],
        queryFn: () => searchToKeyword(keyword, pageNumber),
        keepPreviousData: true,
      },
      {
        queryKey: ["bookMarks"],
        queryFn: () => getBookMarks(uid),
      },
    ],
  });

  const handlePageChange = (page) => {
    scrollToTop();
    setPageNumber(page);
  };

  const preFetching = () => {
    const nextPage = pageNumber + 1;
    const maxPage = Math.ceil(books?.totalResults / 10);
    if (pageNumber < maxPage) {
      queryClient.prefetchQuery(["bookData", nextPage], () =>
        searchToKeyword(keyword, nextPage)
      );
    }
  };

  const backspace = () => {
    navigate(-1);
  };

  const scrollToTop = () => {
    listBox.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    preFetching();
  }, [queryClient, pageNumber]);

  return {
    books,
    isLoading,
    pageNumber,
    bookMarks,
    listBox,
    scrollToTop,
    handlePageChange,
    backspace,
  };
}
