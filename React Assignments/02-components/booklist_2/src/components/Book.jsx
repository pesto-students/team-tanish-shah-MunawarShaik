import React from "react";
import { BookDetail } from "./BookDetail";

export class Book extends React.PureComponent {
  render() {
    // console.log("in Book comp", this.props);

    return (
      <div>
        <BookDetail books={this.props} />
      </div>
    );
  }
}
