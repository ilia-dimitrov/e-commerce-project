import Slider from "../../components/Slider/Slider";
import React from "react";
import "./Home.scss";
import FeatureProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProducts type="featured" />
      <Categories />
      <FeatureProducts type="trending" />
    </div>
  );
};

export default Home;
