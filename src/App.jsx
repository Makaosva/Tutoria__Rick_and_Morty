import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./views/Home";
import Charecters from "./views/Charecters";
import CharactersDetails from "./views/CharactersDetails";
import "./App.css";

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
