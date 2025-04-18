// components/YouTubeChannels.jsx
import React from 'react';

const YouTubeChannels = () => {
  return (
    <div
      className=" flex items-center justify-center p-4 sm:p-8"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center px-4 py-8 lg:py-16 lg:px-10 text-white gap-8 lg:gap-12 xl:gap-16">
        
        {/* Left Section: Text Content */}
        <div
          className="flex-1 p-4 sm:p-6 lg:p-8 text-center sm:text-left  rounded-2xl shadow-2xl border-2 border-white flex-grow relative"
          style={{ transform: 'translateY(20px)', opacity: 0, transition: 'all 0.8s ease-in-out', animation: 'moveInUp 1s forwards' }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            What is Done-For-You Channels?
          </h1>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            YouTube is one of the most popular platforms in the world, offering a huge opportunity to make money.
          </p>
          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            With our Done-For-You (DFY) service, we build a YouTube channel for you, where you become the investor. You don&apos;t have to be on camera or create the content yourself. We handle everything while you earn from one of the most profitable digital business models—faceless YouTube channels!
          </p>
        </div>

        {/* Right Section: Image with Button */}
        <div
          className="flex-1 relative lg:flex-grow lg:max-w-[55%] xl:max-w-[60%]"
          style={{ transform: 'translateY(20px)', opacity: 0, transition: 'all 0.8s ease-in-out', animation: 'moveInUp 1.2s forwards' }}
        >
          <img
            src="/images/our-product.png" // Ensure the correct path to your image
            alt="What is Done-For-You Channels"
            className="object-contain w-full sm:w-[450px] lg:scale-[1.2] lg:w-[650px] xl:w-[850px] h-auto mx-auto"
          />

        </div>
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

export default YouTubeChannels;