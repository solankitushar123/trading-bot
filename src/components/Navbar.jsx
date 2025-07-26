import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 px-8 bg-black bg-opacity-80 fixed w-full top-0 z-50">
      <div className="text-xl font-bold">TradingBot</div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>

      <ul
        className={`md:flex gap-6 text-sm ${
          isOpen ? "block" : "hidden"
        } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0`}
      >
        <li className="py-1">Products</li>
        <li className="py-1">Community</li>
        <li className="py-1">Markets</li>
        <li className="py-1">Brokers</li>
        <li className="py-1">More</li>
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <button className="text-sm">🌐 IN</button>
        <button className="text-sm">👤</button>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded text-sm font-semibold">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
