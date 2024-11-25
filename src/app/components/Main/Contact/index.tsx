import { FaLinkedin } from "react-icons/fa";
import React from "react";
import MainLayout from "../MainLayout";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <MainLayout title="Contact me" >
      <div className="flex flex-col gap-8 items-center mb-4">
        <p>Find me on the following platforms!</p>
        <div className="secondary-btn-md flex gap-3 items-center justify-center max-w-[700px] text-base   md:text-lg">
          <HiMail className="text-xl md:text-3xl" />
          <p>panthinabin341@gmail.com</p>
        </div>
        <div className="secondary-btn-md flex gap-3 items-center justify-center max-w-[700px] text-base md:text-lg">
          <FaLinkedin className=" text-xl  md:text-3xl" />
          <p>Bed Prakash Panthi</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
