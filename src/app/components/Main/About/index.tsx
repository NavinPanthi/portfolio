"use client";
import React from "react";

import MainLayout from "../MainLayout";

import { PiCertificateFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";

const About = () => {
  return (
    <MainLayout title="About">
      <div className="flex gap-20 md:gap-32 xl:gap-48 w-full flex-col ">
        <div className=" flex  md:flex-row flex-col justify-center gap-20">
          <div className="border-2 rounded-3xl w-80 h-44 md:w-96 md:h-52 2xl:w-[500px] 2xl:h-[250px] flex flex-col items-center 2xl:pt-10 border-neutral-dark justify-around relative p-4">
            <p className="section-subtitle">Experience</p>
            <div className="flex flex-col items-center gap-4">
              <p className="text-neutral-light ">1+ year</p>
              <p className="text-neutral-light">Frontend developer</p>
            </div>
            <div className="rounded-full 2xl:size-20 absolute  top-[-20px] 2xl:top-[-40px] size-10 border-2 border-neutral-dark flex items-center justify-center bg-base-light">
              <PiCertificateFill className="size-5 2xl:size-10" />
            </div>
          </div>
          <div className="border-2 rounded-3xl w-80 h-44 md:w-96 md:h-52 2xl:w-[500px] 2xl:h-[250px] flex flex-col items-center  border-neutral-dark justify-around p-4 relative 2xl:pt-10">
            <p className="section-subtitle">Education</p>
            <div className="flex flex-col items-center gap-4">
              <p className="text-neutral-light">2021-2024</p>
              <p className="text-neutral-light ">
                BSc in Information and Technology
              </p>
              <p className="text-neutral-light ">Asia Pacific University</p>
            </div>
            <div className="rounded-full 2xl:size-20 absolute   top-[-20px] 2xl:top-[-40px] size-10 border-2 border-neutral-dark flex items-center justify-center bg-base-light">
              <FaGraduationCap className="size-5 2xl:size-10" />
            </div>
          </div>
        </div>
        <div className="text-justify flex flex-col gap-2">
          <p>
            I am a passionate web developer with a strong focus on modern
            front-end technologies and JavaScript frameworks. My expertise spans
            across React.js, Next.js, and TypeScript, with a deep understanding
            of both frontend and backend development. I am proficient in Redux
            Toolkit, Zustand, React Hook Form, and Framer Motion, which enables
            me to build efficient, user-friendly, and dynamic web applications.
          </p>
          <p>
            On the database side, I have experience working with MySQL and
            Prisma, providing me with a well-rounded skill set to tackle
            full-stack development challenges. I embrace clean and maintainable
            code and am always seeking ways to improve performance and enhance
            user experience.
          </p>
          <p>
            In addition to coding, I enjoy working with tools and libraries that
            enhance productivity and interactivity, including Tenstack Query for
            data fetching and Framer Motion for animations. I am constantly
            exploring new technologies to stay ahead of the curve and keep my
            projects cutting-edge.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
