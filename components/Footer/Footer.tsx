import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#D4AF37]/20 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/images/logo.png"
                alt="MK Deluxe Rooms"
                width={70}
                height={70}
              />

              <div>

                <h2 className="font-[family:var(--font-heading)] text-3xl">
                  MK Deluxe
                </h2>

                <p className="text-[#D4AF37] uppercase tracking-[5px] text-xs mt-1">
                  Luxury Rooms
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-8 mt-8">

              Comfortable, clean and affordable
              accommodation near Male Mahadeshwara
              Betta Temple with modern amenities and
              warm hospitality.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link href="#about" className="hover:text-[#D4AF37] transition">
                About
              </Link>

              <Link href="#rooms" className="hover:text-[#D4AF37] transition">
                Rooms
              </Link>

              <Link href="#gallery" className="hover:text-[#D4AF37] transition">
                Gallery
              </Link>

              <Link href="#contact" className="hover:text-[#D4AF37] transition">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-8">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin className="text-[#D4AF37]" />

                <span className="text-gray-400">
                  Male Mahadeshwara Betta,
                  Karnataka
                </span>

              </div>

              <div className="flex gap-3">

                <Phone className="text-[#D4AF37]" />

                <a
                  href="tel:+919481019898"
                  className="text-gray-400 hover:text-white"
                >
                  +91 94810 19898
                </a>

              </div>

              <div className="flex gap-3">

                <Clock className="text-[#D4AF37]" />

                <span className="text-gray-400">
                  Open 24 Hours
                </span>

              </div>

              <div className="flex gap-3">

                <Mail className="text-[#D4AF37]" />

                <span className="text-gray-400">
                  Contact via WhatsApp
                </span>

              </div>

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-2xl font-semibold mb-8">
              Connect
            </h3>

            <p className="text-gray-400 leading-8">

              Have questions?
              We're available 24×7 to help
              you book your stay.

            </p>

            <a
              href="https://wa.me/919481019898"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              items-center
              gap-3
              mt-8
              bg-[#25D366]
              hover:bg-[#1EBE5D]
              px-7
              py-4
              rounded-full
              font-semibold
              transition
              "
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="
                w-11
                h-11
                rounded-full
                bg-[#1A1A1A]
                flex
                items-center
                justify-center
                hover:bg-[#D4AF37]
                hover:text-black
                transition
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                w-11
                h-11
                rounded-full
                bg-[#1A1A1A]
                flex
                items-center
                justify-center
                hover:bg-[#D4AF37]
                hover:text-black
                transition
                "
              >
                <FaFacebookF />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 text-center">

          <p className="text-gray-500">

            © {new Date().getFullYear()} MK Deluxe Rooms.
            All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
}