"use client";
import React, { useState } from "react";
import DashboardLayout from "@/components/DashBoardLayout";
import { IoIosArrowDown } from "react-icons/io";
import VideoTab from "./VideoTab";
import AudioTab from "./AudioTab";
import MobileTopNavbar from "@/components/MobileTapbar";

const YourComponent = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedMentor, setSelectedMentor] = useState("");
  const [isSecondSelectDisabled, setSecondSelectDisabled] = useState(true);

  const handleCourseChange = (event) => {
    const value = event.target.value;
    setSelectedCourse(value);
    setSecondSelectDisabled(value === ""); // Disable the second select if no course is selected
    setSelectedMentor(""); // Reset the mentor selection when course changes
  };

  const handleMentorChange = (event) => {
    setSelectedMentor(event.target.value);
  };

  // tabs
  const [activeTab, setActiveTab] = useState("video");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <DashboardLayout>
      <div className="bg-primary md:bg-white  ">
        <MobileTopNavbar pageName="Mentorship Program" href="/mobiledashboard" />
        <div className="flex flex-col md:flex-row gap-4 rounded-t-2xl bg-white px-2 md:px-6 py-4 md:py-0 ">
          <div className="w-full md:w-4/6">
            <div className="flex gap-2 md:gap-8">
              {/* Select Courses, Program  */}
              <div className="relative flex-1 flex items-center bg-[#EDEDED] rounded-lg p-1">
                <select
                  value={selectedCourse}
                  onChange={handleCourseChange}
                  className="appearance-none bg-transparent text-[#4B4B4B] font-medium text-base md:text-lg p-2 md:p-3 w-full cursor-pointer"
                >
                  <option value="" disabled>
                    Select Courses, Program
                  </option>
                  <option value="option1">Course 1</option>
                  <option value="option2">Course 2</option>
                  <option value="option3">Course 3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-1 md:pr-3 text-[#4B4B4B]">
                  <IoIosArrowDown size={20} />
                </div>
              </div>

              {/* Select Mentor */}
              <div
                className={`relative flex-1 flex items-center rounded-lg bg-[#EDEDED]  ${
                  isSecondSelectDisabled ? "bg-opacity-40" : "bg-[#EDEDED]"
                }`}
              >
                <select
                  value={selectedMentor}
                  onChange={handleMentorChange}
                  className={`appearance-none bg-transparent text-[#4B4B4B] font-medium text-lg p-2 md:p-3 w-full cursor-pointer ${
                    isSecondSelectDisabled
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={isSecondSelectDisabled}
                >
                  <option value="" disabled>
                    Select Mentor
                  </option>
                  <option value="option1">Mentor 1</option>
                  <option value="option2">Mentor 2</option>
                  <option value="option3">Mentor 3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-0 md:pr-3 text-[#4B4B4B]">
                  <IoIosArrowDown size={20} />
                </div>
              </div>
            </div>

            {selectedCourse !== "" && selectedMentor !== "" && (
              <div>
                <ul className="w-full bg-primary p-3 flex justify-between items-center gap-2 flex-wrap rounded-lg text-white my-4">
                  <li className="text-lg font-semibold flex gap-3 items-center">
                    Mentor : <span className="font-medium">Richard</span>
                  </li>
                  <li className="text-lg font-semibold flex gap-3 items-center">
                    Mentee : <span className="font-medium">James </span>
                  </li>
                  <li className="text-lg font-semibold hidden md:flex gap-3 items-center">
                    Course : <span className="font-medium">Course 1 </span>
                  </li>
                </ul>

                {/* tabs  */}
                <div className="flex justify-between w-full gap-2 md:gap-4 items-center md:p-0 p-2 rounded md:shadow-none shadow-sm">
                  <button
                    className={`py-1 md:px-2 md:py-3 flex-1 text-lg font-medium rounded md:rounded-lg ${
                      activeTab === "video"
                        ? "bg-primary text-white"
                        : "bg-none md:bg-grey_bg text-secondary"
                    }`}
                    onClick={() => handleTabClick("video")}
                  >
                    Videos
                  </button>
                  <button
                    className={`py-1 md:px-2 md:py-3 flex-1 text-lg font-medium rounded md:rounded-lg ${
                      activeTab === "audio"
                        ? "bg-primary text-white"
                        : "bg-none md:bg-grey_bg text-secondary"
                    }`}
                    onClick={() => handleTabClick("audio")}
                  >
                    Audio
                  </button>
                  <button className="bg-none md:bg-grey_bg py-1 text-secondary md:px-2 md:py-3 flex-1 text-lg font-medium rounded md:rounded-lg">
                    Notes
                  </button>
                </div>
                <div className="mt-4">
                  {activeTab === "video" ? <VideoTab /> : <AudioTab />}
                </div>
              </div>
            )}
          </div>

          {/* Right Side  */}
          <div className="border-0 md:border-l-2 border-[#D1D1D1] pl-0 md:pl-4 flex flex-col gap-3 ">
          <div className="flex gap-2 items-center text-[#515151]">
            <img
              src="/assets/singlecourse.png"
              alt="Image"
              className=" w-36 h-24 rounded"
            />
            <div className="flex flex-col gap-1 w-full bg-grey_bg md:bg-transparent rounded-lg md:p-0 p-1">
              <h2 className="text-xs font-medium">
                <b className=" font-semibold text-base">Title :</b> Lorem Ipsum
                is simply dummy text of the printing
              </h2>
              <div className="flex gap-5 items-center text-sm font-semibold">
                <h2>Module 1</h2>
                <h2 className="hidden md:block">Video 2</h2>
              </div>
              <h3 className="flex gap-3 text-sm font-medium">
                Duration : <span>10:35 mins</span>
              </h3>
            </div>
          </div>

          <div className="flex gap-2 items-center text-[#515151]">
            <img
              src="/assets/singlecourse.png"
              alt="Image"
              className=" w-36 h-24 rounded"
            />
            <div className="flex flex-col gap-1 w-full bg-grey_bg md:bg-transparent rounded-lg md:p-0 p-1">
              <h2 className="text-xs font-medium">
                <b className=" font-semibold text-base">Title :</b> Lorem Ipsum
                is simply dummy text of the printing
              </h2>
              <div className="flex gap-5 items-center text-sm font-semibold">
                <h2>Module 1</h2>
                <h2 className="hidden md:block">Video 2</h2>
              </div>
              <h3 className="flex gap-3 text-sm font-medium">
                Duration : <span>10:35 mins</span>
              </h3>
            </div>
          </div>

          <div className="flex gap-2 items-center text-[#515151]">
            <img
              src="/assets/singlecourse.png"
              alt="Image"
              className=" w-36 h-24 rounded"
            />
            <div  className="flex flex-col gap-1 w-full bg-grey_bg md:bg-transparent rounded-lg md:p-0 p-1">
              <h2 className="text-xs font-medium">
                <b className=" font-semibold text-base">Title :</b> Lorem Ipsum
                is simply dummy text of the printing
              </h2>
              <div className="flex gap-5 items-center text-sm font-semibold">
                <h2>Module 1</h2>
                <h2 className="hidden md:block">Video 2</h2>
              </div>
              <h3 className="flex gap-3 text-sm font-medium">
                Duration : <span>10:35 mins</span>
              </h3>
            </div>
          </div>

          <div className="flex gap-2 items-center text-[#515151]">
            <img
              src="/assets/singlecourse.png"
              alt="Image"
              className=" w-36 h-24 rounded"
            />
            <div  className="flex flex-col gap-1 w-full bg-grey_bg md:bg-transparent rounded-lg md:p-0 p-1">
              <h2 className="text-xs font-medium">
                <b className=" font-semibold text-base">Title :</b> Lorem Ipsum
                is simply dummy text of the printing
              </h2>
              <div className="flex gap-5 items-center text-sm font-semibold">
                <h2>Module 1</h2>
                <h2 className="hidden md:block">Video 2</h2>
              </div>
              <h3 className="flex gap-3 text-sm font-medium">
                Duration : <span>10:35 mins</span>
              </h3>
            </div>
          </div>

            <div className="w-full border flex flex-col justify-center text-center items-center mt-4 shadow-customshadow rounded-xl px-2 py-6 ">
              <img
                src="/assets/conversation.png"
                alt="Conversation Image"
                className=" w-16 mb-2"
              />
              <h2 className="text-secondary font-medium text-xl">
                Conversation
              </h2>
              <h2 className="text-secondary font-normal text-lg">
                Start a conversation with mentor
              </h2>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default YourComponent;
