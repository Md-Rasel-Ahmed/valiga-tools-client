import React from "react";
import Banner from "../pages/Banner";
import BuisnessSammary from "../pages/BuisnessSammary";
import Footer from "../pages/Footer";
import Tools from "../pages/Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BuisnessSammary></BuisnessSammary>
      <Footer></Footer>
    </div>
  );
};

export default Home;
