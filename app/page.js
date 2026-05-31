"use client";

import React, { useRef } from "react";
import LandingScreen from "@/components/LandingScreen";
import YouTubeChannels from "@/components/YouTubeChannels";
import YouTubeSection from "@/components/YouTubeSection";
import BookYourCall from "@/components/BookYourCall";
import FAQ from "@/components/FAQ";
import { faqData } from "@/data/faq-data";
import Header from "@/components/Header";
import RevenueProofSection from "@/components/RevenueProofSection";
import MonetizationSection from "@/components/MonetizationSection";
import Footer from "@/components/Footer";

export default function Home() {
  const bookCallRef = useRef(null);
  const faqRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToBookYourCall = () => {
    bookCallRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      <Header
        scrollToBookYourCall={scrollToBookYourCall}
        scrollToFaq={scrollToFaq}
        scrollToFooter={scrollToFooter}
        scrollToTop={scrollToTop}
      />

      <LandingScreen scrollToBookYourCall={scrollToBookYourCall} />

      <YouTubeChannels />

      <RevenueProofSection
        scrollToBookYourCall={scrollToBookYourCall}
      />

      <MonetizationSection />

      <YouTubeSection />

      <div ref={faqRef}>
        <FAQ faqData={faqData} />
      </div>

      <div ref={bookCallRef}>
        <BookYourCall />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </main>
  );
}