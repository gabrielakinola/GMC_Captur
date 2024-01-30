import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/homeComponents/Hero";

const HomeScreen = () => {
  return (
    <div>
      {/* <Link to={"/portfolio"}> Portfolio</Link> */}
      <Hero />
    </div>
  );
};

export default HomeScreen;
