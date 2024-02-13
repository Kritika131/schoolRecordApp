"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname()
  return (
  
      <div className="flex justify-center     mt-4 mx-4 my-2">
        <div className=" flex bg-gray-700 transition items-center  rounded-2xl ">
          <Link
            href="/"
            className={` text-sm font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1 px-2  ${
              pathname === "/"
                ? "text-white  rounded-2xl  bg-gray-950"
                : "text-neutral-400"
            }`}
          >
            <p className="truncate ">Show Records</p>
          </Link>
          <Link
            href="/addschool"
            className={`  text-sm font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1 px-2  ${
              pathname === "/addschool"
                ? "text-white rounded-2xl  bg-gray-950"
                : "text-neutral-400"
            }`}
          >
            <p className="truncate ">Add New Record</p>
          </Link>
        </div>
      </div>
     
  );
}

export default Header