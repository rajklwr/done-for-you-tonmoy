"use client";
import React from "react";

const UnderlineHeader = ({ title }) => {
  return (
    <div className="w-full flex flex-col items-center max-w-6xl mx-auto mb-8 lg:mb-16 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white inline-block">
        {title}
      </h1>
      <div className="flex items-center max-w-full justify-center mt-2">
        {/* First part of the underline */}
        <div
          className="h-1 flex-grow"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))",
            width: "150px",
          }}
        ></div>
        {/* Dot in the center */}
        <div className="text-white mx-2 text-lg">•</div>
        {/* Second part of the underline */}
        <div
          className="h-1 flex-grow"
          style={{
            background:
              "linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))",
            width: "150px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default UnderlineHeader;