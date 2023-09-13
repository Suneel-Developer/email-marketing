// components/audio/page.js
import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = ({ audioPath }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  return (
    <div className="flex items-center justify-between space-x-4 bg-grey_bg rounded-xl p-2 md:p-3">
      <div className="flex items-center justify-center gap-4 w-full md:w-4/5">
        <button
          onClick={togglePlayPause}
          className={`rounded-full p-3 text-white flex justify-center items-center border-2 border-white ${
            isPlaying ? "bg-primary " : "bg-black"
          }`}
        >
          {isPlaying ? (
            <FaPause className="text-sm" />
          ) : (
            <FaPlay className="text-sm" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSliderChange}
          className="slider w-full"
        />
      </div>
      <span className="text-lg text-[#4B4B4B] font-medium hidden md:block">
        {formatTime(currentTime)}
      </span>
      <audio
        ref={audioRef}
        src={audioPath}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export default AudioPlayer;
