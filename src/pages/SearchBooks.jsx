import React from "react";
import { useParams } from "react-router-dom";

export default function SearchBooks() {
  const { categoryId } = useParams();
  console.log(categoryId);
  return <div>SearchBooks {categoryId}</div>;
}
