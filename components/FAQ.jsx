// components/FAQ.jsx
"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import UnderlineHeader from "./UnderlineHeader";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-2 border-white p-4 rounded-2xl shadow-lg bg-transparent">
      {/* Question Section */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-left">
          {question}
        </h2>
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-white flex-shrink-0" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-white flex-shrink-0" />
        )}
      </div>

      {/* Answer Section (Collapsible) */}
      {isOpen && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-white leading-relaxed text-left">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = ({ faqData }) => {
  return (
    <div
      className=" py-8 sm:py-12 flex flex-col items-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
    >
      <UnderlineHeader title="FREQUENTLY ASKED QUESTIONS" />

      {/* FAQ Items */}
      <div className="w-full max-w-5xl text-left space-y-4">
        {" "}
        {/* Added spacing between FAQ items */}
        {faqData?.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
