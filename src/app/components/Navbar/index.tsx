import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" text-xl bg-base-dark h-[100vh] sm:h-20 items-center text-base-light w-full rounded-b-xl px-12 xl:px-48 flex">
        <div className="hidden sm:flex items-center justify-between w-full ">
          <p className="flex-1">BPP</p>
          <ul className="flex gap-10 ">
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact me</li>
          </ul>
        </div>
        <div className="flex sm:hidden flex-col items-center justify-between w-full ">
          <p className="flex-1">BPP</p>
          <ul className="flex flex-col gap-10 ">
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact me</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
