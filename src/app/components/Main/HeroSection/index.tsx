"use client";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/hero-section/image.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { scrollToView } from "@/lib/scrollToView";
import { NavTabs } from "@/app/enum/nav";
import Link from "next/link";
import { Social } from "@/app/enum/social";

const HeroSection = () => {
  const pdfUrl = "/bedprakashCV.pdf";
  return (
    <section className="min-h-[calc(100vh-80px)] mt-20  flex items-center flex-col md:flex-row justify-center  md:justify-around 2xl:px-16 gap-16 md:gap-0 modal inset-0 ">
      <div className="rounded-full border-2 size-48 sm:size-56 xl:size-80  border-base-dark">
        <Image
          src={heroImage}
          alt="Bed Prakash Panthi"
          className="rounded-full w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-10 w-96 items-center ">
        <div className="text-base-dark flex flex-col items-center gap-4">
          <p className=" md:text-lg xl:text-xl">Hello I&apos;m</p>
          <p className="text-2xl md:text-3xl xl:text-4xl font-semibold">
            Bed Prakash Panthi
          </p>
          <p className="text-lg md:text-xl xl:text-2xl">Front end developer</p>
        </div>
        <div className="flex gap-3 w-full mx-5 justify-center">
          <a
            href={pdfUrl}
            className="secondary-btn lg:secondary-btn-md flex justify-center"
            download="/bedprakashCV.pdf"
          >
            Download CV
          </a>

          <button
            className="primary-btn lg:primary-btn-md"
            onClick={() => scrollToView(NavTabs.ContactMe)}
          >
            Contact Info
          </button>
        </div>
        <div className="flex gap-3">
          <Link href={Social.Linkedin} target="blank">
            <FaLinkedin size="1.8em" />
          </Link>
          <Link href={Social.Github} target="blank">
            <FaGithub size="1.8em" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
