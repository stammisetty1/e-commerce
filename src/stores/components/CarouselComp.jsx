import React, { useState, useEffect } from "react";
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import ecommerce1 from "../../imgs/e-commerce1.avif";
import ecommerce2 from "../../imgs/e-commerce2.jpg";
import ecommerce3 from "../../imgs/e-commerce3.jpg";
import ecommerce4 from "../../imgs/e-commerce4.avif"
const CarouselComp = () => {
  const [quotes, setQuotes] = useState([]);
  const images = [ecommerce1, ecommerce2, ecommerce3, ecommerce4];

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
      });
  }, []);

  return (
    <Carousel className="carousel-container">
      {images.map((image, index) => (
        <CarouselItem key={index}>
          <img className="carousel-img d-block w-100" src={image} alt={`Slide ${index + 1}`} />
          <CarouselCaption className="carousel-caption">
            {quotes[index] && <p>{quotes[index].quote}</p>}
          </CarouselCaption>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default CarouselComp;