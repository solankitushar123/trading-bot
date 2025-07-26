import React from "react";
import { motion } from "framer-motion";
import astronautImg from "../assets/astronaut.png";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen bg-cover bg-left flex flex-col justify-center items-center pt-20 text-center relative px-4"
      style={{ backgroundImage: `url(${astronautImg})` }}
    >
      <div className="backdrop-blur-sm bg-black bg-opacity-40 p-6 rounded-xl max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Look first / Then leap.
        </h1>
        <p className="mb-6 text-lg md:text-xl">
          The best trades require research, then commitment.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition">
          Get started for free
        </button>
        <p className="mt-2 text-sm">$0 forever, no credit card needed</p>
      </div>

      <div className="absolute bottom-6 right-4 md:right-10 flex items-center gap-4 bg-black bg-opacity-70 p-3 rounded-lg">
        <img
          src="https://avatars.githubusercontent.com/u/1?v=4"
          className="w-10 h-10 rounded-full"
          alt="profile"
        />
        <div>
          <p className="text-sm font-bold">Scott "Kidd" Poteet</p>
          <p className="text-xs">The unlikely astronaut</p>
        </div>
        <button className="bg-white text-black px-3 py-1 text-sm rounded">
          ▶ Watch explainer
        </button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
