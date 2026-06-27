"use client";

import CountUp from "react-countup";
import {
  Users,
  BedDouble,
  Star,
  MapPin,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={38} />,
    value: 1500,
    suffix: "+",
    title: "Happy Guests",
  },
  {
    icon: <BedDouble size={38} />,
    value: 2,
    suffix: "",
    title: "Room Types",
  },
  {
    icon: <Star size={38} />,
    value: 4.6,
    suffix: "/5",
    decimals: 1,
    title: "Google Rating",
  },
  {
    icon: <MapPin size={38} />,
    value: 1,
    suffix: "",
    title: "Prime Location",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0D0D0D] py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Our Highlights
          </p>

          <h2
            className="
            font-[family:var(--font-heading)]
            text-5xl
            md:text-6xl
            text-white
            mt-5
            "
          >
            Trusted By
            <span className="text-[#D4AF37]">
              {" "}Hundreds Of Guests
            </span>
          </h2>

          <div className="flex justify-center items-center gap-4 mt-8">

            <div className="w-16 h-[2px] bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="w-16 h-[2px] bg-[#D4AF37]" />

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (

            <div
              key={item.title}
              className="
              bg-[#181818]
              rounded-3xl
              p-10
              text-center
              border
              border-white/10
              hover:border-[#D4AF37]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]
              "
            >

              <div className="text-[#D4AF37] flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-white">

                <CountUp
                  end={item.value}
                  duration={2.5}
                  decimals={item.decimals || 0}
                />

                {item.suffix}

              </h3>

              <p className="text-gray-400 mt-4 tracking-wide">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}