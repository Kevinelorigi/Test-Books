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
    <form onSubmit={handleClick} className="">
      <h1>Agregar Nuevo Libro</h1>
      <input
        type="text"
        placeholder="Titulo"
        onChange={handleChange}
        name="title"
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Descripción"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="Precio"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="Imagen"
        onChange={handleChange}
        name="cover"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Add;
