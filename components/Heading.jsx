"use client";
import React from "react";

const Heading = ({ title }) => {
  return (
    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl mt-8 sm:mt-0 mb-2 font-extrabold text-center sm:mb-12">
      {title}
    </h2>
  );
};

export default Heading;
