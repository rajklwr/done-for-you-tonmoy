"use client";
import Image from "next/image";

const LandingScreen = () => {
  return (
    <div className="min-h-screen mt-4 w-full flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-20 text-white">
      {/* Left Section: Mobile Image */}
      <div className="flex-0.9 flex justify-center mt-8 lg:mt-0">
        <Image
          src="/images/mobile.png"
          alt="High-Engagement Scripts for Faceless YouTube Automation"
          width={400}
          height={800}
          className="rounded-lg shadow-lg lg:scale-[1.2]"
          priority
        />
      </div>

      {/* Right Section: Content */}
      <div className="flex-1.1 space-y-6 text-center lg:text-left lg:pl-12 rounded-3xl shadow-lg relative border-2 border-gray-400 w-full lg:w-[110%] xl:w-[120%] transform lg:translate-x-[5%] xl:translate-x-[10%] lg:border-r-transparent p-6 sm:p-8 lg:p-10">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold leading-snug tracking-wide">
          SCALE YOUR YOUTUBE CHANNEL WITHOUT LIFTING A FINGER! - 100% DONE-FOR-YOU!
        </h2>
        <br></br>
        <p className="text-md sm:text-base md:text-lg leading-relaxed tracking-wide">
          Turn your YouTube channel into a passive income machine with our Done-For-You automation service. We handle everything—from content creation to growth strategies— 📊
          <br></br>
          <br></br>
          So you can sit back and watch your channel thrive! 🚀
        </p>
        <br></br>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm md:text-base lg:text-lg shadow-md transition-all duration-200 ease-in-out"
          onClick={() => null}
          >
            Book Your Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;