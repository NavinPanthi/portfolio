"use client";

import React from "react";

import Image from "next/image";
import { FaJs, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiNextdotjs, SiPrisma, SiRedux, SiTypescript } from "react-icons/si";

import framerMotion from "@/assets/skills/framer-motion.png";
import reactHookForm from "@/assets/skills/react-hook-form.png";
import tenStackQuery from "@/assets/skills/tenstack-query.png";
import zustand from "@/assets/skills/zustand.png";

import MainLayout from "../MainLayout";

export const categories = [
  {
    category: "Language",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    ],
  },
  {
    category: "Frontend Libraries and Framework",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" /> },
    ],
  },
  {
    category: "JavaScript Libraries",
    skills: [
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
      { name: "Zustand", image: zustand },
      { name: "React Hook Form", image: reactHookForm },
      { name: "Tenstack Query", image: tenStackQuery },
      { name: "Framer Motion", image: framerMotion },
    ],
  },
  {
    category: "Database and ORM",
    skills: [
      { name: "Prisma", icon: <SiPrisma className="text-purple-700" /> },
      { name: "MySQL", icon: <GrMysql className="text-blue-600" /> },
    ],
  },
];
const Skills = () => {
  return (
    <MainLayout title="Skills">
      <div className="px-5">
        <div className="mx-auto max-w-6xl space-y-10">
          {categories.map((category, index) => (
            <div key={index}>
              <h2 className="section-subtitle mb-6 font-bold">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-4 rounded-lg border-2 border-neutral-dark/40 bg-white p-4"
                  >
                    {skill?.image ? (
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        priority={true}
                      />
                    ) : (
                      <div className="text-3xl">{skill?.icon}</div>
                    )}

                    <div>
                      <h3 className="font-semibold md:text-lg">{skill.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
export default Skills;
