import { useRef } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { searchToTag, searchToKeyword } from "../services/aladin";
import { getBookMarks } from "../services/firebase";

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
  const { keyword } = useParams();
  const { uid } = useAuthContext();
  // const naviate = useNavigate();

  const [{ data: books, isFetching }, { data: bookMarks }] = useQueries({
    queries: [
      {
        queryKey: ["bookData"],
        queryFn: () => searchToKeyword(keyword),
      },
      {
        queryKey: ["bookMarks"],
        queryFn: () => getBookMarks(uid),
      },
    ],
  });

  return { books, isFetching, bookMarks };
}
