import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 z-10 w-6/12">
      <div className="w-screen aspect-video pt-[30%] px-12 bg-gradient-to-r from-black">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="py-4 text-sm w-1/4 text-white">{overview}</p>
        <div className="">
          <button className="bg-white text-black p-3  mx-4 ml-1 px-10 text-xl rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="bg-gray-500 text-white mx-4 p-3 px-10 text-xl rounded-lg bg-opacity-50">
            More Info...
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
