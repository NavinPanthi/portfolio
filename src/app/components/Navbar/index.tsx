import React from "react";

const Navbar = () => {
  return (
    <div className="flex text-xl bg-base-dark h-20 items-center text-base-light w-full rounded-b-xl px-12 xl:px-48">
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
