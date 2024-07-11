import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Loader from "../Components/Loader";

function Charecters() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

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
    // Como lo tiene el profe con foto y no con Select
    //     <Container>
    //     <h1 className="mt-5">Characters</h1>
    //     <Row>
    //       {characters.map((character, index) => (
    //         <Col key={index} xs={12} lg={3} md={4} className="mb-4">
    //           <Card>
    //             <Card.Img variant="top" src={character.image} />
    //             <Card.Body>
    //               <Card.Title>{character.name}</Card.Title>
    //               <NavLink
    //                 to={`/characters/${character.id}`}
    //                 activeClassName="active"
    //               >
    //                 View Details
    //               </NavLink>
    //             </Card.Body>
    //           </Card>
    //         </Col>
    //       ))}
    //     </Row>
    //   </Container>
  );
}

export default Charecters;
