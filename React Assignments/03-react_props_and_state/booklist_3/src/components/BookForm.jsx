import React, { useState } from "react";
import "../App.css";

export function BookForm({ props, addBooksHandler }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hanldeSubmit clicked");
    let data = {
      title: title,
      author: author,
      year: new Date(year).getFullYear(),
    };
    addBooksHandler(data);
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div className="formDiv">
      <form className="form" onSubmit={handleSubmit}>
        <label id="title" className="label">
          Title
          <input
            className="input"
            type="text"
            htmlFor="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label id="author" className="label">
          Author
          <input
            className="input"
            value={author}
            type="text"
            htmlFor="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>

        <label id="year" className="label">
          Year
          <input
            className="input"
            value={year}
            type="date"
            htmlFor="year"
            onChange={(e) => setYear(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
