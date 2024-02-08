import React from "react";
import SearchBar from "../../components/SearchBar";
import BookItem from "../../components/BookItem";
import useSearch from "../../hooks/useSearch"; // Adjust the import path as necessary
import useFetch from "../../hooks/useFetch"; // Adjust the import path as necessary

function Home() {
  const { books, fetchBooks } = useSearch();
  const alreadyReadBooks = useFetch();

  return (
    <div className="flex justify-center">
      <div className="">
        <SearchBar onSearch={fetchBooks} />
        <div>
          {books.map((book, index) => (
            <BookItem key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
