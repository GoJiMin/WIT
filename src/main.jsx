import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SelectTags from "./pages/SelectTags.jsx";
import SearchBooks from "./pages/SearchBooks.jsx";
import BookDetail from "./pages/BookDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFonud />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "select", element: <SelectTags /> },
      { path: "search", element: <SearchBooks /> },
      { path: "search/:id", element: <BookDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
