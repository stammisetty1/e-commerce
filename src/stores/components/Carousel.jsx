// Carousel.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import downloadImg from "../../imgs/download.jpeg"
const Carousel = () => {
    const [quotes, setQuotes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Fetch quotes from the API
        fetch('https://dummyjson.com/quotes')
            .then((res) => res.json())
            .then((data) => {
                setQuotes(data.quotes);
            });
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
    };

    return (
        <div className="carousel-container">
            {quotes.length > 0 && (
                <motion.div
                    className="carousel-item"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img id="carousel-img" src={downloadImg}/>
                    <p>{quotes[currentIndex].quote}</p>
                </motion.div>
            )}
            <div className="carousel-buttons">
                <button className="carousel-button" onClick={prevSlide}>Previous</button>
                <button className="carousel-button" onClick={nextSlide}>Next</button>
            </div>
        </div>
    );
};

export default Carousel;
