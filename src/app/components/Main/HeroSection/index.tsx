"use client";

import React from "react";

import { NavTabs } from "@/app/enum/nav";
import { Social } from "@/app/enum/social";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import heroImage from "@/assets/hero-section/image.png";

import { scrollToView } from "@/lib/scrollToView";

const HeroSection = () => {
  const pdfUrl = "/bedprakashCV.pdf";

  return (
    <section className="modal inset-0 mt-20 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-16 md:flex-row md:justify-around md:gap-0 2xl:px-16">
      <div className="size-48 rounded-full sm:size-56 xl:size-80">
        <Image
          src={heroImage}
          alt="Bed Prakash Panthi"
          className="h-full w-full rounded-full border-2 border-base-dark"
        />
      </div>
      <div className="flex w-96 flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-base-dark">
          <p className="md:text-lg xl:text-xl">Hello I&apos;m</p>
          <p className="text-2xl font-semibold md:text-3xl xl:text-4xl">
            Bed Prakash Panthi
          </p>
          <p className="text-lg md:text-xl xl:text-2xl">Front end developer</p>
        </div>
        <div className="mx-5 flex w-full justify-center gap-3">
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
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={Social.Linkedin} target="blank">
              <FaLinkedin size="1.8em" />
            </Link>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={Social.Github} target="blank">
              <FaGithub size="1.8em" />
            </Link>
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
