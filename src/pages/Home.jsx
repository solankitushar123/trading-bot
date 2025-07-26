import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SecondSection from "../components/SecondSection";
import MarketSummarySection from "../components/IndexSummary";
import ChartEmbed from "../components/CommunityIdeas";
import TopStories from "../components/TopStories";
import Footer from "../components/Footer";
import IndianStocksSection from "../components/IndianStocksSection";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <MarketSummarySection />
      <ChartEmbed />
      <TopStories />
      <IndianStocksSection />
      <Footer />
    </div>
  );
};

export default Home;
