import React from 'react';

const YouTubeSection = () => {
  return (
    <div className="relative  text-white py-16 px-6 lg:px-12">
      {/* Background Glow Effect */}
      <div className="absolute inset-0  opacity-20 blur-lg"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          LET US BUILD YOUR YOUTUBE EMPIRE—WHILE YOU FOCUS ON LIVING LIFE
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          No more guessing or grinding. We build, grow, and scale your channel
          from scratch using proven systems that deliver real results. Whether
          you're chasing growth, building your brand, or creating a long-term
          digital asset—we make YouTube success effortless.
        </p>

        {/* Call-to-action Button */}
        <button
          className="bg-white text-blue-600 hover:text-purple-700 px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          onClick={() => (window.location.href = 'https://example.com')}
        >
          Book Your Call
        </button>
      </div>
    </div>
  );
};

export default YouTubeSection;
