"use client";

import React, { useRef } from "react";
import MonetizationSection from "@/components/MonetizationSection";
import Sale from "@/components/Sale";
import Header from "@/components/Header";
import BookYourCall from "@/components/BookYourCall";
import PricingLanding from "@/components/PricingLanding";
import FAQ from "@/components/FAQ";
import { faqData } from "@/data/faq-data";
import Footer from "@/components/Footer";
import LandingScreen from "@/components/LandingScreen";
import YoutubeChannels from "@/components/YouTubeChannels";
import BulkOrder from "@/components/BulkOrder";
import ReviewsSection from "@/components/ReviewsSection";
import UltimatePackage from "@/components/UltimatePackage";

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
      <YoutubeChannels />
      <PricingLanding scrollToBookYourCall={scrollToBookYourCall} />
      <Sale scrollToBookYourCall={scrollToBookYourCall} />
      <MonetizationSection />
      <BulkOrder/>
      {/* <UltimatePackage/> */}
      <div ref={faqRef}>
        <FAQ faqData={faqData} />
      </div>
      <ReviewsSection />
      <div ref={bookCallRef}>
        <BookYourCall />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </main>
  );
}
