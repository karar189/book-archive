import React, { useState } from "react";

function BookItem({ book }) {
  const [read, setRead] = useState(false);
  const toggleRead = () => setRead(!read);
  const bookData = book.work ? book.work : book;

  const coverImage = bookData.cover_i
    ? `https://covers.openlibrary.org/a/id/${bookData.cover_i}-M.jpg`
    : bookData.cover_id
    ? `https://covers.openlibrary.org/b/id/${bookData.cover_id}-M.jpg`
    : "gg";

  console.log(bookData);

  return (
    <div className="card bg-gray-900 shadow-xl m-2 mt-10 text-white">
      <figure>
        <img src={coverImage} alt={bookData.title} className="rounded mt-8" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookData.title}</h2>
        <p>Author: {bookData.author_name}</p>
        <p>Published Year: {bookData.first_publish_year}</p>
        <div className="card-actions">
          <button
            onClick={toggleRead}
            className={`btn w-full ${read ? "btn-success" : ""}`}
          >
            {read ? "Read" : "Unread"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
