"use client";

import React from "react";

import { NavTabs } from "@/app/enum/nav";
import { motion } from "motion/react";

import cn from "@/lib/classname";

const MainLayout: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  const lineVariants = {
    hidden: { width: "0%", opacity: 0 }, // Initial state
    visible: {
      width: "50%",
      opacity: 1,
      transition: { duration: 0.7, type: "spring", delay: 0.2 }, // Animation details
    },
  };
  return (
    <section
      className={cn(
        "my-16 flex w-full flex-col justify-center gap-16 sm:my-12 sm:gap-24 md:gap-32",
        { "min-h-[100vh]": title !== NavTabs.ContactMe }
      )}
      id={title}
    >
      <motion.div className="flex">
        <p className="section-title whitespace-nowrap">{title}</p>
        <motion.p
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          className="h-[28px] border-b-[3px] border-base-dark lg:w-[500px]"
        ></motion.p>
      </motion.div>
      {children}
    </section>
  );
};

export default MainLayout;
