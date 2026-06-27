"use client";

import HeroCarousel from "./HeroCarousel";

import {
  Wifi,
  Tv,
  ShowerHead,
  Star,
  ChevronDown,
} from "lucide-react";

import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Carousel */}

      <HeroCarousel />

      {/* Luxury Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20 z-10" />

      {/* Content */}

      <div className="absolute inset-0 z-20 flex items-center pt-24">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl scale-90 lg:scale-100 origin-left">

            {/* Top Label */}

            <div className="flex items-center gap-3 mb-5">

              <div className="w-16 h-[2px] bg-[#D4AF37]" />

              <span
                className="
                uppercase
                tracking-[10px]
                text-[#D4AF37]
                text-sm
                font-semibold
                "
              >
                Luxury Stay
              </span>

            </div>

            {/* Main Heading */}

            <h1
              style={{ fontFamily: "var(--font-heading)" }}
              className="leading-none"
            >
              <span className="block text-white font-semibold text-5xl md:text-6xl lg:text-7xl">
                MK Deluxe
              </span>

              <span className="block text-[#D4AF37] font-semibold text-5xl md:text-6xl lg:text-7xl mt-1">
                Rooms
              </span>
            </h1>

            {/* Gold Divider */}

            <div className="flex items-center gap-4 mt-5 mb-5">

              <div className="w-20 h-[2px] bg-[#D4AF37]" />

              <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />

              <div className="w-20 h-[2px] bg-[#D4AF37]" />

            </div>

            {/* Subtitle */}

            <p className="mt-5 text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
              Comfortable, Clean & Affordable Rooms
              <br />
              Near Male Mahadeshwara Betta Temple
            </p>

            {/* Rating */}

            <div
              className="
              mt-4
              inline-flex
              items-center
              gap-5
              px-6
              py-3
              rounded-full
              border
              border-[#D4AF37]/40
              bg-white/10
              backdrop-blur-xl
              shadow-2xl
              "
            >

              <div className="flex text-[#D4AF37]">

                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />

              </div>

              <div>

                <p className="text-white font-semibold">
                  4.6 Google Rating
                </p>

                <p className="text-gray-300 text-sm">
                  Trusted by Pilgrims & Families
                </p>

              </div>

            </div>

            {/* Amenities */}

            <div className="grid grid-cols-3 gap-4 mt-5">

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-2xl
                py-3 px-4
                text-center
                hover:bg-white/15
                transition
                "
              >

                <Wifi
                  className="mx-auto text-[#D4AF37] mb-3"
                  size={24}
                />

                <p className="text-white font-medium">
                  Free Wi-Fi
                </p>

              </div>

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-2xl
                p-4
                text-center
                hover:bg-white/15
                transition
                "
              >

                <ShowerHead
                  className="mx-auto text-[#D4AF37] mb-3"
                  size={24}
                />

                <p className="text-white font-medium">
                  Hot Water
                </p>

              </div>

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-2xl
                p-4
                text-center
                hover:bg-white/15
                transition
                "
              >

                <Tv
                  className="mx-auto text-[#D4AF37] mb-3"
                  size={24}
                />

                <p className="text-white font-medium">
                  LED TV
                </p>

              </div>

            </div>
            {/* CTA Buttons */}

            {/* CTA Buttons */}

            <div className="flex flex-wrap gap-5 mt-8">

              <a
                href="https://wa.me/919481019898?text=Hi%20MK%20Deluxe%20Rooms,%20I%20would%20like%20to%20book%20a%20room."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold px-7 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp size={18} />
                <span>Book Your Stay</span>
              </a>

              <a
                href="tel:+919481019898"
                className="flex items-center gap-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt size={18} />
                <span>Call Now</span>
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        z-20
        flex
        flex-col
        items-center
        text-white
        animate-bounce
        "
      >

        <span
          className="
          text-xs
          tracking-[4px]
          uppercase
          text-[#D4AF37]
          mb-2
          "
        >
          Scroll
        </span>

        <ChevronDown
          size={24}
          className="text-[#D4AF37]"
        />

      </div>

    </section>
  );
}