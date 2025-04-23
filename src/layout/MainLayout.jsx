import { useEffect, useState } from "react";
import { HeaderCorusel } from "../components/HeaderCorusel";
import Kategoriya from "../components/Kategoriya";
import Navbar from "../components/Navbar";
import SearchSection from "../components/SearchSection";
import BooksList from "../components/BooksList"; // Import BooksList component

function MainLayout({ children }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial book data
  useEffect(() => {
    fetch("https://library-project-6agw.onrender.com/get_books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API xatosi:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    fetch(
      `https://library-project-6agw.onrender.com/search_books?title=${encodeURIComponent(query)}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("API xatosi:", error);
      });
  };

  return (
    <div
      className="bg-[length:1000px_900px] bg-[position:860px_450px] bg-no-repeat"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <Navbar className="border-b border-[#292929]" />
      <HeaderCorusel />
      <SearchSection
        onSearch={handleSearch}
        className="relative bottom-[45px] mx-auto flex"
      />
      <Kategoriya />
      <BooksList books={books} loading={loading} /> {children}
    </div>
  );
}

export default MainLayout;
