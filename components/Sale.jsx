import React from "react";
import ServiceCard from "./ServiceCard";

const Sale = ({ scrollToBookYourCall }) => {
  const servicesData = [
    {
      icon: "images/button-a.png",
      title: "Basic",
      pricing: "8-10 minutes = $70/video",
      description:
        "Basic videos with original scripts, human voice-overs and videos with normal cuts and paste and some background music with it",
      color: "#FBBF24",
    },
    {
      icon: "images/button-b.png",
      title: "Standard",
      pricing: "8-10 minutes = $85/video",
      description:
        "Standard videos with engaging original scripts, human voice overs and standard editing with overlays, sound effects and proper matching background music with it.",
      color: "#EC4899",
    },
    {
      icon: "images/button-c.png",
      title: "Premium",
      pricing: "8-10 minutes = $120/video",
      description:
        "Super premium videos with super engaging scripts, human voice & videos loaded with overlays, animations & sound effects to get the best average view duration which is best for faster success.",
      color: "#06B6D4",
    },
  ];

  return (
    <section className="bg-black text-white py-12 overflow-hidden">
      {/* BIGGEST SALE BANNER */}

      <div className="w-full bg-[#73B7F6] border-b-4 border-purple-500 py-4 mb-14">
        <div className="flex items-center justify-center gap-3 sm:gap-8">
          <img
            src="/images/warning-icon.png"
            alt=""
            className="w-8 h-8 sm:w-12 sm:h-12"
          />

          <h1
            className="
              text-white
              font-black
              uppercase
              tracking-wide
              text-2xl
              sm:text-4xl
              lg:text-6xl
              drop-shadow-lg
            "
          >
            Biggest Sale Ever
          </h1>

          <img
            src="/images/warning-icon.png"
            alt=""
            className="w-8 h-8 sm:w-12 sm:h-12"
          />
        </div>
      </div>

{/* STEP SECTION */}

<div className="relative flex flex-col items-center mb-8">
  {/* Step + Arrow Row */}

  <div className="flex items-center justify-center w-full relative mb-4">
    {/* Circle */}

    <div
      className="
        w-16
        h-16
        md:w-20
        md:h-20
        rounded-full
        bg-[#D89D00]
        border-[5px]
        border-white
        flex
        items-center
        justify-center
        shadow-lg
        z-10
      "
    >
      <span className="text-white font-bold text-3xl md:text-4xl">
        1
      </span>
    </div>

    {/* Arrow + Text */}

    <div className="hidden md:flex items-center ml-10">
      <div className="relative w-32 h-[2px] bg-white">
        <div
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            w-0
            h-0
            border-t-[7px]
            border-b-[7px]
            border-l-[12px]
            border-t-transparent
            border-b-transparent
            border-l-white
          "
        />
      </div>

      <div className="ml-4">
        <h3 className="text-white font-bold text-2xl">
          Build The Channel From
        </h3>
        <h3 className="text-white font-bold text-2xl">
          Scratch
        </h3>
      </div>
    </div>
  </div>

  {/* Mobile Text */}

  <div className="md:hidden text-center mb-4">
    <h3 className="text-white font-bold text-lg">
      Build The Channel From Scratch
    </h3>
  </div>

  {/* Connector Image */}

  <img
    src="/images/top-connector.png"
    alt="Connector"
    className="
      w-full
      max-w-[900px]
      object-contain
      mt-2
    "
  />
</div>

{/* OFFER BOX */}

<div className="flex justify-center px-4 mb-10">
  <div
    className="
      max-w-[900px]
      w-full
      rounded-[25px]
      px-6
      md:px-10
      py-10
      bg-gradient-to-r
      from-[#444]
      via-[#2b2b2b]
      to-[#111]
      border
      border-white/10
      shadow-[0_10px_60px_rgba(255,255,255,0.08)]
      text-center
    "
  >
    <h2 className="font-black text-xl md:text-3xl uppercase mb-5">
      ONLY PAY FOR THE VIDEOS WE CREATE
    </h2>

    <p className="text-gray-200 leading-relaxed max-w-[700px] mx-auto">
      Perfect for beginners who want their first channel fully built and
      monetized. We start your YouTube journey from scratch and take it all the
      way to monetization.
    </p>

    <div className="w-20 h-[2px] bg-white mx-auto my-5"></div>

    <p className="mb-6 text-gray-100">
      with a written guarantee.
    </p>

    <button
      onClick={scrollToBookYourCall}
      className="
        bg-[#5AAEFF]
        hover:bg-[#4097ef]
        text-white
        font-bold
        px-8
        py-3
        rounded
        transition-all
      "
    >
      🌱 GROW THE PLANT
    </button>
  </div>
</div>

      {/* BRACKET GRAPHIC */}

      <div className="flex justify-center mb-10 px-4">
        <img
          src="/images/bracket1.png"
          alt=""
          className="w-full max-w-[1100px]"
        />
      </div>

      {/* EXISTING CARDS */}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            color={service.color}
            pricing={service.pricing}
          />
        ))}
      </div>

      {/* EXISTING BULLETS */}

      <div className="mt-12 w-full sm:text-2xl sm:px-16 px-4">
        <li className="flex items-start text-left mb-4 gap-3">
          <img
            src="/images/icon-checked.png"
            alt=""
            className="w-8 h-8"
          />
          Start with a fresh channel from scratch and monetise it within 1-2
          months
        </li>

        <li className="flex items-start text-left gap-3">
          <img
            src="/images/icon-checked.png"
            alt=""
            className="w-8 h-8"
          />
          If the YouTube channel gets terminated or demonetized, we fix it
          within 15 days or provide a replacement YouTube channel to the Client
          without delay.
        </li>
      </div>
    </section>
  );
};

export default Sale;