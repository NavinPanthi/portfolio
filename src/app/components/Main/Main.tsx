import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";

const Main = () => {
  return (
    <section className=" px-12 md:px-16 xl:px-40">
      <HeroSection />
      <About />
    </section>
  );
};

export default Main;
