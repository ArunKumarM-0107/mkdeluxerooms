"use client";

import Image from "next/image";
import {
  Wifi,
  Tv,
  ShowerHead,
  Users,
  Snowflake,
  Wind,
  Bath,
} from "lucide-react";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const rooms = [
  {
    title: "AC Room",
    image: "/images/room4.jpg",
    icon: <Snowflake size={18} />,
    badge: "Air Conditioned",
    guests: "2 - 5 Guests",
    description:
      "Enjoy a comfortable stay with air conditioning, modern amenities, and a peaceful atmosphere near Male Mahadeshwara Betta.",
  },
  {
    title: "Non-AC Room",
    image: "/images/room2.jpg",
    icon: <Wind size={18} />,
    badge: "Well Ventilated",
    guests: "2 - 5 Guests",
    description:
      "Affordable and spacious rooms with natural ventilation, perfect for pilgrims, tourists, and families.",
  },
];

export default function Rooms() {
  return (
    <section
      id="rooms"
      className="py-24 bg-gradient-to-b from-white to-gray-100 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            OUR ROOMS
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Stay in Comfort
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Choose between our AC and Non-AC rooms designed for a peaceful,
            comfortable, and affordable stay.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {rooms.map((room, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* Image */}

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />

                <div className="absolute top-5 left-5 bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg">

                  {room.icon}

                  {room.badge}

                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-3">
                  {room.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-8">
                  {room.description}
                </p>

                {/* Amenities */}

                <div className="grid grid-cols-2 gap-5">

                  <div className="flex items-center gap-3">
                    <Users className="text-yellow-500" />
                    <span>{room.guests}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Wifi className="text-yellow-500" />
                    <span>Free Wi-Fi</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Tv className="text-yellow-500" />
                    <span>LED TV</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <ShowerHead className="text-yellow-500" />
                    <span>24×7 Hot Water</span>
                  </div>

                  <div className="flex items-center gap-3 col-span-2">
                    <Bath className="text-yellow-500" />
                    <span>Attached Bathroom</span>
                  </div>

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4 mt-10">

                  <a
                    href="https://wa.me/919481019898?text=Hi%20MK%20Deluxe%20Rooms,%20I%20would%20like%20to%20book%20a%20room."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    <FaWhatsapp size={20} />
                    Book Now
                  </a>

                  <a
                    href="tel:+919481019898"
                    className="flex items-center gap-3 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black px-7 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    <FaPhoneAlt size={18} />
                    Call Now
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}