"use client";
import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <section className="min-h-[100vh] flex gap-32 flex-col justify-center w-full">
      <div className="flex">
        <p className="section-title">{title}</p>
        <p className="border-b-[3px] border-base-dark h-[28px] w-80 lg:w-[500px]"></p>
      </div>
      {children}
    </section>
  );
};

export default MainLayout;
