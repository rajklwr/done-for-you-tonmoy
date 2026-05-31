"use client";

import Image from "next/image";

const RevenueProofSection = ({ scrollToBookYourCall }) => {
  return (
    <section className="w-full py-12 lg:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Revenue Proof Image */}
        <div
          className="mb-4 lg:mb-8 w-full flex justify-center"
          style={{
            transform: "translateY(20px)",
            opacity: 0,
            transition: "all 0.8s ease-in-out",
            animation: "moveInUp 1s forwards",
          }}
        >
          <Image
            src="/images/revenue-proof.png"
            alt="YouTube Revenue Proof"
            width={1200}
            height={700}
            priority
            className="
              w-full
              max-w-[850px]
              lg:max-w-[950px]
              xl:max-w-[1000px]
              object-contain
            "
          />
        </div>

        {/* Content Card */}
        <div
          className="w-full max-w-5xl bg-[#0b0b0b] border border-[#2a2a2a] rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-2xl"
          style={{
            transform: "translateY(20px)",
            opacity: 0,
            transition: "all 0.8s ease-in-out",
            animation: "moveInUp 1.2s forwards",
          }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
            We Don&apos;t Just Grow Channels.
            <br />
            We Build YouTube Assets
            <br />
            That Work For You.
          </h1>

          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300">
            From zero to monetized in months—not years.
          </p>

          <p className="mb-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300">
            We create, run and scale YouTube channels.
            <span className="font-bold text-white">
              {" "}
              ALL DONE-FOR-YOU.
            </span>
          </p>

          <p className="mb-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300">
            You invest. We handle strategy, content creation,
            editing, thumbnails, uploads and growth.
          </p>

          <button
            onClick={scrollToBookYourCall}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm md:text-base lg:text-lg shadow-md transition-all duration-200 ease-in-out hover:scale-105"
          >
            Book Your Call
          </button>
        </div>

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
    </section>
  );
};

export default RevenueProofSection;