import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function CharactersDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://rickandmortyapi.com/api/character/" + id;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Card>
        <Row>
          <Col>
            <Card.Img src={character.image} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>{character.species}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default CharactersDetails;
