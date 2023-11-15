import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SelectTags from "./pages/SelectTags.jsx";
import SearchBooks from "./pages/SearchBooks.jsx";
import NotFound from "./pages/NotFound.jsx";
import Recommend from "./pages/Recommend";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import MyLibrary from "./pages/MyLibrary.jsx";
import SearchKeyword from "./pages/SearchKeyword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "select", element: <SelectTags /> },
      { path: "search/category/:categoryId", element: <SearchBooks /> },
      { path: "search/keyword/:keyword", element: <SearchKeyword /> },
      { path: "recommend", element: <Recommend /> },
      {
        path: "library",
        element: (
          <ProtectedRoute>
            <MyLibrary />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
