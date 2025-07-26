import React from "react";

// Dummy data (can be replaced with backend API response)
const stories = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968204.png",
    date: "yesterday",
    title: "AMZN: Amazon Stock Pops as Jeff Bezos Dumps Shares to Cash Out $1.5 Billion",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/732/732245.png",
    date: "yesterday",
    title: "INTC: Intel Stock Slides 5% Despite Revenue Beat, Bold Guidance. New CEO Has It Tough, Though.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968143.png",
    date: "yesterday",
    title: "MC: LVMH Stock Goes Out of Fashion as Luxury Powerhouse Profit Dives 15% to €9.01 Billion",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
    date: "yesterday",
    title: "XAU/USD: Gold Prices Hit $3,350 in Steep Three-Day Drift — What’s Weighing on Bullion?",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/323/323329.png",
    date: "yesterday",
    title: "EUR/USD: Euro Stabilizes Near $1.1750 After ECB Hits Pause on Rate-Cut Game. Easy Mode Over?",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/825/825469.png",
    date: "yesterday",
    title: "BTC/USD: Bitcoin Prices Slide 6% from Record as Traders Brace for Next Big Catalyst",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    date: "2 days ago",
    title: "GOOGL: Alphabet Stock Ticks Higher on Double Beat. CEO Pichai Lifts Spending Guidance",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    date: "2 days ago",
    title: "TSLA: Tesla Stock Nosedives as Quarterly Revenue Drops 12%. Musk Cites Bigger Woes Ahead.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968497.png",
    date: "2 days ago",
    title: "DJI: Dow Jones Soars 500 Points to Float Near Record as Trade Deal Cools Market Jitters",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    date: "3 days ago",
    title: "LCID: Lucid Stock Powers Up 11% After Greenlight to Use Tesla’s Charging Network",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968578.png",
    date: "3 days ago",
    title: "USD/JPY: Yen Seeks Direction Against Greenback After Trump Unveils ‘Massive’ Deal with Japan",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    date: "3 days ago",
    title: "SPX: S&P 500 Climbs to Fresh Record High Ahead of Alphabet, Tesla Earnings Updates",
  },
];

const TopStories = () => {
  return (
    <section className="w-full bg-white text-black px-4 sm:px-6 md:px-12 py-10">
      {/* Section Title */}
      <h2 className="text-2xl font-semibold mb-6">Top stories›</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
        {stories.map((story, index) => (
          <div key={index} className="space-y-2">
            {/* Meta Info Row */}
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <img
                src={story.icon}
                alt="icon"
                className="w-4 h-4 object-contain"
              />
              <span>{story.date}</span>
              <span>·</span>
              <span className="text-blue-600">TradingView</span>
            </div>

            {/* Headline */}
            <p className="text-[15px] leading-snug font-medium">
              {story.title}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <button className="text-blue-600 font-semibold text-sm hover:underline">
          Keep reading ›
        </button>
      </div>
    </section>
  );
};

export default TopStories;
