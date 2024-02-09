import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import BookItem from "../../components/BookItem";
import useSearch from "../../hooks/useSearch";
import useFetch from "../../hooks/useFetch";

function Home() {
  const defaultBooks = useFetch();
  const {
    books: searchedBooks,
    fetchBooks: searchBooks,
    currentPage,
    setCurrentPage,
    isLoading,
  } = useSearch();

  const [displayedBooks, setDisplayedBooks] = useState([]);

  useEffect(() => {
    // Initially set the default books as the displayed books
    setDisplayedBooks(defaultBooks);
  }, [defaultBooks]);

  const handleSearch = (query) => {
    searchBooks(query);
  };

  useEffect(() => {
    setDisplayedBooks(searchedBooks);
  }, [searchedBooks]);

  const totalPages = Math.ceil(displayedBooks.length / 10);
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 20;
  const endIndex = Math.min(startIndex + 20, displayedBooks.length);

  return (
    <>
      <p className="text-5xl text-center">BOOK ARCHIVE📖</p>
      <div className="flex justify-center px-4 py-10">
        <div className="">
          <SearchBar onSearch={handleSearch} />
          <div>
            {isLoading ? (
              <div className="">
                <div className="w-full font-semibold flex justify-center flex-col mt-10 text-center animate-pulse">
                  <p>Searching in Our Archives.... </p>
                </div>
                <div className="w-full flex justify-center flex-col mt-10">
                  <span className="loading loading-ring  w-full"></span>
                </div>
              </div>
            ) : (
              <>
                {displayedBooks
                  .slice(startIndex, endIndex)
                  .map((book, index) => (
                    <BookItem key={index} book={book} />
                  ))}
                <div className="join mt-5">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      className={`join-item btn ${
                        currentPage === i + 1 ? "btn-active" : ""
                      }`}
                      onClick={() => handleChangePage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
