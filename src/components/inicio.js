import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container'

const Inicio = () => {
  return (
    <Container>
      <h1>Bienvenidos a New Tech</h1>
      <Link to="/contact">Contacto</Link>
    </Container>
  );
};

export default Inicio;
