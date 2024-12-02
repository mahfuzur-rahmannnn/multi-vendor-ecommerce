import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Layout/Hero";
import Categories from "../components/Layout/Categories";
import BestDeals from "../components/Route/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored"
import Footer from "../components/Layout/Footer.jsx"

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
