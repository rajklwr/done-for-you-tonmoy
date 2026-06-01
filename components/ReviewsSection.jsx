"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function ReviewsSection() {
  const handleReviews = () => {
    window.open(
      "https://your-review-link.com",
      "_blank"
    );
  };

  const handleReviews2 = () => {
    window.open(
      "https://your-review2-link.com",
      "_blank"
    );
  };

  return (
    <section className="py-20 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-r from-zinc-800 via-zinc-900 to-black p-8 md:p-12 shadow-[0_20px_80px_rgba(255,255,255,0.08)]">
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            
            <h2 className="text-white font-bold text-2xl md:text-4xl uppercase tracking-wide">
              Reviews On Our Services & E-Book
            </h2>

            {/* Stars */}
            <div className="flex gap-2 mt-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: i * 0.2,
                  }}
                >
                  <FaStar className="text-yellow-400 text-4xl md:text-5xl drop-shadow-[0_0_12px_rgba(255,200,0,0.8)]" />
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-10 w-full justify-center">
              
              <button
                onClick={handleReviews}
                className="
                  min-w-[220px]
                  px-10
                  py-4
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/30
                  text-white
                  text-xl
                  font-bold
                  uppercase
                  tracking-wide
                  shadow-[0_0_20px_rgba(255,255,255,0.15)]
                  hover:scale-105
                  hover:bg-white/20
                  transition-all
                  duration-300
                "
              >
                Reviews
              </button>

              <button
                onClick={handleReviews2}
                className="
                  min-w-[220px]
                  px-10
                  py-4
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/30
                  text-white
                  text-xl
                  font-bold
                  uppercase
                  tracking-wide
                  shadow-[0_0_20px_rgba(255,255,255,0.15)]
                  hover:scale-105
                  hover:bg-white/20
                  transition-all
                  duration-300
                "
              >
                Reviews 2.0
              </button>
            </div>

            {/* Trust Text */}
            <p className="mt-8 text-zinc-400 text-sm md:text-base">
              Trusted by hundreds of entrepreneurs, creators and business owners.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}