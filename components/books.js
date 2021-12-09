import React, { Component } from "react";
import { bookData } from "../data";

class Books extends React.Component {
  //display data from data.js
  render() {
    return (
      <div>
        <h1>Books</h1>
        <ul>
          {bookData.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Books;
