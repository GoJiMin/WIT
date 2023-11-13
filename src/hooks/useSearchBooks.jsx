import { useRef } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { searchToTag } from "../services/aladin";
import { getBookMarks } from "../services/firebase";

export function useSearchBooks() {
  const { uid } = useAuthContext();
  const listBox = useRef();
  const { categoryId } = useParams();
  const navigate = useNavigate();

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
