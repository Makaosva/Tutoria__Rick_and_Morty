import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Charecters() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <Container>
      <h1>Characters</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <NavLink to={`/characters/${character.id}`}>
              {character.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Charecters;
