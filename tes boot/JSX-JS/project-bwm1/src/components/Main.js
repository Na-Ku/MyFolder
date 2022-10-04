import { Container } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "./Hero";
import List from "./coba/list";
import Filter from "./coba/filter";

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
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Map Method</Accordion.Header>
          <Accordion.Body>{<List />}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Filter Method</Accordion.Header>
          <Accordion.Body>{<Filter />}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="2">
        <Accordion.Item eventKey="2">
          <Accordion.Header>Reduce Method</Accordion.Header>
          <Accordion.Body>
            <p>
              Method ini kurang lebih adalah untuk menumlahkan seluruh isi dari Object maupun Array
            </p>
            <p>
              Selain itu ada juga Method yang lain yang bisa dieksplor seperti Method Push, dan lain-lain
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Cont;
