import "./App.css";
import { Container } from "react-bootstrap";
import "./components/fil.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import component
import Navb from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  return (
    <Container>
      <Navb fluid />
      <Row>
        <Col sm={7}>
          <Hero />
        </Col>
        <Col sm={5}>
          <h2>Halo</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
