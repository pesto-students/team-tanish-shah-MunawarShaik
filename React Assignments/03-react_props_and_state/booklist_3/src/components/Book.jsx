import React from "react";
import { BookDetail } from "./BookDetail";
import "../App.css";

export class Book extends React.PureComponent {
  render() {
    // console.log("in Book comp", this.props.bookList);
    // console.log("in Book comp", this.props.deleteBookHandler);
    const { bookList, deleteBookHandler } = this.props;

    return (
      <div>
        <ul className="list">
          {bookList.map((book) => {
            return (
              <BookDetail
                book={book}
                deleteBookHandler={deleteBookHandler}
                key={book.title}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
