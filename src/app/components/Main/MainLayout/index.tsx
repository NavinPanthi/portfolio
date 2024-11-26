"use client";

import React from "react";

import { NavTabs } from "@/app/enum/nav";

import cn from "@/lib/classname";

const MainLayout: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <section
      className={cn(
        "my-16 flex w-full flex-col justify-center gap-16 sm:my-12 sm:gap-24 md:gap-32",
        { "min-h-[100vh]": title !== NavTabs.ContactMe }
      )}
      id={title}
    >
      <div className="flex">
        <p className="section-title whitespace-nowrap">{title}</p>
        <p className="h-[28px] w-80 border-b-[3px] border-base-dark lg:w-[500px]"></p>
      </div>
      {children}
    </section>
  );
};

export default MainLayout;
