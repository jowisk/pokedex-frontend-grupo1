import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import Login from "./Paginas/Login";
import Details from "./Paginas/Details";
import Register from "./Paginas/Register";
import Create from "./Paginas/Create";
import "@fontsource/poppins";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/pokedex" element={<Home />} />

          <Route path="/details/:id" element={<Details />} />

          <Route path="/create" element={<Create />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
