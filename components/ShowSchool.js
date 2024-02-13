

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import prisma from "@/lib/prisma";
import Link from "next/link";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient()
const getDetails = async()=> {
  let details = await prisma.post.findMany();
  return details;
}

const ShowSchool = async ({ children }) => {
  const records = await getDetails();

  console.log("details record --", records);


  return (
    <div className=" showschool  w-full flex flex-col  sm:ml-0 h-full items-center  rounded-md pt-8 gap-4 px-10 sm:px-2  ">
      <h1 className="text-2xl sm:text-lg sm:hidden   font-semibold text-nowrap sm:px-4  px-16 py-1 rounded-3xl bg-neutral-900 drop-shadow-lg uppercase">
        School Details List
      </h1>
      

      <div className="flex w-full   flex-col">
        {records.map((record, i) => (
          <div
            key={i}
            className="flex w-full sm:flex-col sm:items-center  border-b-2 border-gray-800 pb-3 my-2  gap-6"
          >
            <div className="w-60 h-36  sm:w-64 sm:h-40 object-cover overflow-hidden ">
              <img src={record.image} alt="school image  " />
            </div>
            <div className="flex w-full sm:flex-col   justify-between">
              <div className="text-lg sm:text-sm capitalize ">
                <h2 className="text-3xl sm:text-lg  font-semibold"> {record.name && record.name}</h2>

                <div className="flex sm:text-nowrap  gap-1">
                  Address : <FaLocationDot /> {record.address && record.address}
                </div>
                <p>City : {record.city && record.city} </p>
                <p>State :{record.state && record.state} </p>
              </div>
              <div className="flex flex-col sm:items-end sm:text-sm gap-2 sm:gap-1 items-start">
                <div className="inline-flex gap-1 items-center justify-center">
                  <MdEmail /> <span>{record.email && record.email}</span>
                </div>
                <div className="inline-flex gap-1 items-center justify-center">
                  <FaPhoneAlt />
                  <span>{record.contact && record.contact}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* {records.map((record, i) => (
          <div
            key={i}
            className="flex w-full border-b-2 border-gray-800 pb-3 my-2  gap-6"
          >
            <div className="w-60 h-36 object-cover overflow-hidden">
              <img src={record.image} alt="school image" />
            </div>
            <div className="flex w-full   justify-between">
              <div className="text-lg capitalize ">
                <h2 className="text-3xl font-semibold"> {record.name}</h2>

                <div className="flex items-center gap-1">
                  Address : <FaLocationDot /> {record.address}
                </div>
                <p>City : {record.city} </p>
                <p>State :{record.state} </p>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <div className="inline-flex gap-1 items-center justify-center">
                  <MdEmail /> <span>{record.email}</span>
                </div>
                <div className="inline-flex gap-1 items-center justify-center">
                  <FaPhoneAlt />
                  <span>{record.contact}</span>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ShowSchool;
