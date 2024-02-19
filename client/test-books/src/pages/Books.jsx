import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fecthAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-3xl p-5">Libreria</h1>
      <div className="flex gap-3">
        {books.map((book) => (
          <div key={book.id} className="flex flex-col gap-3 items-center">
            {book.cover && (
              <img
                className="w-[200px] h-[300px] object-cover bg-green-100"
                src={book.cover}
                alt=""
              />
            )}
            <h2>{book.title}</h2>
            <h2>{book.desc}</h2>
            <span>{book.price}</span>
            <button
              className="border-none p-3 bg-red-400 rounded-md"
              onClick={()=>handleDelete(book.id)}
            >
              Eliminar
            </button>
            <button className="border-none p-2 bg-blue-400 rounded-md">
             <Link to={`/update/${book.id}`}>Actualizar</Link>
            </button>
          </div>
        ))}
      </div>
      <button className="p-5 bg-green-400 rounded-md m-5">
        <Link to="/add">Agregar nuevo libro</Link>
      </button>
    </div>
  );
};

export default Books;
