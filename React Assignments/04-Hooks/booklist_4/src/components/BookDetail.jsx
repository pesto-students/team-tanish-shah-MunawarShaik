import { useState } from "react";
import "../App.css";

export function BookDetail(props) {
  // console.log("in book detail comp", props);
  const { book, deleteBookHandler } = props;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <li className="listItem" key={book.title}>
      <h3>Title :{book.title}</h3>
      {isVisible ? (
        <div>
          <p>Author : {book.author}</p>
          <p>Year : {book.year}</p>
          <button className="button" onClick={() => setIsVisible(!isVisible)}>
            Hide Details
          </button>
        </div>
      ) : (
        <div>
          <button className="button" onClick={() => setIsVisible(!isVisible)}>
            Show Details
          </button>
        </div>
      )}

      <button
        className="button deleteBtn"
        onClick={() => deleteBookHandler(book.title)}
      >
        Delete
      </button>
    </li>
  );
}
