import { useState } from "react";

const useSearch = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = (query) => {
    const searchUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(
      query
    )}`;
    fetch(searchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data.docs || []);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return { books, fetchBooks };
};

export default useSearch;
