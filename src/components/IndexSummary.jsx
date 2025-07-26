import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { cn } from "../lib/utils";

const indices = [
  {
    name: "Nifty 50",
    value: "24,837.00 INR",
    change: "-0.90%",
    color: "text-red-500",
    code: "50",
    bg: "bg-[#EEE9F3]",
  },
  {
    name: "Sensex",
    value: "81,463.09 INR",
    change: "-0.88%",
    color: "text-red-500",
    code: "BSE",
    bg: "bg-blue-100",
  },
  {
    name: "S&P 500",
    value: "6,388.65 USD",
    change: "+0.40%",
    color: "text-green-500",
    code: "500",
    bg: "bg-red-200",
  },
  {
    name: "Nasdaq 100",
    value: "23,272.25 USD",
    change: "+0.23%",
    color: "text-green-500",
    code: "100",
    bg: "bg-blue-200",
  },
];

export default function MarketSummarySection() {
  return (
    <div className="w-full py-6">
      {" "}
      {/* Removed px-4 sm:px-6 md:px-10 */}
      <h2 className="text-2xl font-semibold mb-4 px-4">
        Market summary<span className="ml-1">›</span>
      </h2>
      <Tabs defaultValue="indices">
        <TabsList className="mb-4 grid grid-cols-7 gap-2 px-4">
          {[
            "Indices",
            "Stocks",
            "Crypto",
            "Futures",
            "Forex",
            "Bonds",
            "ETFs",
          ].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab.toLowerCase()}
              className="w-full text-sm font-medium py-2 rounded-md transition-colors data-[state=active]:bg-black data-[state=active]:text-white"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 px-4">
        {indices.map((item, i) => (
          <Card key={i} className="rounded-2xl shadow-md w-full">
            <CardContent className="flex items-center gap-4 p-4">
              <div
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full font-semibold text-white",
                  item.bg
                )}
              >
                {item.code}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{item.name}</p>
                <p className="text-sm font-semibold">{item.value}</p>
                <p className={cn("text-xs", item.color)}>{item.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="h-[500px] w-full rounded-xl bg-gradient-to-b from-red-100 to-white shadow-inner flex items-center justify-center text-gray-500 text-sm">
        Chart Preview (1D) - Static Image or Graph Here
      </div>
    </div>
  );
}
