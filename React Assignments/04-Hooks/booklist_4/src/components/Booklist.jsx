import React, { useEffect, useMemo, useState } from "react";
import { Book } from "./Book";
import WithLogging from "./WithLogging";
import { BookForm } from "./BookForm";
import "../App.css";

const books = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2018 },
  { title: "Book 3", author: "Author 3", year: 2022 },
  // { title: "Book 4", author: "Author 4", year: 2020 },
  // { title: "Book 5", author: "Author 5", year: 2018 },
  // { title: "Book 6", author: "Author 6", year: 2022 },
  // { title: "Book 7", author: "Author 7", year: 2020 },
  // { title: "Book 8", author: "Author 8", year: 2018 },
  // { title: "Book 9", author: "Author 9", year: 2022 },
];

// useBookFilter
function useBookFilter(bookList, searchItem) {
  // console.log("inside useBook filter");
  const filteredBooks = useMemo(() => {
    if (searchItem === "") {
      return bookList;
    }
    return bookList.filter((book) => {
      const title = book.title.toLowerCase();
      const author = book.author.toLowerCase();
      return title.includes(searchItem) || author.includes(searchItem);
    });
  }, [bookList, searchItem]);
  return filteredBooks;
}

// useBookSorter
function useBookSorter(books, sortingCriteria) {
  // Use useMemo to memoize the sorted book list
  const sortedBooks = useMemo(() => {
    // Clone the books array to avoid mutating the original state
    const booksClone = [...books];

    // Implement the sorting logic based on the sortingCriteria
    switch (sortingCriteria) {
      case "titleAscending":
        return booksClone.sort((a, b) => a.title.localeCompare(b.title));
      case "titleDescending":
        return booksClone.sort((a, b) => b.title.localeCompare(a.title));
      case "authorAscending":
        return booksClone.sort((a, b) => a.author.localeCompare(b.author));
      case "authorDescending":
        return booksClone.sort((a, b) => b.author.localeCompare(a.author));
      case "yearAscending":
        return booksClone.sort((a, b) => a.year - b.year);
      case "yearDescending":
        return booksClone.sort((a, b) => b.year - a.year);
      default:
        // If sortingCriteria is not recognized, return the original unsorted list
        return booksClone;
    }
  }, [books, sortingCriteria]);

  return sortedBooks;
}

function Booklist() {
  const [bookList, setBookList] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [sortingCriteria, setSortingCriteria] = useState("titleAscending");

  useEffect(() => {
    setBookList(books);
  }, []);

  const filteredBooks = useBookFilter(bookList, searchItem);
  const sortedAndFilteredBooks = useBookSorter(filteredBooks, sortingCriteria);

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

      <div className="formDiv">
        <div className="form">
          <h3>Search Book</h3>
          <label id="search" className="label">
            Search
            <input
              className="input"
              type="search"
              htmlFor="search"
              onChange={(e) => setSearchItem(e.target.value)}
              value={searchItem}
            />
          </label>
          <h3>Sort Books</h3>
          <label htmlFor="sorting" className="label">
            Sort by:
            <select
              className="input"
              id="sorting"
              onChange={(e) => setSortingCriteria(e.target.value)}
              value={sortingCriteria}
            >
              <option value="titleAscending">Title (A to Z)</option>
              <option value="titleDescending">Title (Z to A)</option>
              <option value="authorAscending">Author (A to Z)</option>
              <option value="authorDescending">Author (Z to A)</option>
              <option value="yearAscending">Year (Low to High)</option>
              <option value="yearDescending">Year (High to Low)</option>
            </select>
          </label>
        </div>
        <BookForm props={bookList} addBooksHandler={addBooksHandler} />
      </div>

      {sortedAndFilteredBooks.length > 0 ? (
        <Book
          bookList={sortedAndFilteredBooks}
          deleteBookHandler={deleteBookHandler}
        />
      ) : (
        <h2>No books match the filter criteria.</h2>
      )}
    </div>
  );
}
export default WithLogging(Booklist);
