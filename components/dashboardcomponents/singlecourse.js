"use client";
import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import Image from "next/image";
import VideoImage from "../../public/assets/singlecourse.png";
import MobileTopNavbar from "@/components/MobileTapbar";
import { IoPlay, IoPause } from "react-icons/io5";

const SingleCourse = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="bg-primary md:bg-white  ">
      <MobileTopNavbar pageName="On-Boarding Training" href="/dashboard" />
      <div className="flex flex-col md:flex-row gap-4 rounded-t-2xl bg-white px-2 md:px-6 py-4 md:py-0 ">
        <div className="w-full md:w-4/6">
          <div className="flex justify-between items-center gap-2 mb-3">
            <div className="flex items-center gap-3 w-full md:bg-transparent rounded-xl md:p-0 p-2 bg-primary">
              <h1 className="text-xl font-semibold text-white md:text-light_black">
                Modules 1 :
              </h1>
              <h2 className="text-lg font-semibold  text-white md:text-light_gray ">
                Video 1
              </h2>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="bg-grey_bg rounded-lg p-2 px-4 text-light_gray">
                Previous
              </button>
              <button className="bg-grey_bg rounded-lg p-2 px-4 text-light_gray">
                Next
              </button>
            </div>
          </div>
          <h2 className="text-secondary text-xl font-medium mb-3">
            <b className="font-semibold">Title :</b>Lorem Ipsum is simply dummy
            text of the printing
          </h2>

          <div className="w-full my-2 relative">
            <video
              src="/assets/video.mp4"
              className="w-full h-52 sm:h-96 object-cover rounded-2xl"
              controls // Enable default controls
              ref={videoRef}
              onClick={togglePlay}
            ></video>

            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                isPlaying ? "hidden" : "block"
              }`}
            >
              <button
                className="bg-[#15151597] w-16 h-16 border border-white flex justify-center items-center text-white  p-2 rounded-full opacity-75 hover:opacity-100"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <IoPause className="text-3xl" />
                ) : (
                  <IoPlay className="text-3xl" />
                )}
              </button>
            </div>
          </div>

          <h2 className="text-secondary text-xl font-semibold mt-3 mb-1">
            Description :
          </h2>
          <p className="text-grey font-normal text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum....
          </p>
        </div>

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
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
