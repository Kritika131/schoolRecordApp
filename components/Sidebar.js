"use client";
import { usePathname } from "next/navigation";
import React from "react";

import Link from "next/link";
import Header from "./Header";

const Sidebar = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="h-screen flex sm:flex-col relative p-2 gap-x-2  ">
      <div
        className=" flex flex-col gay-y-2 w-[280px] sm:hidden fixed top-2  h-full   bg-neutral-900
    rounded-lg
"
      >
        <div className="flex flex-col gap-y-4 px-5 py-4">
          <Link
            href="/"
            className={`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1 ${
              pathname === "/" ? "text-white" : "text-neutral-400"
            }`}
          >
            <p className="truncate w-full">Show School</p>
          </Link>
          <Link
            href="/addschool"
            className={`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1 ${
              pathname === "/addschool" ? "text-white" : "text-neutral-400"
            }`}
          >
            <p className="truncate w-full">Add School</p>
          </Link>

          {/* </div> */}
        </div>
      </div>
      <Header/>
      {children}
    </div>
  );
};

export default Sidebar;
