"use client";
import cn from "@/lib/classname";
import React from "react";
import { NavTabs } from "@/app/enum/nav";

const MainLayout: React.FC<{
  children: React.ReactNode;
  title: string;
  className?: string;
}> = ({ children, title, className }) => {
  console.log(className, "dede");
  return (
    <section
      className={cn(
        " my-16 sm:my-12 flex gap-16 sm:gap-24 md:gap-32 flex-col justify-center w-full ",
        { "min-h-[100vh]": title !== NavTabs.ContactMe }
      )}
      id={title}
    >
      <div className="flex">
        <p className="section-title whitespace-nowrap">{title}</p>
        <p className="border-b-[3px] border-base-dark h-[28px] w-80 lg:w-[500px]"></p>
      </div>
      {children}
    </section>
  );
};

export default MainLayout;
