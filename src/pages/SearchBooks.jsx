import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { searchToTag } from "../services/aladin";
import Book from "../components/Book.jsx";
import styles from "./SearchBooks.module.css";
import Button from "../components/Button.jsx";
import { HiArrowUp } from "react-icons/hi2";
import { useQueries } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { getBookMarks } from "../services/firebase";

export default function SearchBooks() {
  const { uid } = useAuthContext();
  const listBox = useRef();
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [{ data: books, refetch }, { data: bookMarks }] = useQueries({
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

  // if (isLoading) return <p>Loading...</p>;
  // if (isFetching) return <p>Loading...</p>;

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
          <button className={styles.up} onClick={scrollToTop}>
            <HiArrowUp />
          </button>
        </section>
      )}
    </>
  );
}
