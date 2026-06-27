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

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-4">

          <Image
            src="/images/logo.png"
            alt="MK Deluxe Rooms"
            width={120}
            height={120}
            priority
            className="object-contain"
          />

          <div>

            <h1 className="font-[family:var(--font-heading)] text-3xl text-white leading-none tracking-wide">
              MK Deluxe
            </h1>

            <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs mt-1">
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

        {/* Book Button */}

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
          px-8
          py-3
          rounded-full
          transition-all
          duration-300
          shadow-xl
          hover:scale-105
          "
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-[#111111] border-t border-white/10">

          <div className="flex flex-col p-6 gap-6">

            {menuItems.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white hover:text-[#D4AF37] uppercase tracking-[3px]"
              >
                {item.name}
              </Link>

            ))}

            <a
              href="https://wa.me/919481019898"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-center text-black font-semibold py-3 rounded-full"
            >
              Book Now
            </a>

          </div>

        </div>

      )}

    </header>
  );
}