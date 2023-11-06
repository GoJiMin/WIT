import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { searchToTag } from "../services/aladin";
import Book from "../components/Book.jsx";
import styles from "./SearchBooks.module.css";
import Button from "../components/Button.jsx";
import { HiArrowUp } from "react-icons/hi2";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { getBookMarks } from "../services/firebase";
import { Suspense } from "react";

export default function SearchBooks() {
  const { uid } = useAuthContext();
  const listBox = useRef();
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const {
    isLoading,
    isFetching,
    data: books,
    refetch,
  } = useQuery(["bookData", categoryId], () => searchToTag(categoryId), {
    suspense: true,
  });
  const { data: bookMarks } = useQuery(["bookMarks"], () => getBookMarks(uid));

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

  console.log(isLoading);

  // if (isLoading) return <p>Loading...</p>;
  // if (isFetching) return <p>Loading...</p>;

  return (
    <Suspense fallback={<p>Loading...</p>}>
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
              <Button
                text={"다시 선택할래요. 🔍"}
                handleFunction={handleClick}
              />
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
    </Suspense>
  );
}
