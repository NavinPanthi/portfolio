"use client";

import { StaticImageData } from "next/image";

import bhoklayo from "@/assets/projects/bhoklayo.png";
import enirman from "@/assets/projects/enirman.png";
import milansathi from "@/assets/projects/milansathi.png";

export type ProjectDataType = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
  technology: string[];
};
export const projectData = [
  {
    id: 1,
    image: enirman,
    title: "Construction project management",
    description:
      "Enirman.com is a tech-driven platform revolutionizing construction by offering seamless management of residential and commercial projects through innovative tools and transparent practices. It simplifies the home-building process with services like architecture, smart home integration, and comprehensive project management. ",
    href: "https://app.enirman.com/",
    technology: [
      "React.js",
      "Tailwind.css",
      "Tenstack Query",
      "React hookform",
      "Axios",
      "Typescript",
      "Redux Toolkit",
    ],
  },
  {
    id: 2,
    image: bhoklayo,
    title: "Food ordering system",
    description:
      "Bhoklayo.com is a premier online food ordering and delivery platform in Nepal, offering a convenient way to satisfy your cravings. The platform connects users with a wide variety of restaurants, enabling them to browse menus, place orders, and have their favorite meals delivered right to their doorstep. ",
    href: "https://web.bhoklayo.com/",
    technology: ["Next.js", "Tailwind.css", "Axios", "Redux Toolkit"],
  },
  {
    id: 3,
    image: milansathi,
    title: "Matrimonial website",
    description:
      "A simple and user-friendly matrimonial web app where users can browse profiles of individuals from the opposite gender, view compatibility scores, send friend requests, and engage in real-time chat. It's designed to facilitate meaningful connections through interactive features while maintaining ease of use and accessibility. ",
    href: "#",
    technology: [
      "Next.js",
      "Tailwind.css",
      "ShadcnUI",
      "Zod",
      "Redux Toolkit",
      "Axios",
    ],
  },
  {
    id: 6,
    image: milansathi,
    title: "Matrimonial website",
    description:
      "A simple and user-friendly matrimonial web app where users can browse profiles of individuals from the opposite gender, view compatibility scores, send friend requests, and engage in real-time chat. It's designed to facilitate meaningful connections through interactive features while maintaining ease of use and accessibility. ",
    href: "#",
    technology: [
      "Next.js",
      "Tailwind.css",
      "ShadcnUI",
      "Zod",
      "Redux Toolkit",
      "Axios",
    ],
  },
  {
    id: 4,
    image: milansathi,
    title: "Matrimonial website",
    description:
      "A simple and user-friendly matrimonial web app where users can browse profiles of individuals from the opposite gender, view compatibility scores, send friend requests, and engage in real-time chat. It's designed to facilitate meaningful connections through interactive features while maintaining ease of use and accessibility. ",
    href: "#",
    technology: [
      "Next.js",
      "Tailwind.css",
      "ShadcnUI",
      "Zod",
      "Redux Toolkit",
      "Axios",
    ],
  },
  {
    id: 5,
    image: milansathi,
    title: "Matrimonial website",
    description:
      "A simple and user-friendly matrimonial web app where users can browse profiles of individuals from the opposite gender, view compatibility scores, send friend requests, and engage in real-time chat. It's designed to facilitate meaningful connections through interactive features while maintaining ease of use and accessibility. ",
    href: "#",
    technology: [
      "Next.js",
      "Tailwind.css",
      "ShadcnUI",
      "Zod",
      "Redux Toolkit",
      "Axios",
    ],
  },
];
