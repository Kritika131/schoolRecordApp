"use client";
// import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddSchool = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email: "",
    image: null,
  });

  const router = useRouter()
  const handleInput = (e) => {
    e.preventDefault();

    if (e.target.name === "image") {
      console.log("image ",e.target.name);
      setFormData((prev) => ({
        ...prev,

        [e.target.name]: e.target.files?.[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,

        [e.target.name]: e.target.value,
      }));
    }
    // setFormData({
    //   ...formData,

    //   [e.target.name]: e.target.value,
    // });

    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // form data alway send as "Content-Type: multipart/form-data" ..FormData also  support "multipart/form-data" encoding ,this enccoding also allow us to send files.
      const data = new FormData();
      data.set("name", formData?.name);
      data.set("address", formData?.address);
      data.set("city", formData?.city);
      data.set("state", formData?.state);
      data.set("contact", formData?.contact);
      data.set("email", formData?.email);
      data.set("image", formData?.image);

      // console.log("data---",data.get('school_name'));

      const result = await fetch("/api/get-details", {
        method: "POST",
        body: data,
      });
 
      const response = await result.json();
      console.log("response-", response);
      if (response.message === "success") {
        alert("Data added successfully!!");

        setFormData({
          name: "",
          address: "",
          city: "",
          state: "",
          contact: "",
          email: "",
          image: "",
        });
        router.refresh()
      }

      // console.log("result--", result);
    } catch (err) {
      alert("data not added!!");
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center  sm:ml-0 rounded-md pt-8 gap-8 px-10 sm:px-2 ">
      <h1 className="text-2xl text-bold px-16 py-1 rounded-3xl bg-neutral-900 drop-shadow-lg uppercase sm:hidden">
        Add School Details
      </h1>
      <div className="w-full px-8 sm:px-0 ">
        <form className="" onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-col  w-full  gap-3 sm:gap-2 ">
            <div className="flex sm:flex-col gap-8 sm:gap-3 w-full">
              <div className="flex flex-col w-[50%] sm:w-full sm:gap-1  gap-2 ">
                <label
                  htmlFor="name"
                  className="font-bold sm:font-semibold  text-lg sm:text-sm"
                >
                  School Name
                </label>
                <input
                  type="text"
                  placeholder="enter school name"
                  value={formData.name}
                  className="border rounded-md text-gray-700 border-gray-400 px-4 sm:text-sm  py-1 w-full"
                  onChange={handleInput}
                  name="name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="flex flex-col w-[50%] sm:w-full sm:gap-1  gap-2">
                <label
                  htmlFor="address"
                  className="font-bold  sm:text-sm sm:font-semibold text-lg"
                >
                  School Address
                </label>
                <input
                  type="text"
                  placeholder="Enter school address"
                  value={formData.address}
                  className="border rounded-md text-gray-700 border-gray-400 px-4 sm:text-sm py-1 w-full"
                  name="address"
                  onChange={handleInput}
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            {/* <div className="flex w-full gap-8"> */}
            <div className="flex flex-col  gap-2">
              <label
                htmlFor="city"
                className="font-bold sm:font-semibold sm:text-sm  text-lg"
              >
                City
              </label>
              <input
                type="text"
                placeholder="Enter city"
                value={formData.city}
                className="border rounded-md text-gray-700 border-gray-400 sm:text-sm px-4 py-1 w-full"
                name="city"
                onChange={handleInput}
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col  gap-2 ">
              <label
                htmlFor="state"
                className="font-bold sm:text-sm sm:font-semibold  text-lg"
              >
                State
              </label>
              <input
                type="text"
                placeholder="Enter State"
                value={formData.state}
                className="border rounded-md text-gray-700 border-gray-400 sm:text-sm px-4 py-1 w-full"
                name="state"
                onChange={handleInput}
                autoComplete="off"
                required
              />
            </div>
            {/* </div> */}
            <div className="flex flex-col  gap-2">
              <label
                htmlFor="contact"
                className="font-bold sm:text-sm sm:font-semibold  text-lg"
              >
                Contact Number
              </label>
              <input
                type="number"
                placeholder="Enter contact Number"
                value={formData.contact}
                className="border rounded-md text-gray-700 border-gray-400 sm:text-sm px-4 py-1 w-full"
                name="contact"
                onChange={handleInput}
                minLength={10}
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col  gap-2 ">
              <label
                htmlFor="email"
                className="font-bold sm:text-sm sm:font-semibold  text-lg"
              >
                Email Id
              </label>
              <input
                type="email"
                placeholder="enter email id"
                value={formData.email}
                className="border rounded-md text-gray-700 border-gray-400 sm:text-sm px-4 py-1 w-full"
                name="email"
                onChange={handleInput}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex justify-center w-full sm:flex-col sm:items-center my-2 gap-4 sm:gap-2 image_upload ">
              <label
                htmlFor="image"
                className="font-bold sm:text-sm sm:font-semibold    text-lg"
              >
                Upload Image
              </label>
              <input
                type="file"
                name="image"
                className="sm:text-sm   "
                onChange={handleInput}
                required
              />
            </div>
            <input
              type="submit"
              className="block bg-slate-600  hover:bg-slate-500 text-white uppercase text-md mx-auto px-6 sm:py-1 sm:text-sm sm:font-bold py-[10px] cursor-pointer rounded"
              value="Add Detail"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSchool;
