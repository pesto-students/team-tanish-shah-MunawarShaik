import "../App.css";

export function BookDetail({ books }) {
  // console.log("in book detail comp", books);
  return (
    <ul className="list">
      {books.props.map((book) => {
        return (
          <li className="listItem" key={book.title}>
            <h3>Title :{book.title}</h3>
            <p>Author :{book.author}</p>
            <p>Year :{book.year}</p>
          </li>
        );
      })}
    </ul>
  );
}
