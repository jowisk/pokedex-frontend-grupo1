import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Paginas/Home";
import Details from "./Paginas/Details";
import AddPokemonForm from "./Paginas/AddPokemonForm";
import "@fontsource/poppins";

function App() {
  return (
    <div className="min-w-[320px] lg:w-[800px] m-auto h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/details/:id" element={<Details />} />

          <Route path="/add" element={<AddPokemonForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
