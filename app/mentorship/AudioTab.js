"use client"
import React from "react";
import AudioPlayer from "@/components/audio/page";

const Audio = () => {
  // Define an array of audio paths
  const audioPaths = [
    "/assets/audio.mp3",
    "/assets/audio.mp3",
    "/assets/audio.mp3",
    "/assets/audio.mp3",
  ];

  return (
    <div className="flex flex-col gap-2">
      {audioPaths.map((path, index) => (
        <div key={index}>
          <AudioPlayer audioPath={path} />
        </div>
      ))}
    </div>
  );
};

export default Audio;
