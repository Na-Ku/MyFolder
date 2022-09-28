import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img id="hero" src="./gambar1/re/hero.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero;