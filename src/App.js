import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Paginas/Home";
import Login from "./Paginas/Login";
import Details from "./Paginas/Details";
import Create from "./Paginas/Create";
import "@fontsource/poppins";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/details/:id" element={<Details />} />

          <Route path="/create" element={<Create />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
