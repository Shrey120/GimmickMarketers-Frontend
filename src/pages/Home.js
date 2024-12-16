import React from "react";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeBrands from "../components/HomeBrands";
import HomeWhyUs from "../components/HomeWhyUs";
import HomeHowWeHelp from "../components/HomeHowWeHelp";
import HomeCaseStudy from "../components/HomeCaseStudy";
import HomeInfluencer from "../components/HomeInfluencer";
import HomeTestimonials from "../components/HomeTestimonials";
import HomeFeatures from "../components/HomeFeatures";

export default function Home() {
  return (
    <section>
      <HomeHeroSection />
      <HomeBrands />
      <HomeWhyUs />
      <HomeHowWeHelp />
      <HomeCaseStudy />
      <HomeFeatures />
      <HomeInfluencer />
      <HomeTestimonials />
    </section>
  );
}
