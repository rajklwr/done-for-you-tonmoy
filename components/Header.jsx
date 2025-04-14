"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Header = ({ scrollToBookYourCall }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Close dropdowns when menu toggles
  };

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <header className="text-white py-4 z-1000 bg-opacity-0.5 fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 transition-all ease-in-out">
      <div className="container mx-auto max-w-screen-xl px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png" // Replace with actual logo path
            alt="Grogrip Media Pvt Limited"
            width={200}
            height={70}
            className="object-contain"
          />
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button className="lg:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose className="w-6 h-6" />
          ) : (
            <AiOutlineMenu className="w-6 h-6" />
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`lg:flex items-center space-x-6 ${
            isMenuOpen
              ? "block absolute top-full left-0 w-full bg-gray-900"
              : "hidden"
          } lg:block`}
        >
          <div className="flex flex-col lg:flex-row w-full px-4 lg:w-auto lg:space-x-16">
            {/* <Link
              href="/"
              className="hover:text-gray-300 text-xl transition duration-300 ease-in-out py-2 lg:py-0"
            >
              Home
            </Link> */}
            {/* <a
              href="/pricing"
              className="hover:text-gray-300 text-xl transition duration-300 ease-in-out py-2 lg:py-0"
            >
              Pricing
            </a> */}

            {/* Get Started Button */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out mt-4 lg:mt-0"
              onClick={scrollToBookYourCall}
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
