"use client";

import { useEffect, useRef, useState } from "react";

import { NavTabs } from "@/app/enum/nav";
import { motion } from "motion/react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

import cn from "@/lib/classname";
import { scrollToView } from "@/lib/scrollToView";

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
    <motion.li
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", delay: 0.1 }}
      key={item.id}
      className={cn("cursor-pointer", { className })}
      onClick={() => scrollToView(item.title)}
    >
      {item.title}
    </motion.li>
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
        <motion.ul className="flex w-full flex-col items-center gap-5">
          {getNav(
            "w-full flex justify-center text-neutral-dark  hover:text-base-dark "
          )}
        </motion.ul>
      </>
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring" }}
        ref={ref}
        className={cn(
          "absolute top-0 flex h-fit min-h-20 w-full items-center rounded-b-xl bg-base-light text-lg tracking-wide text-base-dark sm:bg-base-dark sm:px-12 sm:text-xl sm:text-base-light xl:px-48",
          { "shadow-2xl": isNavbarOpened }
        )}
        id={NavTabs.Home}
      >
        <div className="hidden w-full items-center justify-between sm:flex">
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="flex-1"
            onClick={() => scrollToView(NavTabs.Home)}
          >
            BPP
          </motion.p>
          <ul className="flex gap-10">{getNav()}</ul>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-8 p-6 sm:hidden">
          <div className="flex w-full justify-between">
            <p className="flex-1 self-start">BPP</p>
            {isNavbarOpened ? (
              <RxCross2
                className="cursor-pointer text-3xl"
                onClick={() => setIsNavbarOpened(false)}
              />
            ) : (
              <BiMenuAltRight
                className="cursor-pointer text-3xl"
                onClick={() => setIsNavbarOpened(true)}
              />
            )}
          </div>
          <NavLists />
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
