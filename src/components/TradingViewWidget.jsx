// TradingViewWidget.jsx
import React from "react";

/**
 * Placeholder for TradingView chart widget.
 * Backend developers: Replace this with dynamic chart rendering
 * using TradingView's embedding or any backend-injected solution.
 *
 * Expected dynamic data: symbol (e.g. "NSE:RELIANCE")
 */

const TradingViewWidget = ({ symbol }) => {
  return (
    <div className="h-[220px] w-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm rounded-t-lg border border-dashed">
      <span>
        [Chart for <strong className="text-black">{symbol}</strong> will be
        injected here]
      </span>
    </div>
  );
};

export default TradingViewWidget;
