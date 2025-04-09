"use client";

import React, { useRef } from "react";
import LandingScreen from "@/components/LandingScreen";
import GrowChannel from "@/components/GrowChannel";
import MonetizationSection from "@/components/MonetizationSection";
import Sale from "@/components/Sale";
// import Services from "@/components/Services";
// import WhatWeHaveDone from "@/components/WhatWeHaveDone";
// import YouTubeSection from "@/components/YouTubeSection";
// import CaseStudies from "@/components/CaseStudies";
// import BookYourCall from "@/components/BookYourCall";
// import FAQ from "@/components/FAQ";
// import { faqData } from "@/data/faq-data";

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
      <LandingScreen />
      <GrowChannel />
      <MonetizationSection />
      <Sale />
    </main>
  );
}
