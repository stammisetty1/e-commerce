import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Headers/Header";
import SubHeader from "../components/Headers/SubHeader";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Headers/Footer";

const Home = ({ item, addToCart }) => {
  const navigate = useNavigate();
  const [homePageElectronics, setHomePageElectronics] = useState([]);

  const [homePageAccessories, setHomePageAccessories] = useState([]);

  const [homePageAutomotives, setHomePageAutomotives] = useState([]);

  const [homePageFashion, setHomePageFashion] = useState([]);

  const [homePageHomeDecoration, setHomePageHomeDecoration] = useState([]);

  const [homePagePersonalCare, setHomePagePersonalCare] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [smartphonesResp, laptopsResp] = await Promise.all([
          fetch("https://dummyjson.com/products/category/smartphones").then(
            (res) => res.json()
          ),
          fetch("https://dummyjson.com/products/category/laptops").then((res) =>
            res.json()
          ),
        ]);

        const [mwatchesResp, wwatchesResp] = await Promise.all([
          fetch("https://dummyjson.com/products/category/mens-watches").then(
            (res) => res.json()
          ),
          fetch("https://dummyjson.com/products/category/womens-watches").then(
            (res) => res.json()
          ),
        ]);

        const [automotiveResp, motorcycleResp] = await Promise.all([
          fetch("https://dummyjson.com/products/category/automotive").then(
            (res) => res.json()
          ),
          fetch("https://dummyjson.com/products/category/motorcycle").then(
            (res) => res.json()
          ),
        ]);

        const [
          mensShirtsResp,
          mensShoesResp,
          sunglassesResp,
          topsResp,
          womensBagsResp,
          womensDressesResp,
          womensJewelleryResp,
          womensShoesResp,
        ] = await Promise.all([
          fetch("https://dummyjson.com/products/category/mens-shirts").then(
            (res) => res.json()
          ),
          fetch("https://dummyjson.com/products/category/mens-shoes").then(
            (res) => res.json()
          ),
          fetch("https://dummyjson.com/products/category/sunglasses").then(
            (res) => res.json()
          ),
          fetch("https://dummyjson.com/products/category/tops").then((res) =>
            res.json()
          ),
          fetch("https://dummyjson.com/products/category/womens-bags").then(
            (res) => res.json()
          ),
          fetch("https://dummyjson.com/products/category/womens-dresses").then(
            (res) => res.json()
          ),
          fetch(
            "https://dummyjson.com/products/category/womens-jewellery"
          ).then((res) => res.json()),
          fetch("https://dummyjson.com/products/category/womens-shoes").then(
            (res) => res.json()
          ),
        ]);

        const [furnitureResp, homeDecorationResp, lightingResp] =
          await Promise.all([
            fetch("https://dummyjson.com/products/category/furniture").then(
              (res) => res.json()
            ),
            fetch(
              "https://dummyjson.com/products/category/home-decoration"
            ).then((res) => res.json()),
            fetch("https://dummyjson.com/products/category/lighting").then(
              (res) => res.json()
            ),
          ]);

        const [fragencesResp, skincareResp] = await Promise.all([
          fetch("https://dummyjson.com/products/category/fragrances").then(
            (res) => res.json()
          ),
          fetch("https://dummyjson.com/products/category/skincare").then(
            (res) => res.json()
          ),
        ]);

        const allElectronics = [
          ...smartphonesResp.products,
          ...laptopsResp.products,
        ];
        setHomePageElectronics(
          allElectronics.sort(() => Math.random() - 0.5).slice(0, 5)
        );

        const allAccessories = [
          ...mwatchesResp.products,
          ...wwatchesResp.products,
        ];
        setHomePageAccessories(
          allAccessories.sort(() => Math.random() - 0.5).slice(0, 5)
        );

        const allAutomotives = [
          ...automotiveResp.products,
          ...motorcycleResp.products,
        ];
        setHomePageAutomotives(
          allAutomotives.sort(() => Math.random() - 0.5).slice(0, 5)
        );

        const allPersonalCare = [
          ...fragencesResp.products,
          ...skincareResp.products,
        ];
        setHomePageAutomotives(
          allAutomotives.sort(() => Math.random() - 0.5).slice(0, 5)
        );

        setHomePagePersonalCare(
          allPersonalCare.sort(() => Math.random() - 0.5).slice(0, 5)
        );

        const allFashion = [
          ...mensShirtsResp.products,
          ...mensShoesResp.products,
          ...sunglassesResp.products,
          ...topsResp.products,
          ...womensBagsResp.products,
          ...womensDressesResp.products,
          ...womensJewelleryResp.products,
          ...womensShoesResp.products,
        ];

        setHomePageFashion(
          allFashion.sort(() => Math.random() - 0.5).slice(0, 5)
        );

        const allHomeDecoration = [
          ...lightingResp.products,
          ...homeDecorationResp.products,
          ...furnitureResp.products,
        ];
        setHomePageHomeDecoration(
          allHomeDecoration.sort(() => Math.random() - 0.5).slice(0, 5)
        );
      } catch (error) {
        console.error("Error fetching electronics:", error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleSeeAll = (category) => {
    console.log(category);
    navigate(`/products?view=${category}`);
  };

  const handleAddToCart = (event, item) => {
    addToCart(item);
    event.stopPropagation();
  };

  return (
    <div>
      <Header />
      <SubHeader />
      <CarouselComp />
      <div className="home-body">
        <div className="product-category">
          <h1 onClick={() => handleSeeAll("electronics")}>Electronics</h1>
          <button onClick={() => handleSeeAll("electronics")}>See All</button>
        </div>
        <div className="products-home">
          {homePageElectronics.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={(event) => handleAddToCart(event, product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="product-category">
          <h1 onClick={() => handleSeeAll("fashion")}>Fashion</h1>
          <button onClick={() => handleSeeAll("fashion")}>See All</button>
        </div>
        <div className="products-home">
          {homePageFashion.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={(event) => handleAddToCart(event, product)}>
                <span> Add to Cart </span>
              </button>
            </div>
          ))}
        </div>
        <div className="product-category">
        <h1 onClick={() => handleSeeAll("personalcare")}>PersonalCare</h1>
          <button onClick={() => handleSeeAll("personalcare")}>See All</button>
        </div>
        <div className="products-home">
          {homePagePersonalCare.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={(event) => handleAddToCart(event, product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="product-category">
        <h1 onClick={() => handleSeeAll("accessories")}>Accessories</h1>
          <button onClick={() => handleSeeAll("accessories")}>See All</button>
        </div>
        <div className="products-home">
          {homePageAccessories.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={(event) => handleAddToCart(event, product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="product-category">
        <h1 onClick={() => handleSeeAll("homedecoration")}>Home Decoration</h1>
          <button onClick={() => handleSeeAll("homedecoration")}>See All</button>
        </div>
        <div className="products-home">
          {homePageHomeDecoration.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={(event) => handleAddToCart(event, product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="product-category">
        <h1 onClick={() => handleSeeAll("automotives")}>Automotives</h1>
          <button onClick={() => handleSeeAll("automotives")}>See All</button>
        </div>
        <div className="products-home">
          {homePageAutomotives.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={(event) => handleAddToCart(event, product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
