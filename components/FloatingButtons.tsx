"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}

      <a
        href="https://wa.me/919481019898"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Call */}

      <a
        href="tel:+919481019898"
        className="fixed bottom-26 right-6 z-50 w-16 h-16 rounded-full bg-yellow-500 hover:bg-yellow-400 shadow-2xl flex items-center justify-center text-black transition-all duration-300 hover:scale-110"
      >
        <Phone size={28} />
      </a>
    </>
  );
}