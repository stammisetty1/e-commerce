import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Header from "../components/Headers/Header";
import SubHeader from "../components/Headers/SubHeader";
import Footer from "../components/Headers/Footer";
import nosearchresults from "../../imgs/nosearchresults.png";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const query = searchParams.get("query");
        if (query) {
          const response = await fetch(
            `https://dummyjson.com/products/search?q=${query}`
          );
          const data = await response.json();
          setSearchResults(data.products);
          setLoading(false);
        } else {
          const category = searchParams.get("category");
          const value = searchParams.get("value");
          const response = await fetch(
            `https://dummyjson.com/products/category/${category}`
          );
          const data = await response.json();
          if (Array.isArray(data.products)) {
            const filteredProducts = data.products.filter((product) =>
              Object.values(product).some(
                (val) =>
                  typeof val === "string" &&
                  val.toLowerCase().includes(value.toLowerCase())
              )
            );
            setSearchResults(filteredProducts);
          } else {
            console.error("Invalid data format. Expected an array.");
          }
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="search-results-container">
        {/* <h1>Search Results</h1> */}
        {searchResults.length === 0 ? (
          <div className="no-search-results">
            <img src={nosearchresults} alt="no search results" />
          </div>
        ) : (
          <div className="search-results-products">
            {searchResults.map((searchResult) => (
              <ProductCard key={searchResult.id} product={searchResult} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
