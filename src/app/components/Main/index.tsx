"use client";

import React from "react";

import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Project from "./Project";
import Skills from "./Skills";

const Main = () => {
  return (
    <section className="px-10 tracking-wide sm:px-16 md:px-24 xl:px-40">
      <HeroSection />
      <About />
      <Project />
      <Skills />
      <Contact />
    </section>
  );
};

export default Main;
