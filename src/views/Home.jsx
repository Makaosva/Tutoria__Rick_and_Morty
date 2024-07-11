import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToCharacters = () => {navigate('/characters');}

  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Rick and Morty App </h1>
      <Button onClick={goToCharacters}>Go to Characters</Button>
    </Container>
  );
}

export default Home;
