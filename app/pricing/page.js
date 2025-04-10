"use client";

import React, { useRef } from "react";
import LandingScreen from "@/components/LandingScreen";
import GrowChannel from "@/components/GrowChannel";
import MonetizationSection from "@/components/MonetizationSection";
import Sale from "@/components/Sale";
import Header from "@/components/Header";

export default function Home() {
  const bookCallRef = useRef(null);

  const scrollToBookYourCall = () => {
    // if (bookCallRef.current) {
    //   bookCallRef.current.scrollIntoView({ behavior: "smooth" });
    // }
    null
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
      <Header />
      <LandingScreen scrollToBookYourCall={scrollToBookYourCall} />
      <GrowChannel />
      <MonetizationSection />
      <Sale />
    </main>
  );
}
