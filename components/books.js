import React, { Component } from "react";
import { bookData } from "../data.js";

//Render title, author, imageURL

function BookList() {
  return (
    console.log("hello", bookData.title),
    (
      <div>
        <h1>Book List</h1>
        <ul>
          {bookData.map((book) => () => (
            <li key={book.title}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <img src={book.imageURL} alt={book.title} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

export default BookList;

// class Books extends React.Component {
//   //display data from data.js
//   render() {
//     return (
//       <div>
//         <h1>Books</h1>
//         <ul>
//           {bookData.map((book) => (
//             <li key={book.id}>
//               {book.title} by {book.author}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
// export default Books;
