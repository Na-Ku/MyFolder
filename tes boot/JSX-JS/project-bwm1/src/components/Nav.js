import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navb = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    // <Navbar bg="primary" variant="dark" expand="lg"> Jadi, react-bootstrap ini bisa dikombinasikan dengan syntax bootstrap biasa.
    <Navbar className="navbar bg-primary bg-opacity-75 shadow-sm" variant="dark" sticky="top" data-aos="fade-down" data-aos-duration="850">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          Sekolah-Ku
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 fw-semibold" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Season" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">Season</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Ova</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">My Anime List</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Wattpad</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Link Nonton</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navb;
