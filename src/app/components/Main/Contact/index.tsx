"use client";

import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import MainLayout from "../MainLayout";

const Contact = () => {
  return (
    <MainLayout title="Contact me">
      <div className="mb-4 flex flex-col items-center gap-8">
        <p>Find me on the following platforms!</p>
        <div className="secondary-btn-md flex max-w-[700px] items-center justify-center gap-3 text-base md:text-lg">
          <HiMail className="text-xl md:text-3xl" />
          <p>panthinabin341@gmail.com</p>
        </div>
        <div className="secondary-btn-md flex max-w-[700px] items-center justify-center gap-3 text-base md:text-lg">
          <FaLinkedin className="text-xl md:text-3xl" />
          <p>Bed Prakash Panthi</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
