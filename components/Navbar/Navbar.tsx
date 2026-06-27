"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-yellow-700/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/">
          <h2 className="text-2xl font-bold text-yellow-500">
            MK Deluxe Rooms
          </h2>
        </Link>

        <nav className="hidden md:flex gap-8 text-white">
          <Link href="#about">About</Link>
          <Link href="#rooms">Rooms</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <a
          href="https://wa.me/919481019898?text=Hi%20MK%20Deluxe%20Rooms,%20I%20would%20like%20to%20book%20a%20room."
          target="_blank"
          className="bg-yellow-500 hover:bg-yellow-400 transition px-5 py-2 rounded-full text-black font-semibold"
        >
          Book Now
        </a>

      </div>
    </header>
  );
}