import React from "react";
import ServiceCard from "./ServiceCard";
import UnderlineHeader from "./UnderlineHeader";

const Sale = () => {
  const servicesData = [
    {
      icon: "images/button-a.png",
      title: "Basic",
      pricing: "8-10 minutes = $70/video",
      description:
        "Basic videos with original scripts, human voice-overs and videos with normal cuts and paste and some background music with it",
      color: "#FBBF24", // Yellow
    },
    {
      icon: "images/button-b.png",
      title: "Standard",
      pricing: "8-10 minutes = $85/video",
      description:
        "Standard videos with engaging original scripts, human voice overs and standard editing with overlays, sound effects and proper matching background music with it.",
      color: "#EC4899", // Pink
    },
    {
      icon: "images/button-c.png",
      title: "Premium",
      pricing: "8-10 minutes = $100/video",
      description:
        "Super premium videos with super engaging scripts, human voice & videos loaded with overlays, animations & sound effects to get the best average view duration which is best for faster success.",
      color: "#06B6D4", // Cyan
    },
  ];

  return (
    <div className="py-12 flex flex-col items-center">
      <div
        className="flex-1 w-full lg:w-[80%] mb-8 p-4 sm:p-6 lg:p-8 text-center rounded-2xl shadow-2xl border-2 border-gray-400 flex-grow relative"
        style={{
          transform: "translateY(20px)",
          opacity: 0,
          transition: "all 0.8s ease-in-out",
          animation: "moveInUp 1s forwards",
        }}
      >
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
          ONLY PAY FOR THE VIDEOS WE CREATE
        </h1>
        <p className="mb-4 text-md sm:text-base md:text-lg leading-relaxed">
          Perfect for beginners who want their first channel fully built and
          monetized. We start your YouTube journey from scratch and take it all
          the way to monetization--
        </p>
        <p className="mb-4 text-md sm:text-base md:text-lg leading-relaxed">
          with a written guarantee
        </p>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm md:text-base lg:text-lg shadow-md transition-all duration-200 ease-in-out"
            onClick={() => null}
          >
            GROW THE PLANT
          </button>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            color={service.color}
          />
        ))}
      </div>
      <div className=" mt-8 w-full sm:text-2xl sm:px-16 ">
        <li className="flex items-start text-left mb-2 gap-3">
          <img
            src="/images/icon-checked.png"
            alt="Checked Icon"
            className="w-8 h-8"
          />
          Start with a fresh channel from scratch and monetise it within 2 months
        </li>
        <li className="flex items-center text-left mb-2 gap-3">
          <img
            src="/images/icon-checked.png"
            alt="Checked Icon"
            className="w-8 h-8"
          />
          $500 for the 6 months of channel management
        </li>
        <li className="flex items-start text-left mb-2 gap-3">
          <img
            src="/images/icon-checked.png"
            alt="Checked Icon"
            className="w-8 h-8"
          />
          If the YouTube channel get terminated or demonetized, we fix it within 15 days or provide a replacement YouTube channel to the Client without delay.
        </li>
      </div>
    </div>
  );
};

export default Sale;
