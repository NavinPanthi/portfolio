"use client";

import React from "react";
import MainLayout from "../MainLayout";

import Image from "next/image";
import { FaReact, FaJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTypescript, SiNextdotjs, SiRedux, SiPrisma } from "react-icons/si";
import zustand from "@/assets/skills/zustand.png";
import framerMotion from "@/assets/skills/framer-motion.png";
import reactHookForm from "@/assets/skills/react-hook-form.png";
import tenStackQuery from "@/assets/skills/tenstack-query.png";

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
      <div className=" py-10 px-5">
        <div className="max-w-6xl mx-auto space-y-10">
          {categories.map((category, index) => (
            <div key={index}>
              <h2 className="section-subtitle  font-bold mb-6">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-4 bg-white  rounded-lg p-4 border-2 border-neutral-dark/40"
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
                      <h3 className="md:text-lg font-semibold">{skill.name}</h3>
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
