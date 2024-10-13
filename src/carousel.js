import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/3.png'
import img2 from './images/planet-space-abstract-background-digital-art-2k-wallpaper-uhdpaper.com-234@0@g.jpg'
import img3 from './images/spaceship-rocket-space-digital-art-2k-wallpaper-uhdpaper.com-274@0@j.jpg'
import './carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img style={{height:'90vh',objectFit:'cover'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <div className="absolute inset-0 bg-black opacity-35"></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh',objectFit:'cover', background:'black'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
      <div className="absolute inset-0 bg-black opacity-55"></div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh',objectFit:'cover'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
      <div className="absolute inset-0 bg-black opacity-55"></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;