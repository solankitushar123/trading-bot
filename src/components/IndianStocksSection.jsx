import React, { useRef } from "react";

const dummyStocks = [
  {
    symbol: "INFY",
    company: "INFOSYS LTD",
    price: "1,515.70",
    change: "-2.37%",
    icon: "https://cdn.worldvectorlogo.com/logos/infosys.svg",
  },
  {
    symbol: "ICICIBANK",
    company: "ICICI BANK LTD.",
    price: "1,477.10",
    change: "-0.42%",
    icon: "https://cdn-icons-png.flaticon.com/512/825/825508.png",
  },
  {
    symbol: "DRREDDY",
    company: "DR. REDDY'S LABS",
    price: "1,277.90",
    change: "+0.98%",
    icon: "https://cdn-icons-png.flaticon.com/512/5953/5953766.png",
  },
  {
    symbol: "WIPRO",
    company: "WIPRO LTD",
    price: "259.20",
    change: "-1.01%",
    icon: "https://cdn-icons-png.flaticon.com/512/826/826070.png",
  },
  {
    symbol: "ADANIENT",
    company: "ADANI ENTERPRISES LTD",
    price: "2,550.10",
    change: "-2.24%",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  },
  {
    symbol: "TCS",
    company: "TATA CONSULTANCY",
    price: "3,456.00",
    change: "+1.14%",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732229.png",
  },
  {
    symbol: "RELIANCE",
    company: "RELIANCE LTD",
    price: "2,925.00",
    change: "-0.75%",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732245.png",
  },
];

export default function IndianStocksSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const scrollAmount = dir === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white text-black py-6 px-4">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-2 text-3xl font-bold">
        🇮🇳 <h2>Indian stocks</h2>
        <span>›</span>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-3 mb-6 overflow-x-auto text-sm whitespace-nowrap">
        {[
          "Market summary",
          "Indian stocks",
          "Crypto",
          "Futures",
          "Forex",
          "Economy",
          "Brokers",
        ].map((tab, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full ${
              tab === "Indian stocks" ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Community Trends Title */}
      <h3 className="text-2xl font-semibold mb-4">Community trends</h3>

      {/* Card Slider */}
      <div className="relative">
        {/* Scroll Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2"
        >
          ‹
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-4 px-8 scroll-smooth"
        >
          {dummyStocks.map((stock, index) => (
            <div
              key={index}
              className="min-w-[220px] bg-white border rounded-2xl shadow-sm p-4"
            >
              <div className="flex items-center gap-3 mb-1">
                <img
                  src={stock.icon}
                  alt={stock.symbol}
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="text-lg font-semibold">{stock.symbol}</div>
                  <div className="text-xs text-gray-500">{stock.company}</div>
                </div>
              </div>
              <div className="text-xl font-bold mt-2">
                {stock.price} <span className="text-sm">INR</span>
              </div>
              <div
                className={`text-sm font-semibold ${
                  stock.change.startsWith("-")
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {stock.change}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2"
        >
          ›
        </button>
      </div>
    </div>
  );
}
