import { useEffect, useState } from "react";

function BooksList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Yuklanmoqda...</p>;

  return (
    <div className="p-5">
      <ul className="mx-auto grid grid-cols-6 space-y-2">
        {books.map((book) => (
          <li key={book._id} className="rounded-lg p-4 shadow-md">
            <img
              src={book.img}
              alt={book.title}
              className="h-60 w-full rounded-lg object-cover"
            />
            <h3 className="font-dancing text-[20px] font-normal uppercase">
              {book.title}
            </h3>
            <p className="text-[12px] font-light capitalize text-gray-600">
              {book.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
