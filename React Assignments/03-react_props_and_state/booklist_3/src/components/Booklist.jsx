import React, { useState } from "react";
import { Book } from "./Book";
import WithLogging from "./WithLogging";
import { BookForm } from "./BookForm";

const books = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2018 },
  { title: "Book 3", author: "Author 3", year: 2022 },
  { title: "Book 4", author: "Author 4", year: 2020 },
  { title: "Book 5", author: "Author 5", year: 2018 },
  { title: "Book 6", author: "Author 6", year: 2022 },
  { title: "Book 7", author: "Author 7", year: 2020 },
  { title: "Book 8", author: "Author 8", year: 2018 },
  { title: "Book 9", author: "Author 9", year: 2022 },
];
function Booklist() {
  const [bookList, setBookList] = useState(books);

  const addBooksHandler = (book) => {
    console.log("in add books handler");
    console.log(book);
    setBookList([...bookList, book]);
  };

  const deleteBookHandler = (title) => {
    console.log("in delete books handler");
    const newList = bookList.filter((book) => book.title !== title);
    setBookList(newList);
  };

  //console.log(bookList);
  return (
    <div className="main">
      <h1 className="mainHeading">Book List</h1>
      <BookForm props={bookList} addBooksHandler={addBooksHandler} />
      {bookList.length > 0 ? (
        <Book bookList={bookList} deleteBookHandler={deleteBookHandler} />
      ) : (
        <h2>Book List is Currently empty</h2>
      )}
    </div>
  );
}
export default WithLogging(Booklist);

// class Booklist extends Component {

//  addBooksHandler = (enteredBooksData) => {
//   const booksData = {
//     ...books,enteredBooksData
//   };
//   onAddExpense(booksData);
// };
//   render() {
//     return (
//       <div className="main">
//         <h1 className="mainHeading">Book List</h1>
//         <BookForm props={books} onAddBooks={this.addBooksHandler} />
//         <Book props={books} />
//       </div>
//     );
//   }
// }
// export default WithLogging(Booklist);
