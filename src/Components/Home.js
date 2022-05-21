import React from "react";
import Banner from "../pages/Banner";
import BuisnessSammary from "../pages/BuisnessSammary";
import Footer from "../pages/Footer";
import Tools from "../pages/Tools";
import Truested from "../pages/Truested";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BuisnessSammary></BuisnessSammary>
      <Truested></Truested>
    </div>
  );
};

export default Home;
