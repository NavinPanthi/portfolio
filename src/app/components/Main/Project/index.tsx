"use client";
import React from "react";

import MainLayout from "../MainLayout";
import ProjectCard from "./Card";
import { projectData } from "./data";

const Project = () => {
  return (
    <MainLayout title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5 2xl:gap-16 md:gap-8 xl:gap-10">
        {projectData.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Project;
