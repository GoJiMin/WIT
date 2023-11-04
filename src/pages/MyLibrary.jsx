import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getLibrary } from "../services/firebase";
import Book from "./../components/Book.jsx";

export default function MyLibrary() {
  const { uid } = useAuthContext();
  console.log(uid);
  const {
    isLoading,
    error,
    data: books,
  } = useQuery(["books"], () => getLibrary(uid));

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
            {books &&
              books.map((book) => (
                <Book key={book.isbn13} data={book} type={"delete"} />
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
