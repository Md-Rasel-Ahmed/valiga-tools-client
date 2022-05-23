import React from "react";
import Banner from "../pages/Banner";
import BuisnessSammary from "../pages/BuisnessSammary";
import Footer from "../pages/Footer";
import Review from "../pages/Review";
import Tools from "../pages/Tools";
import Truested from "../pages/Truested";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BuisnessSammary></BuisnessSammary>
      <Review></Review>
      <Truested></Truested>
    </div>
  );
};

export default Home;
