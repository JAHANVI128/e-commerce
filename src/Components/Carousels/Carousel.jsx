// import Carousel from 'react-bootstrap/Carousel';
//  import C1 from '../Assets/C1.png'
//  import C2 from '../Assets/C2.png'
//  import C3 from '../Assets/C3.png'
// import CarouselItem from 'react-bootstrap/CarouselItem'

// function SlideCarousel() {
//   return (
//     <Carousel>
//       <CarouselItem interval={3000}>
//         <img src={C1} alt='Carousel' />
//       </CarouselItem>
//       <CarouselItem interval={3000}>
//         <img src={C2} alt='Carousel' />
//       </CarouselItem>
//       <CarouselItem>
//         <img src={C3} alt='Carousel' />      
//       </CarouselItem>
//     </Carousel>
//   );
// }

// export default SlideCarousel;

// import Carousel from 'react-bootstrap/Carousel';
// import '../Carousels/Carousel.css'

// function SlideCarousel() {
//   return (
//     <Carousel>
//       <Carousel.Item interval={1000}>
//         <img
//           className="d-block w-100"
//           src={C1}
//           alt="First slide"
//         />
//       </Carousel.Item>
//       <Carousel.Item interval={1000}>
//         <img
//           className="d-block w-100"
//           src={C2}
//           alt="Second slide"
//         />
//       </Carousel.Item>
//       <Carousel.Item interval={1000}>
//         <img
//           className="d-block w-100"
//           src={C3}
//           alt="Third slide"
//         />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default SlideCarousel;

// CustomCarousel.js
import React, { useState } from 'react';
import './Carousel.css'; // Import custom CSS for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <div className="image-overlay">
            <h2>{image.alt}</h2>
          </div>
        </div>
      ))}
      <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
      <button className="next" onClick={goToNextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
