import React from "react";

const PricingLanding = ({scrollToBookYourCall}) => {
  return (
    <div className=" flex flex-col mt-12 items-center justify-center p-4 sm:p-4">
      <div className="max-w-7xl w-full flex flex-col  justify-between items-center px-4 py-8 lg:py-16 lg:px-10 text-white gap-16 lg:gap-16">
        <div
          className="flex-1 relative lg:flex-grow lg:max-w-[60%] xl:max-w-[60%]"
          style={{
            transform: "translateY(20px)",
            opacity: 0,
            transition: "all 0.8s ease-in-out",
            animation: "moveInUp 1.2s forwards",
          }}
        >
          <img
            src="/images/laptop-mobile.png" // Ensure the correct path to your image
            alt="What is Done-For-You Channels"
            className="object-contain w-full sm:w-[450px] scale-[1.2] lg:w-[650px] xl:w-[850px] h-auto mx-auto"
          />
        </div>

        <div
          className="flex-1 p-4 sm:p-6  lg:p-8 text-center rounded-2xl shadow-2xl border-2 border-gray-400 flex-grow  relative"
          style={{
            transform: "translateY(20px)",
            opacity: 0,
            transition: "all 0.8s ease-in-out",
            animation: "moveInUp 1s forwards",
          }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            WE DON&apos;T JUST GROW CHANNELS WE BUILD YOUTUBE ASSETS THAT WORK
            FOR YOU{" "}
          </h1>
          <p className="mb-4 text-md sm:text-base md:text-lg leading-relaxed">
            From zero to monetized in months--not years. We create, run, and
            scale YouTube channels 100% done-for-you,
          </p>
          <p className="mb-4 text-md sm:text-base md:text-lg leading-relaxed">
            with guaranteed monetization.
          </p>

          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm md:text-base lg:text-lg shadow-md transition-all duration-200 ease-in-out"
              onClick={() => null}
            >
              Book Your Call
            </button>
          </div>
        </div>

        {/* Right Section: Image with Button */}
      </div>

      {/* Keyframes for minimal movement */}
      <style jsx>{`
        @keyframes moveInUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default PricingLanding;
