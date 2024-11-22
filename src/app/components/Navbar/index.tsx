"use client";
import { NavTabs } from "@/app/enum/nav";
import cn from "@/lib/classname";
import { scrollToView } from "@/lib/scrollToView";
import React, { useEffect, useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

import { RxCross2 } from "react-icons/rx";

const nav = [
  {
    id: 1,
    title: NavTabs.About,
  },
  {
    id: 2,
    title: NavTabs.Projects,
  },
  {
    id: 3,
    title: NavTabs.Skills,
  },
  {
    id: 4,
    title: NavTabs.ContactMe,
  },
];
const getNav = (className?: string) => {
  return nav.map((item) => (
    <li
      key={item.id}
      className={cn("cursor-pointer", { className })}
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
        <ul className="flex flex-col gap-5 w-full items-center ">
          {getNav(
            "w-full flex justify-center text-neutral-dark hover:text-base-dark "
          )}
        </ul>
      </>
    );
  };

  return (
    <>
      <nav
        ref={ref}
        className={cn(
          "text-lg sm:text-xl bg-base-light sm:bg-base-dark  min-h-20 items-center text-base-dark sm:text-base-light w-full rounded-b-xl  sm:px-12 xl:px-48 flex absolute top-0 h-fit tracking-wide",
          { "shadow-2xl ": isNavbarOpened }
        )}
        id="Home"
      >
        <div className="hidden sm:flex items-center justify-between w-full ">
          <p className="flex-1" onClick={() => scrollToView("Home")}>
            BPP
          </p>
          <ul className="flex gap-10  ">{getNav()}</ul>
        </div>
        <div className="flex sm:hidden flex-col gap-8 items-center justify-between w-full p-6">
          <div className="flex justify-between w-full">
            <p className="flex-1 self-start">BPP</p>
            {isNavbarOpened ? (
              <span>
                <RxCross2
                  className="text-3xl cursor-pointer"
                  onClick={() => setIsNavbarOpened(false)}
                />
              </span>
            ) : (
              <span>
                <BiMenuAltRight
                  className="text-3xl cursor-pointer"
                  onClick={() => setIsNavbarOpened(true)}
                />
              </span>
            )}
          </div>
          <NavLists />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
