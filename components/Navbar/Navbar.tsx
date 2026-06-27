"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Amenities", href: "#amenities" },
    { name: "Rooms", href: "#rooms" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-2 md:gap-4">

          <Image
            src="/images/logo.png"
            alt="MK Deluxe Rooms"
            width={60}
            height={60}
            priority
            className="w-10 h-10 md:w-14 md:h-14 object-contain"
          />

          <div className="leading-none">

            <h1
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-lg md:text-3xl font-semibold text-white"
            >
              MK Deluxe
            </h1>

            <p className="hidden md:block uppercase tracking-[5px] text-[#D4AF37] text-xs mt-1">
              Luxury Rooms
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          {menuItems.map((item) => (

            <Link
              key={item.name}
              href={item.href}
              className="
                relative
                text-white
                text-sm
                uppercase
                tracking-[3px]
                hover:text-[#D4AF37]
                transition
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[#D4AF37]
                hover:after:w-full
                after:transition-all
              "
            >
              {item.name}
            </Link>

          ))}

        </nav>

        {/* Desktop Button */}

        <a
          href="https://wa.me/919481019898?text=Hi%20MK%20Deluxe%20Rooms,%20I%20would%20like%20to%20book%20a%20room."
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden
            lg:flex
            items-center
            bg-[#D4AF37]
            hover:bg-[#E6C65B]
            text-black
            font-semibold
            px-7
            py-3
            rounded-full
            transition-all
            duration-300
            hover:scale-105
            shadow-xl
          "
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >

        <div className="bg-[#111111]/95 backdrop-blur-xl border-t border-white/10">

          <div className="flex flex-col px-6 py-6 gap-6">

            {menuItems.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  text-white
                  uppercase
                  tracking-[3px]
                  hover:text-[#D4AF37]
                  transition
                "
              >
                {item.name}
              </Link>

            ))}

            <a
              href="https://wa.me/919481019898?text=Hi%20MK%20Deluxe%20Rooms,%20I%20would%20like%20to%20book%20a%20room."
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-2
                bg-[#D4AF37]
                text-black
                font-semibold
                text-center
                py-3
                rounded-full
                hover:bg-[#E6C65B]
                transition
              "
            >
              Book Now
            </a>

          </div>

        </div>

      </div>

    </header>
  );
}