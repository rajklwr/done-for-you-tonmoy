"use client";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Header = ({
  scrollToBookYourCall,
  scrollToFaq,
  scrollToFooter,
  scrollToTop,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (callback) => {
    callback?.();
    setIsMenuOpen(false);
  };

  return (
    <header className="text-white py-4 fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container mx-auto max-w-screen-xl px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={scrollToTop}
        >
          <Image
            src="/images/logo.png"
            alt="Grogrip Media Pvt Limited"
            width={200}
            height={70}
            className="object-contain"
          />
        </div>

        {/* Mobile Menu */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <AiOutlineClose className="w-6 h-6" />
          ) : (
            <AiOutlineMenu className="w-6 h-6" />
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen
              ? "block absolute top-full left-0 w-full bg-gray-900"
              : "hidden"
          } lg:flex lg:items-center`}
        >
          <div className="flex flex-col lg:flex-row items-center px-4 py-4 lg:py-0 gap-6 lg:gap-8">

            {/* Home */}
            <button
              onClick={() => handleScroll(scrollToTop)}
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </button>

            {/* Ebooks */}
            <a
              href="/ebooks"
              className="hover:text-blue-400 transition duration-300"
            >
              Ebooks
            </a>

            {/* About Us */}
            <button
              onClick={() => handleScroll(scrollToFaq)}
              className="hover:text-blue-400 transition duration-300"
            >
              About Us
            </button>

            {/* Contact Us */}
            <button
              onClick={() => handleScroll(scrollToFooter)}
              className="hover:text-blue-400 transition duration-300"
            >
              Contact Us
            </button>

            {/* Portfolio */}
            <a
              href="https://drive.google.com/drive/folders/YOUR_DRIVE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              Portfolio
            </a>

            {/* CTA */}
            <button
              onClick={() => handleScroll(scrollToBookYourCall)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
            >
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;