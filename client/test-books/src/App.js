import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books.jsx";
import Add from "./pages/Add.jsx";
import Update from "./pages/Uptade.jsx";

const App = () => {
  return (
    <div className="min-h-[calc(100vh-70px)] p-5 flex items-center justify-center text-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
