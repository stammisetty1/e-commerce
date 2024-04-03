import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Headers/Header";
import SubHeader from "../components/Headers/SubHeader";
import Footer from "../components/Headers/Footer";
import Smartphone from "../components/Electronics/Smartphones";
import Laptops from "../components/Electronics/Laptops";
import MensWatches from "../components/Accessories/MensWatches";
import WomensWatches from "../components/Accessories/WomensWatches";
import Automotive from "../components/Automotives/Automotive";
import Motorcycle from "../components/Automotives/Motorcycle";
import MShirts from "../components/Fashion/MShirts";
import Sunglasses from "../components/Fashion/Sunglasses";
import Tops from "../components/Fashion/Tops";
import WBags from "../components/Fashion/WBags";
import WDresses from "../components/Fashion/WDresses";
import WJewellery from "../components/Fashion/WJewellery";
import MShoes from "../components/Footwear/MShoes";
import WShoes from "../components/Footwear/WShoes";
import Groceries from "../components/HomeAndLiving/Groceries";
import Furniture from "../components/HomeAndLiving/Furniture";
import Lighting from "../components/HomeAndLiving/Lighting";
import HomeDecor from "../components/HomeAndLiving/HomeDecor";
import Skincare from "../components/PersonalCare/Skincare";
import Fragrances from "../components/PersonalCare/Fragrances";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <div className="product-details-body">
        <div className="product-details-container">
          <div className="product-image">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="product-info">
            <h1>{product.title}</h1>
            <p className="price">Price: ${product.price}</p>
            <p className="description">{product.description}</p>
            <div className="product-actions">
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </div>
        <div className="recommended-products-container">
          <h1>Recommended</h1>
          {product.category === "smartphones" && <Smartphone />}
          {product.category === "laptops" && <Laptops />}
          {product.category === "fragrances" && <Fragrances />}
          {product.category === "skincare" && <Skincare />}
          {product.category === "groceries" && <Groceries />}
          {product.category === "home-decoration" && <HomeDecor />}
          {product.category === "furniture" && <Furniture />}
          {product.category === "tops" && <Tops />}
          {product.category === "womens-dresses" && <WDresses />}
          {product.category === "womens-shoes" && <WShoes />}
          {product.category === "mens-shirts" && <MShirts />}
          {product.category === "mens-shoes" && <MShoes />}
          {product.category === "mens-watches" && <MensWatches />}
          {product.category === "womens-watches" && <WomensWatches />}
          {product.category === "womens-bags" && <WBags />}
          {product.category === "womens-jewellery" && <WJewellery />}
          {product.category === "sunglasses" && <Sunglasses />}
          {product.category === "automotive" && <Automotive />}
          {product.category === "motorcycle" && <Motorcycle />}
          {product.category === "lighting" && <Lighting />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
