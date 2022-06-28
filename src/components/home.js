import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <h1>Bienvenidos a New Tech</h1>
      <Typography variant="h6">
        <Link  style={{"text-decoration":"none"}} to="/contact">
          Contacto
        </Link>
      </Typography>
    </Container>
  );
};

export default Home;
