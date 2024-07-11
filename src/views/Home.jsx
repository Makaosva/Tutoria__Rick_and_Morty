import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Rick and Morty App </h1>
      <Button onClick={() => navigate("/characters")}>Go to Characters</Button>
    </Container>
  );
}

export default Home;
