"use client";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 sm:px-8">
      <div
        className="
          max-w-6xl
          mx-auto
          rounded-[40px]
          border
          border-[#3a3a3a]
          px-6
          sm:px-10
          lg:px-16
          py-12
          text-center
        "
        style={{
          background:
            "radial-gradient(circle at center, #2b2b2b 0%, #111111 55%, #050505 100%)",
        }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10">
          DISCLAIMER
        </h2>

        <p className="text-white text-lg sm:text-xl mb-4">
          Copyright 2026
        </p>

        <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-5xl mx-auto">
          NOT FACEBOOK™: This site is not a part of the Facebook™ website or
          Facebook Inc. Additionally, This site is NOT endorsed by Facebook™ in
          any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. Copyright 2026 -
          YT Growth Secrets Pvt Ltd - All Rights Reserved
        </p>

        <div className="mt-6 flex justify-center flex-wrap gap-2 text-red-500 text-lg">
          <a
            href="/terms"
            className="hover:text-red-400 transition-colors"
          >
            Terms
          </a>

          <span>|</span>

          <a
            href="/disclaimer"
            className="hover:text-red-400 transition-colors"
          >
            Disclaimer
          </a>

          <span>|</span>

          <a
            href="/privacy"
            className="hover:text-red-400 transition-colors"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;