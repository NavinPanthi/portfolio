"use client";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/hero-section/image.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] mt-20  flex items-center flex-col sm:flex-row  justify-center gap-16 md:gap-36 xl:gap-64 px-16">
      <div className="rounded-full border-2 size-48 md:size-80  border-base-dark">
        <Image
          src={heroImage}
          alt="Bed Prakash Panthi"
          className="rounded-full "
        />
      </div>
      <div className="flex flex-col gap-10 w-96 items-center">
        <div className="text-base-dark flex flex-col items-center gap-4">
          <p className="text-sm md:text-md">Hello I&apos;m</p>
          <p className="text-2xl md:text-3xl font-semibold">
            Bed Prakash Panthi
          </p>
          <p className="text-lg md:text-xl">Front end developer</p>
        </div>
        <div className="flex gap-3 w-full">
          <button className="secondary-btn md:secondary-btn-md ">
            Download CV
          </button>
          <button className="primary-btn md:primary-btn-md ">
            Contact Info
          </button>
        </div>
        <div className="flex gap-3">
          <FaLinkedin size="1.8em" />
          <FaGithub size="1.8em" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
