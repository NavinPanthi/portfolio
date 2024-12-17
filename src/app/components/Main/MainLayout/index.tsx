"use client";

import React, { forwardRef } from "react";

import { motion, MotionValue } from "framer-motion";

import cn from "@/lib/classname";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  styleValue?: MotionValue<string>;
}

const MainLayout = forwardRef<HTMLDivElement, MainLayoutProps>(
  ({ children, title, className, styleValue }, ref) => {
    const lineVariants = {
      hidden: { width: "0%", opacity: 0 },
      visible: {
        width: "50%",
        opacity: 1,
        transition: { duration: 0.7, type: "spring", delay: 0.2 },
      },
    };
    console.log(styleValue);
    return (
      <motion.section
        style={{ styleValue }}
        ref={ref}
        className={cn(
          "my-16 flex w-full flex-col justify-center gap-16 sm:my-12 sm:gap-24 md:gap-32",
          { "min-h-[100vh]": title !== "ContactMe" },
          className
        )}
        id={title}
      >
        <div className="flex">
          <p className="section-title whitespace-nowrap">{title}</p>
          <motion.p
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            className="h-[28px] border-b-[3px] border-base-dark lg:w-[500px]"
          ></motion.p>
        </div>
        {children}
      </motion.section>
    );
  }
);

MainLayout.displayName = "MainLayout";

export default MainLayout;
