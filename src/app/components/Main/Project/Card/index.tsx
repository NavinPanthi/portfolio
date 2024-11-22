"use client";
import React from "react";
import { ProjectDataType } from "../data";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ item }: { item: ProjectDataType }) => {
  return (
    <Link
      className="border-2 border-neutral-dark p-5 xl:p-8 2xl:p-12 gap-3 md:gap-5  h-full rounded-2xl flex flex-col between cursor-pointer content-text"
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border-2 w-full border-neutral-dark/80 rounded-2xl">
        <Image
          src={item.image}
          alt={item.title}
          priority={true}
          className="object-cover w-full h-48 rounded-2xl"
        />
      </div>
      <div className="flex flex-col h-full justify-between gap-3 md:gap-5">
        <div className="flex-1 flex flex-col  gap-3 md:gap-5">
          <p className="section-subtitle">{item.title}</p>
          <p className="text-neutral-dark  space-x-3 text-justify 2xl:text-lg">
            {item.description}
          </p>
        </div>
        <div className="flex gap-2 items-center flex-wrap">
          {item.technology.map((item) => (
            <span key={item} className="tech-badge">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
