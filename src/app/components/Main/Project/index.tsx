"use client";

import { useRef } from "react";

import { NavTabs } from "@/app/enums/nav";
import { useScroll, useTransform } from "motion/react";

import MainLayout from "../MainLayout";
import ProjectCard from "./Card";
import { projectData } from "./data";

const Project = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <>
      <MainLayout
        ref={sectionRef}
        title={NavTabs.Projects}
        className="relative !h-[300vh] bg-slate-500"
        styleValue={x}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-purple-300">
          <div className="flex gap-4 overflow-scroll">
            {projectData.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </MainLayout>
      {/* <MainLayout title={NavTabs.Projects} className="hidden sm:block">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:gap-10 2xl:gap-16">
          {projectData.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </MainLayout> */}
    </>
  );
};

export default Project;
