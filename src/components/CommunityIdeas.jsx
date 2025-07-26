import React, { useState } from "react";
import TradingViewWidget from "./TradingViewWidget";

const ideasData = {
  editors: [
    {
      title: "Bank nifty Rising wedge pattern.",
      description:
        "Rising Wedge Pattern: A bearish pattern typically seen near tops. It shows narrowing price movement with higher highs but declining momentum...",
      symbol: "NSE:BANKNIFTY",
      author: "tradetechnicalanalyst",
      time: "5 hours ago",
      comments: 1,
      likes: 1,
    },
    {
      title: "Swing Trade Idea: Vardhman Special Steels Ltd (NSE: VSSL)",
      description:
        "Technical Setup Ascending Triangle Breakout on Daily Timeframe. Volume Spike 4x average volume on breakout...",
      symbol: "NSE:VSSL",
      author: "Airborn_trader",
      time: "Jul 24",
      comments: 3,
      likes: 19,
    },
    {
      title: "Monte Carlo Near break out",
      description:
        "Monte Carlo is consolidating between 550 to 640 price range. This range has become narrow, or forming VCP like structure...",
      symbol: "NSE:MONTECARLO",
      author: "TrustTheProcess13",
      time: "Jul 23",
      comments: 1,
      likes: 25,
    },
  ],
  popular: [
    {
      title: "Reliance Strong Base",
      description:
        "Reliance forming a strong base at 2700 zone. Good volumes seen. Can lead to breakout soon.",
      symbol: "NSE:RELIANCE",
      author: "AlphaTrader",
      time: "Jul 25",
      comments: 2,
      likes: 31,
    },
    {
      title: "Tata Steel Breakout",
      description:
        "Tata Steel has cleared long resistance and now entering new bullish territory.",
      symbol: "NSE:TATASTEEL",
      author: "SteelKing",
      time: "Jul 24",
      comments: 5,
      likes: 44,
    },
    {
      title: "Infosys Consolidation Pattern",
      description:
        "Infosys is consolidating in a triangle. Watch for a break above 1600 with volume.",
      symbol: "NSE:INFY",
      author: "Tech_Analyst",
      time: "Jul 23",
      comments: 4,
      likes: 28,
    },
  ],
};

const CommunityIdeas = () => {
  const [activeTab, setActiveTab] = useState("editors");
  const ideas = ideasData[activeTab];

  return (
    <section className="py-10 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-black">Community Ideas</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("editors")}
            className={`px-4 py-2 rounded font-medium ${
              activeTab === "editors"
                ? "bg-black text-white"
                : "bg-white border text-black border-gray-300"
            }`}
          >
            Editors' Picks
          </button>
          <button
            onClick={() => setActiveTab("popular")}
            className={`px-4 py-2 rounded font-medium ${
              activeTab === "popular"
                ? "bg-black text-white"
                : "bg-white border text-black border-gray-300"
            }`}
          >
            Popular
          </button>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ideas.map((idea, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden flex flex-col h-full"
            >
              <div className="h-[220px]">
                <TradingViewWidget symbol={idea.symbol} />
              </div>

              <div className="flex flex-col justify-between flex-grow p-4">
                {/* Title & Description */}
                <div>
                  <h3 className="font-bold text-lg line-clamp-2 text-black">
                    {idea.title || "Untitled"}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {idea.description}
                  </p>
                </div>

                {/* Author & Meta Info */}
                <div className="mt-4 text-sm text-gray-500">
                  <div className="flex items-center justify-between">
                    <span>by {idea.author}</span>
                    <span>{idea.time}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-4">
                    <span>💬 {idea.comments}</span>
                    <span>🚀 {idea.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityIdeas;
