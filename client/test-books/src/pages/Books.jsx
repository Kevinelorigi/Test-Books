import React, { useEffect, useState } from 'react'
import axios from "axios"

const Books = () => {

  const [book, setBooks] = useState()

  useEffect(() =>{
    const fecthAllBooks = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/books")
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
    fecthAllBooks()
  }, [])

  return (
    <div>
      Book
    </div>
  )
}

export default Books
