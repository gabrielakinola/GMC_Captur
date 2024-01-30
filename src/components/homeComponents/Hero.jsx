import React from "react";
import Nav from "./Nav";
import "./Hero.css";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="hero_bg_img">
      <Nav />
      <HeroText />
    </div>
  );
};

export default Hero;
