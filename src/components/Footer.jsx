import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaRedditAlien,
  FaGlobe,
  FaXTwitter,
} from "react-icons/fa6";

import { FaTelegramPlane } from "react-icons/fa"; // ✅ FIXED: From fa not fa6

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black px-6 py-10 border-t">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Logo and Slogan */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">TradingView</h1>
          <p className="text-sm text-gray-700">Look first / Then leap.</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-6 text-xl text-black mt-4">
          <FaXTwitter />
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedinIn />
          <FaTelegramPlane />
          <FaTiktok />
          <FaRedditAlien />
        </div>

        {/* Language */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <FaGlobe className="text-lg" />
          <p className="text-sm">English (India)</p>
        </div>

        {/* Legal & Data Info */}
        <div className="text-xs text-gray-600 space-y-1 mt-4">
          <p>
            Select market data provided by{" "}
            <span className="text-blue-600 cursor-pointer underline">
              ICE Data services
            </span>
            .
          </p>
          <p>
            Select reference data provided by FactSet. Copyright © 2025 FactSet
            Research Systems Inc.
          </p>
          <p>© 2025 TradingView, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
