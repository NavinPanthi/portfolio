"use client";

import Image from "next/image";
import Link from "next/link";

import { ProjectDataType } from "../data";

const ProjectCard = ({ item }: { item: ProjectDataType }) => {
  return (
    <Link
      className="between content-text flex h-full cursor-pointer flex-col gap-3 rounded-2xl border-2 border-neutral-dark p-5 md:gap-5 xl:p-8 2xl:p-12"
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full rounded-2xl border-2 border-neutral-dark/80">
        <Image
          src={item.image}
          alt={item.title}
          priority={true}
          className="h-48 w-full rounded-2xl object-cover"
        />
      </div>
      <div className="flex h-full flex-col justify-between gap-3 md:gap-5">
        <div className="flex flex-1 flex-col gap-3 md:gap-5">
          <p className="section-subtitle">{item.title}</p>
          <p className="space-x-3 text-justify text-neutral-dark 2xl:text-lg">
            {item.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
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
