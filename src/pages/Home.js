import React from "react";
import HeroSection from "../components/HeroSection";
import Brands from "../components/Brands";
import WhyUs from "../components/WhyUs";
import HowWeHelp from "../components/HowWeHelp";
import CaseStudy from "../components/CaseStudy";
import HomeInfluencer from "../components/HomeInfluencer";
import HomeTestimonials from "../components/HomeTestimonials";
import HomeFeatures from "../components/HomeFeatures";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <Brands />
      <WhyUs />
      <HowWeHelp />
      <CaseStudy />
      <HomeFeatures />
      <HomeInfluencer />
      <HomeTestimonials />
    </section>
  );
}
