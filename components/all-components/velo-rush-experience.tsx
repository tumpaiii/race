"use client";

import { useEffect } from "react";
import stockImages from "@/assets/images/stock-images";
import HeroSection from "@/components/all-components/01-hero";
import AboutLatestMoments from "@/components/all-components/02-about-latest-moments";
import RaceCategories from "@/components/all-components/03-race-categories";
import WhatWeDo from "@/components/all-components/04-what-we-do";
import EventHighlights from "@/components/all-components/05-event-highlights";
import DayInMotion from "@/components/all-components/06-day-in-motion";
import Speakers from "@/components/all-components/07-speakers";
import Venue from "@/components/all-components/08-venue";
import Registration from "@/components/all-components/09-registration";
import Faq from "@/components/all-components/10-faq";
import FinalCta from "@/components/all-components/11-final-cta";
import VeloRushFooter from "@/components/all-components/12-footer";

export default function VeloRushExperience() {
  useEffect(() => {
    const imageMap = stockImages as Record<string, string>;
    (window as Window & { VELO_ASSETS?: Record<string, string> }).VELO_ASSETS = imageMap;
    const fallbackImages = [
      "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ];
    document.querySelectorAll<HTMLImageElement>("img[data-image]").forEach((img, index) => {
      const key = img.dataset.image;
      const source = key ? imageMap[key] : undefined;
      if (source) {
        img.loading = index < 4 ? "eager" : "lazy";
        img.decoding = "async";
        img.src = source;
        img.onerror = () => {
          img.onerror = null;
          img.src = fallbackImages[index % fallbackImages.length];
        };
      }
    });
    if (!document.querySelector('script[data-velo-interactions="true"]')) {
      const script = document.createElement("script");
      script.src = "/velo-rush-interactions.js";
      script.async = false;
      script.dataset.veloInteractions = "true";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main className="velo-rush-site">
      <HeroSection />
      <AboutLatestMoments />
      <RaceCategories />
      <WhatWeDo />
      <EventHighlights />
      <DayInMotion />
      <Speakers />
      <Venue />
      <Registration />
      <Faq />
      <FinalCta />
      <VeloRushFooter />
    </main>
  );
}
