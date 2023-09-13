"use client";
import MobileTopNavbar from "@/components/MobileTapbar/page";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TrainingMain = ({ onHandleShowSinglepage }) => {
  const [selectedOption, setSelectedOption] = useState("");

  // handle Show Single Course Function
  const handleShowSinglepage = () => {
    onHandleShowSinglepage();
  };

  // Courses data
  const coursesItems = [
    {
      image: "/assets/course01.png",
      title: "Module 1",
    },
    {
      image: "/assets/course02.png",
      title: "Module 2",
    },
    {
      image: "/assets/course03.png",
      title: "Module 3",
    },
    {
      image: "/assets/course04.png",
      title: "Module 4",
    },
    {
      image: "/assets/course05.png",
      title: "Module 5",
    },
    {
      image: "/assets/course03.png",
      title: "Module 6",
    },
    {
      image: "/assets/course04.png",
      title: "Module 7",
    },
    {
      image: "/assets/course05.png",
      title: "Module 8",
    },
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-primary md:bg-white">
      <MobileTopNavbar pageName="Training for Sales Team" href="/mobiledashboard" />
      <div className="rounded-t-2xl bg-white px-2 md:px-6 py-4 md:py-0 ">
        <div className="flex items-center gap-2 md:gap-6 w-full md:w-3/4 cursor-pointer">
          <div className="relative flex-1 bg-[#EDEDED] rounded-lg">
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="appearance-none bg-transparent text-[#4B4B4B] font-medium text-base md:text-lg p-2 md:p-4 w-full"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-0 md:pr-3 text-[#4B4B4B]">
              <IoIosArrowDown size={25} />
            </div>
          </div>

          <button className="bg-[#EDEDED] rounded-lg p-2 md:p-4 flex-1 text-left text-[#4B4B4B] pl-2 md:pl-6 font-medium text-lg">
            Program Tracking
          </button>
        </div>

        {/* Boxes  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5 mt-7">
          {coursesItems.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-center gap-2 md:gap-4 mb-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 md:h-44 rounded"
              />
              <h2
                onClick={handleShowSinglepage}
                className="text-lg text-light_black font-semibold text-center cursor-pointer"
              >
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingMain;
