import { useState, useEffect } from "react";
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
    <Container className="mt-5">
      <Card>
        <Row noGutters>
          <Col md={4}>
            <Card.Img className="character-img" src={character.image} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>Status: {character.status}</Card.Text>
              <Card.Text>Species: {character.species}</Card.Text>
              <Card.Text>Gender: {character.gender}</Card.Text>
              <Card.Text>Origin: {character.origin.name}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default CharactersDetails;
