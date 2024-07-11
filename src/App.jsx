import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import Charecters from "./views/Charecters";
import CharactersDetails from "./views/CharactersDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Charecters />} />
        <Route path="/characters/:id" element={<CharactersDetails />} />
      </Routes>
    </>
  );
}

export default App;
