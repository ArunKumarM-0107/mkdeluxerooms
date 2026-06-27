import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Star,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#111111] py-28 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Contact Us
          </p>

          <h2
            className="
            font-[family:var(--font-heading)]
            text-5xl
            md:text-6xl
            mt-5
            "
          >
            We're Always
            <span className="text-[#D4AF37]">
              {" "}Here To Help
            </span>
          </h2>

          <div className="flex justify-center items-center gap-4 mt-8">

            <div className="w-16 h-[2px] bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="w-16 h-[2px] bg-[#D4AF37]" />

          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/10">

              <div className="flex gap-5">

                <MapPin className="text-[#D4AF37]" size={32} />

                <div>

                  <h3 className="text-2xl font-semibold">
                    Address
                  </h3>

                  <p className="text-gray-400 leading-8 mt-3">

                    MK Deluxe Rooms <br />
                    Near Panchayat Office <br />
                    Thambadigere Street <br />
                    Male Mahadeshwara Betta <br />
                    Karnataka – 571490

                  </p>

                </div>

              </div>

            </div>

            <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/10">

              <div className="flex gap-5">

                <Phone className="text-[#D4AF37]" size={32} />

                <div>

                  <h3 className="text-2xl font-semibold">
                    Contact Numbers
                  </h3>

                  <a
                    href="tel:+919481019898"
                    className="block mt-4 text-gray-300 hover:text-[#D4AF37]"
                  >
                    +91 94810 19898
                  </a>

                  <a
                    href="tel:+919481779898"
                    className="block mt-2 text-gray-300 hover:text-[#D4AF37]"
                  >
                    +91 94817 79898
                  </a>

                </div>

              </div>

            </div>

            <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/10">

              <div className="flex gap-5">

                <Clock className="text-[#D4AF37]" size={32} />

                <div>

                  <h3 className="text-2xl font-semibold">
                    Business Hours
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Open 24 Hours
                  </p>

                </div>

              </div>

            </div>

            <div className="flex flex-wrap gap-4 pt-6">

              <a
                href="https://wa.me/919481019898"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                items-center
                gap-3
                bg-[#25D366]
                hover:bg-[#1EBE5D]
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                "
              >
                <FaWhatsapp size={22} />
                WhatsApp
              </a>

              <a
                href="tel:+919481019898"
                className="
                flex
                items-center
                gap-3
                border-2
                border-[#D4AF37]
                text-[#D4AF37]
                hover:bg-[#D4AF37]
                hover:text-black
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
                "
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href="https://maps.google.com/?q=MK+DELUXE+ROOMS"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                items-center
                gap-3
                bg-white
                text-black
                hover:bg-gray-200
                px-8
                py-4
                rounded-full
                font-semibold
                transition
                "
              >
                <Navigation size={20} />
                Directions
              </a>

            </div>

          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1427417340087!2d77.5898042!3d12.0336925!2m3!1f0!2f0!3f0!2m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baeb9981784fdbf%3A0xf8366863ca7ef2e0!2sMK%20DELUXE%20ROOMS!5e0!3m2!1sen!2sin!4v1782553695813!5m2!1sen!2sin"
              width="100%"
              height="620"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </div>
    </section>
  );
}