import React, { useState, useEffect } from "react";
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import electronics from "../../imgs/electronics.png";
import fashion from "../../imgs/fashion.png";
import personalcare from "../../imgs/personalcare.jpg";
import footwear from "../../imgs/footwear.png";
import automotives from "../../imgs/automotives.png";
import accessories from "../../imgs/accessories.png";
import homeandliving from "../../imgs/homeandliving.png";

const CarouselComp = () => {
  const [quotes, setQuotes] = useState([]);
  const images = [
    electronics,
    fashion,
    personalcare,
    homeandliving,
    footwear,
    automotives,
    accessories,
  ];
  
  const categories= [
    "Electronics",
    "Fashion",
    "Personal Care",
    "Home And Living",
    "Footwear",
    "Automotives",
    "Accessories",
  ];
  const navigate = useNavigate();

  const handleSeeAll = (category) => {
    navigate(`/products?view=${category.replace(/^.*[\\/]/, "").split(".")[0]}`);
  };

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
          <div className="carousel-item-container">
            <img
              className="carousel-img d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            <button
              className="shop-button"
              onClick={() => handleSeeAll(images[index])}
            >
              Shop {categories[index]}
            </button>
          </div>
          <CarouselCaption className="carousel-caption">
            {quotes[index] && <p>{quotes[index].quote}</p>}
          </CarouselCaption>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default CarouselComp;