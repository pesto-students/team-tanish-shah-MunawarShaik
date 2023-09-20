import React from "react";
import { Book } from "./Book";

import "../App.css";

const books = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2018 },
  { title: "Book 3", author: "Author 3", year: 2022 },
];
export function Booklist() {
  return (
    <div className="main">
      <h1 className="mainHeading">Book List</h1>
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </div>
  );
}
