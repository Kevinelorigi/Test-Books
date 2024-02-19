import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <form onSubmit={handleClick} className="flex flex-col gap-5">
      <h1 className="text-2xl text">Agregar Nuevo Libro</h1>
      <input
        className="w-[250px] p-4 border-black border-2"
        type="text"
        placeholder="Titulo"
        onChange={handleChange}
        name="title"
      />
      <textarea
        className="w-[250px] p-4 border-black border-2"
        rows={5}
        type="text"
        placeholder="Descripción"
        onChange={handleChange}
        name="desc"
      />
      <input
        className="w-[250px] p-4 border-black border-2"
        type="number"
        placeholder="Precio"
        onChange={handleChange}
        name="price"
      />
      <input
        className="w-[250px] p-4 border-black border-2"
        type="text"
        placeholder="Imagen"
        onChange={handleChange}
        name="cover"
      />
      <button
        className="border-none p-5 bg-orange-300 text-white cursor-pointer"
        type="submit"
      >
        Agregar
      </button>
    </form>
  );
};

export default Add;
