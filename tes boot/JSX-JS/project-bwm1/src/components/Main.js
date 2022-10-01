import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "./Hero";
import List from "./coba/list";

const Cont = () => {
  return (
    <Container>
      <Row className="mt-5 d-flex justify-content-around">
        <Col sm={8}>
          <Hero />
        </Col>
        <Col sm={4}>
          <h2 className="d-flex justify-content-center">Event</h2>
        </Col>
      </Row>
      <Row>
        <h4>Buah</h4>
        <List />
      </Row>
    </Container>
  );
};

export default Cont;
