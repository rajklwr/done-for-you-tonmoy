import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      className="relative group bg-white bg-opacity-10 backdrop-blur-lg border border-gray-200 rounded-lg p-8 text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out"
      style={{
        background: 'rgba(255, 255, 255, 0.1)', // Transparent background
        border: '2px solid rgba(255, 255, 255, 0.2)', // Light border
      }}
    >
      {/* Hover Glow Animation */}
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500 ease-in-out"></div>
      <div className="relative flex items-center justify-start">
        <img src={icon} alt={icon} className="w-24 h-24" />

        {/* Title */}
        <h2 className="sm:ml-6 text-2xl font-semibold">{title}</h2>
      </div>

      {/* Description */}
      <p className="text-lg leading-relaxed mt-4">{description}</p>

      {/* Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
          Know More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
