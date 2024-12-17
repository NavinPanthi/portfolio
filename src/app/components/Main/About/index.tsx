"use client";

import React from "react";

import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";

import MainLayout from "../MainLayout";

const About = () => {
  return (
    <MainLayout title="About">
      <div className="flex w-full flex-col gap-20 md:gap-32 xl:gap-48">
        <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
          <div className="relative flex min-h-44 w-full flex-col items-center justify-between rounded-3xl border-2 border-neutral-dark p-4 md:h-52 md:w-96 2xl:h-[250px] 2xl:w-[500px] 2xl:pt-10">
            <p className="section-subtitle mb-1 mt-4 sm:mb-0">Experience</p>
            <div className="content-text flex flex-col items-center gap-3 sm:gap-4">
              <p className="text-neutral-light">1+ year</p>
              <p className="text-neutral-light">Frontend developer</p>
            </div>
            <div className="absolute top-[-20px] flex size-10 items-center justify-center rounded-full border-2 border-neutral-dark bg-base-light 2xl:top-[-40px] 2xl:size-20">
              <PiCertificateFill className="size-5 2xl:size-10" />
            </div>
          </div>
          <div className="relative flex min-h-44 w-full flex-col items-center justify-between rounded-3xl border-2 border-neutral-dark p-4 md:h-52 md:w-96 2xl:h-[250px] 2xl:w-[500px] 2xl:pt-10">
            <p className="section-subtitle sm:mb:0 mb-1 mt-4">Education</p>
            <div className="content-text flex flex-col items-center gap-3 sm:gap-4">
              <p className="text-neutral-light">2021-2024</p>
              <p className="flex text-neutral-light">
                BSc in Information & Technology
              </p>
              <p className="text-neutral-light">Asia Pacific University</p>
            </div>
            <div className="absolute top-[-20px] flex size-10 items-center justify-center rounded-full border-2 border-neutral-dark bg-base-light 2xl:top-[-40px] 2xl:size-20">
              <FaGraduationCap className="size-5 2xl:size-10" />
            </div>
          </div>
        </div>
        <div className="content-text flex flex-col gap-2 text-pretty text-neutral-dark">
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
          <p className="hidden sm:block">
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
