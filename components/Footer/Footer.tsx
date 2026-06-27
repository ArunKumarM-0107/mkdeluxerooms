import Link from "next/link";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Business Info */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500">
            MK Deluxe Rooms
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            Comfortable and affordable rooms near
            Male Mahadeshwara Betta for pilgrims,
            tourists and families.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link href="#about">About</Link>
            <Link href="#rooms">Rooms</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-4">

            <div className="flex gap-3">
              <Phone className="text-yellow-500" />
              <span>+91 9481019898</span>
            </div>

            <div className="flex gap-3">
              <MapPin className="text-yellow-500" />
              <span>MM Hills, Karnataka</span>
            </div>

            <div className="flex gap-3">
              <MessageCircle className="text-yellow-500" />
              <span>WhatsApp Booking Available</span>
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} MK Deluxe Rooms. All Rights Reserved.
      </div>
    </footer>
  );
}