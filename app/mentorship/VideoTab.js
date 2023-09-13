"use client";
import { useState, useRef } from "react";
import { IoPlay, IoPause } from "react-icons/io5";

const VideoTab = () => {
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
    <div className="flex flex-col h-full w-full">
      <h2 className="text-[#515151] text-xl font-medium mb-3">
        <b className="font-semibold">Title :</b>Lorem Ipsum is simply dummy text
        of the printing
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

      <div className="flex justify-center items-center gap-3 my-3">
        <button className="bg-grey_bg rounded-lg text-light_gray font-semibold text-base p-3 px-5">
          Previous
        </button>
        <button className="bg-grey_bg rounded-lg text-light_gray font-semibold text-base p-3 px-6">
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoTab;
