import React from "react";

const ServiceCard = ({ icon, title, description, description1, pricing, extralines }) => {
  return (
    <div
      className="relative group flex flex-col h-full bg-white bg-opacity-10 backdrop-blur-lg border border-gray-200 rounded-lg p-8 text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "2px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      {/* Hover Glow Animation */}
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500 ease-in-out"></div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <div className="flex items-center justify-start">
          <img src={icon} alt={icon} className="w-24 h-24" />
          <h2 className="sm:ml-6 text-2xl font-semibold">{title}</h2>
        </div>

        {pricing && (
          <p className="text-lg text-[#b2f7f2] leading-relaxed mt-4">{pricing}</p>
        )}
        <p className="text-lg leading-relaxed mt-4">{description}</p>

        {description1 && (
          <p className="text-lg leading-relaxed mt-4">{description1}</p>
        )}

        {extralines &&
          extralines.map((line, index) => (
            <p key={index} className="text-lg leading-relaxed mt-4">
              {line}
            </p>
          ))}
      </div>

      {/* Button */}
      <div className="relative z-10 flex justify-center mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
          Know More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
