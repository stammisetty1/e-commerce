// CategoriesModal.jsx

import React from 'react';

const CategoriesModal = () => {
    const items = [
        {
            name: 'Smartphone',
            image: 'https://via.placeholder.com/150', // Replace with actual image URLs
            type: 'Electronics',
        },
        {
            name: 'Laptops',
            image: 'https://via.placeholder.com/150',
            type: 'Books',
        },
        {
            name: 'Smartphone',
            image: 'https://via.placeholder.com/150', // Replace with actual image URLs
            type: 'Electronics',
        },
        {
            name: 'Book',
            image: 'https://via.placeholder.com/150',
            type: 'Books',
        },
        {
            name: 'Smartphone',
            image: 'https://via.placeholder.com/150', // Replace with actual image URLs
            type: 'Electronics',
        },
        {
            name: 'Book',
            image: 'https://via.placeholder.com/150',
            type: 'Books',
        },
        {
            name: 'Smartphone',
            image: 'https://via.placeholder.com/150', // Replace with actual image URLs
            type: 'Electronics',
        },
        {
            name: 'Book',
            image: 'https://via.placeholder.com/150',
            type: 'Books',
        },
        // Add more items as needed
    ];

    return (
        <div className="categories-container">
            {items.map((item, index) => (
                <div className="card" key={index}>
                    <img src={item.image} alt={item.name} />
                    <div className="card-info">
                        <h3>{item.name}</h3>
                        <p>Type: {item.type}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoriesModal;
