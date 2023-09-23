import React from "react";
import "../App.css";

export function Book({ book }) {
  console.log(book);
  return (
    <ul className="list">
      <li className="listItem">
        <h3 className="heading">{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Year: {book.year}</p>
      </li>
    </ul>
  );
}
