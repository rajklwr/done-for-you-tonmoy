"use client";

import React, { useRef } from 'react';
import LandingScreen from "@/components/LandingScreen";
import YouTubeChannels from "@/components/YouTubeChannels";
import Services from '@/components/Services';
import WhatWeHaveDone from '@/components/WhatWeHaveDone';
import YoutubeSection from '@/components/YoutubeSection';
import CaseStudies from '@/components/CaseStudies';
import BookYourCall from "@/components/BookYourCall";
import FAQ from "@/components/FAQ";

export default function Home() {
  const bookCallRef = useRef(null); 

  const scrollToBookYourCall = () => {
    if (bookCallRef.current) {
      bookCallRef.current.scrollIntoView({ behavior: 'smooth' });
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
      <YouTubeChannels/>
      <Services/>
      <WhatWeHaveDone />
      <YoutubeSection />
      <CaseStudies />
      <FAQ/>
      <BookYourCall />
    </main>
  );
}