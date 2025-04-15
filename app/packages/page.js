"use client";

import React, { useRef } from "react";
import MonetizationSection from "@/components/MonetizationSection";
import Sale from "@/components/Sale";
import Header from "@/components/Header";
import BookYourCall from "@/components/BookYourCall";
import PricingLanding from "@/components/PricingLanding";
import CaseStudies from "@/components/CaseStudies";
import Solution from "@/components/Solution";
import GrowthPath from "@/components/GrowthPath";
import FAQ from "@/components/FAQ";
import { PackagesfaqData } from "@/data/faq-data";
import WhatWeHaveDone from "@/components/WhatWeHaveDone";

export default function Home() {
  const bookCallRef = useRef(null);

  const scrollToBookYourCall = () => {
    if (bookCallRef.current) {
      bookCallRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main
      style={{
        backgroundColor: "#121212",
        color: "#fff",
        overflowX: "hidden",
        minHeight: "100vh",
        margin: 0,
        padding: 10,
      }}
    >
      <Header scrollToBookYourCall={scrollToBookYourCall} />
      <PricingLanding scrollToBookYourCall={scrollToBookYourCall} />
      <CaseStudies />
      <MonetizationSection />
      <Solution />
      <GrowthPath />
      <Sale scrollToBookYourCall={scrollToBookYourCall} />
      <FAQ faqData={PackagesfaqData} />
      <WhatWeHaveDone />
      <div ref={bookCallRef}>
        <BookYourCall />
      </div>
    </main>
  );
}
