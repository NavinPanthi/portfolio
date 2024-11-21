"use client";
import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";

const Main = () => {
  return (
    <section className="px-10 sm:px-16 md:px-24 xl:px-40 tracking-wide">
      <HeroSection />
      <About />
      <Project />
      <Skills />
      <Contact />
    </section>
  );
};

export default Main;
