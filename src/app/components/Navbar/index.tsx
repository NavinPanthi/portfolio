import { scrollToView } from "@/lib/scrollToView";
import React, { useEffect, useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

import { RxCross2 } from "react-icons/rx";

const nav = [
  {
    id: 1,
    title: "About",
  },
  {
    id: 2,
    title: "Projects",
  },
  {
    id: 3,
    title: "Skills",
  },
  {
    id: 4,
    title: "Contact me",
  },
];
const getNav = (className?: string) => {
  return nav.map((item) => (
    <li
      key={item.id}
      className={className}
      onClick={() => scrollToView(item.title)}
    >
      {item.title}
    </li>
  ));
};

const Navbar = () => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const NavLists = () => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsNavbarOpened(false);
        }
      };
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, []);

    if (!isNavbarOpened) return null;
    return (
      <>
        <ul className="flex flex-col gap-5 w-full items-center">
          {getNav("w-full flex justify-center")}
        </ul>
      </>
    );
  };
  return (
    <>
      <div
        ref={ref}
        className="text-lg sm:text-xl bg-base-light sm:bg-base-dark  min-h-20 items-center text-base-dark sm:text-base-light w-full rounded-b-xl px-12 xl:px-48 flex absolute top-0 h-fit"
      >
        <div className="hidden sm:flex items-center justify-between w-full ">
          <p className="flex-1">BPP</p>
          <ul className="flex gap-10 ">{getNav()}</ul>
        </div>
        <div className="flex sm:hidden flex-col gap-8 items-center justify-between w-full p-6">
          <div className="flex justify-between w-full">
            <p className="flex-1 self-start">BPP</p>
            {isNavbarOpened ? (
              <span>
                <RxCross2
                  className="text-3xl"
                  onClick={() => setIsNavbarOpened(false)}
                />
              </span>
            ) : (
              <span>
                <BiMenuAltRight
                  className="text-3xl"
                  onClick={() => setIsNavbarOpened(true)}
                />
              </span>
            )}
          </div>
          <NavLists />
        </div>
      </div>
    </>
  );
};

export default Navbar;
