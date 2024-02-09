import { useState } from "react";

const useSearch = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const [itemsPerPage] = useState(20); // Number of items to display per page

  const fetchBooks = (query) => {
    setIsLoading(true);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const searchUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(
      query
    )}&start=${startIndex}&limit=${itemsPerPage}`;
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { books, fetchBooks, currentPage, setCurrentPage, isLoading };
};

export default useSearch;
