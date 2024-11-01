import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img3 from './photo_2024-11-01_16-07-47.jpg'
import img2 from './23232.png'
import img1 from './Untitled design.png'
import '../carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img style={{height:'50vh',objectFit:'contain'}}
        className="d-block w-100 rounded-lg"
        src={img1}
        alt="First slide"
      />
        
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'50vh',objectFit:'contain', background:'black'}}
        className="d-block w-100 rounded-lg"
        src={img2}
        alt="Second slide"
      />
      
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'50vh',objectFit:'contain'}}
        className="d-block w-100 rounded-lg"
        src={img3}
        alt="Third slide"
      />
      
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;