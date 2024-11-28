"use client";

import MainLayout from "../MainLayout";
import ProjectCard from "./Card";
import { projectData } from "./data";

const Project = () => {
  return (
    <MainLayout title="Projects">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:gap-10 2xl:gap-16">
        {projectData.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Project;
