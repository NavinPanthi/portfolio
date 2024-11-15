"use client";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex text-sm bg-base-dark h-10 items-center text-base-light w-full rounded-b-md px-10 sm:px-40">
      <span className="flex-1 ">BPP</span>
      <ul className="flex gap-10">
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact me</li>
      </ul>
    </div>
  );
};

export default Navbar;
