import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const Tabs = ({ children, defaultValue, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  // Clone children to pass activeTab & setActiveTab to TabsList
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

export const TabsList = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-2 mb-4">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

export const TabsTrigger = ({ value, activeTab, setActiveTab, children }) => {
  const isActive = value === activeTab;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium",
        isActive
          ? "bg-[#8884d8] text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      )}
    >
      {children}
    </button>
  );
};
