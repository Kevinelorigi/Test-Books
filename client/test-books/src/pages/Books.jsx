import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"

const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() =>{
    const fecthAllBooks = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fecthAllBooks()
  }, [])

  return (
    <div>
      <h1>Libreria</h1>
      <div className='books'>
        {books.map(book=>(
          <div key={book.id} className='book'>
            {book.cover && <img src={book.cover} alt=''/>}
            <h2>{book.title}</h2>
            <h2>{book.desc}</h2>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button><Link to="/add">Agregar nuevo libro</Link></button>
    </div>
  )
}

export default Books
