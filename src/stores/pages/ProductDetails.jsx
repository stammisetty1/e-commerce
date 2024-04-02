import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Headers/Header";
import SubHeader from "../components/Headers/SubHeader";
import Notification from "../components/Notification";

const ProductDetails = ({ item, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="product-details-container">
        <div className="product-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="price">Price: ${product.price}</p>
          <p className="description">{product.description}</p>
          <div className="product-actions">
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button onClick={handleCheckout}>Checkout</button>
            {showModal && <Notification itemTitle={product.title} closeModal={closeModal} />}
          </div>
          <Notification itemTitle={"assfd"} closeModal={false}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
