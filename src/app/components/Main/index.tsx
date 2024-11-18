"use client";
import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";

const Main = () => {
  return (
    <section className=" px-16 md:px-24 xl:px-40">
      <HeroSection />
      <About />
      <Project />
      <Skills />
    </section>
  );
};

export default Main;
