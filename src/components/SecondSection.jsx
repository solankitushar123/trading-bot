import React from "react";
import { motion } from "framer-motion";
import chartVideo from "../assets/Trading-mp4.mp4";
import backgroundImg from "../assets/aurora.png";

const SecondSection = () => {
  return (
    <section
      id="second"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 py-16"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-gray-100 via-white to-gray-300 text-transparent bg-clip-text whitespace-nowrap">
          Where the world does markets
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white font-bold">
          Join 100 million traders and investors taking the future into their
          own hands.
        </p>

        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-[1000px] aspect-video rounded-3xl overflow-hidden z-10">
            {/* Video player */}
            <video
              className="w-[990px] h-[560px] object-cover rounded-3xl relative z-10"
              src={chartVideo}
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="w-full h-full rounded-3xl relative z-10 flex items-center justify-center text-white text-lg font-semibold backdrop-blur-md bg-black bg-opacity-30">
              Video not available
            </div>
          </div>
        </div>

        <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition">
          Explore features
        </button>
      </motion.div>
    </section>
  );
};

export default SecondSection;
