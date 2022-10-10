import { Carousel } from "react-bootstrap";
import hero from "./gambar1/re/hero.jpg";
import "./fil.css";
// import Aos from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";

const Hero = () => {
  // useEffect(() => {
  //   Aos.init({
  //     easing: "ease-out-cubic",
  //     once: true,
  //     offset: 50,
  //     delay: 50,
  //   });
  // }, []);

  return (
    <>
      <Carousel fade className="shadow mb-5 bg-body rounded" data-aos="zoom-in" data-aos-delay="370" data-aos-duration="1000">
        <Carousel.Item>
          <img id="hero" className="rounded-1" src={hero} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Hero;
