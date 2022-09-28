import { Carousel } from "react-bootstrap";
import hero from "./gambar1/re/hero.jpg";
import "./fil.css";

const Hero = () => {
  return (
    <Carousel fade className="shadow mb-5 bg-body rounded">
      <Carousel.Item>
        <img id="hero" className="rounded-1" src={hero} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
