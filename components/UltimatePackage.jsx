"use client";

import React from "react";
import ServiceCard from "./ServiceCard";

const UltimatePackage = () => {
const ultimatePlans = [
{
icon: "images/button-a.png",
title: "Standard (60 VIDEOS)",
pricing: "8-10 Minutes = $2800",
description:
"Includes 60 videos of 8-12 mins & a set number of shorts",
color: "#FBBF24",
},
{
icon: "images/button-b.png",
title: "Premium (60 VIDEOS)",
pricing: "15-16 Minutes = $4300",
description:
"Includes 60 videos of 8-15 mins & a set number of shorts",
color: "#EC4899",
},
];

return ( <section className="bg-black text-white py-20 overflow-hidden">
{/* STEP HEADER */}

```
  <div className="flex flex-col items-center mb-12">
    <div className="flex items-center justify-center">
      {/* Circle */}

      <div
        className="
          w-16
          h-16
          md:w-20
          md:h-20
          rounded-full
          bg-[#D89D00]
          border-[4px]
          border-white
          flex
          items-center
          justify-center
          shadow-lg
        "
      >
        <span className="text-white text-2xl md:text-3xl font-bold">
          3
        </span>
      </div>

      {/* Arrow */}

      <div className="hidden md:flex items-center ml-8">
        <div className="relative w-24 h-[2px] bg-white">
          <div
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              w-0
              h-0
              border-t-[6px]
              border-b-[6px]
              border-l-[10px]
              border-t-transparent
              border-b-transparent
              border-l-white
            "
          />
        </div>

        <h2 className="ml-4 text-2xl lg:text-3xl font-black uppercase">
          THE ULTIMATE PACKAGE
        </h2>
      </div>
    </div>

    {/* Mobile */}

    <h2 className="md:hidden mt-4 text-xl font-black uppercase text-center">
      THE ULTIMATE PACKAGE
    </h2>

    {/* Connector */}

    <img
      src="/images/top-connector.png"
      alt="Connector"
      className="mt-6 w-full max-w-[900px] object-contain"
    />
  </div>

{/* FORMULA DIAGRAM */}

<div className="max-w-[1200px] mx-auto px-4 mb-20">
  <div className="relative">

    {/* Purple Box */}

    <div className="relative border-[3px] border-purple-500 h-20">
      
      {/* Left Divider */}
      <div className="absolute left-[2%] top-full">
        <div className="h-12 w-[2px] bg-white mx-auto"></div>

        <div
          className="
            w-0
            h-0
            mx-auto
            border-l-[10px]
            border-r-[10px]
            border-t-[14px]
            border-l-transparent
            border-r-transparent
            border-t-white
          "
        />
      </div>

      {/* Center Divider */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full">
        <div className="h-12 w-[2px] bg-white mx-auto"></div>

        <div
          className="
            w-0
            h-0
            mx-auto
            border-l-[10px]
            border-r-[10px]
            border-t-[14px]
            border-l-transparent
            border-r-transparent
            border-t-white
          "
        />
      </div>

      {/* Right Divider */}
      <div className="absolute right-[2%] top-full">
        <div className="h-12 w-[2px] bg-white mx-auto"></div>

        <div
          className="
            w-0
            h-0
            mx-auto
            border-l-[10px]
            border-r-[10px]
            border-t-[14px]
            border-l-transparent
            border-r-transparent
            border-t-white
          "
        />
      </div>
    </div>

    {/* Formula Text */}

    <div className="flex justify-between items-center mt-16 text-center font-bold text-white">
      <span className="text-lg lg:text-2xl">
        Onboarding Cost
      </span>

      <span className="text-3xl lg:text-4xl">
        +
      </span>

      <span className="text-lg lg:text-2xl">
        6 Mo-Management Fee
      </span>

      <span className="text-3xl lg:text-4xl">
        +
      </span>

      <span className="text-lg lg:text-2xl">
        30 VIDEOS OF 15 MINUTES
      </span>
    </div>
  </div>
</div>

  {/* PLANS */}

  <div className="max-w-[1000px] mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12">
      {ultimatePlans.map((plan, index) => (
        <ServiceCard
          key={index}
          icon={plan.icon}
          title={plan.title}
          description={plan.description}
          color={plan.color}
          pricing={plan.pricing}
        />
      ))}
    </div>
  </div>

  {/* BENEFITS */}

  <div className="max-w-[1100px] mx-auto mt-16 px-4">
    <ul className="space-y-6">
      <li className="flex gap-4">
        <img
          src="/images/icon-checked.png"
          alt=""
          className="w-6 h-6 mt-1"
        />
        <span>
          If the YouTube channel gets terminated or demonetized, we fix it
          within 15 days or provide a replacement YouTube channel to the
          Client without delay.
        </span>
      </li>

      <li className="flex gap-4">
        <img
          src="/images/icon-checked.png"
          alt=""
          className="w-6 h-6 mt-1"
        />
        <span>
          We keep working with you until your channel is profitable.
        </span>
      </li>

      <li className="flex gap-4">
        <img
          src="/images/icon-checked.png"
          alt=""
          className="w-6 h-6 mt-1"
        />
        <span>
          Switch Niches whenever you want.
        </span>
      </li>

      <li className="flex gap-4">
        <img
          src="/images/icon-checked.png"
          alt=""
          className="w-6 h-6 mt-1"
        />
        <span>
          Guaranteed channel monetization within the first month.
        </span>
      </li>
    </ul>
  </div>
</section>
);
};

export default UltimatePackage;
