import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Smartphones from "../components/Electronics/Smartphones";
import Carousel from "../components/Carousel";
import Laptops from "../components/Electronics/Laptops";

const Home = () => {
    return (
        <div>
            <Header />
            <SubHeader />
            <Carousel />
            <Smartphones />
            <Laptops />
        </div>
    )
}

export default Home