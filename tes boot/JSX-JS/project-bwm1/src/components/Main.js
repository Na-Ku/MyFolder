import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "./Hero";

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
    </Container>
  );
};

export default Cont;
