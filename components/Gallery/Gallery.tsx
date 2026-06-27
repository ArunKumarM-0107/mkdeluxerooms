"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/room1.jpg",
  "/images/room2.jpg",
  "/images/room3.jpg",
  "/images/room4.jpg",
  "/images/room5.jpg",
  "/images/bathroom1.jpg",
  "/images/bathroom2 .jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section
      id="gallery"
      className="bg-[#0D0D0D] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Gallery
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
            Explore Our
            <span className="text-[#D4AF37]">
              {" "}Rooms
            </span>
          </h2>

          <div className="flex justify-center items-center gap-4 mt-8">

            <div className="w-16 h-[2px] bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="w-16 h-[2px] bg-[#D4AF37]" />

          </div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8">
            Every room is thoughtfully designed to provide a peaceful,
            clean and comfortable stay for pilgrims, families and tourists.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image, i) => (

            <div
              key={i}
              onClick={() => setIndex(i)}
              className="
              relative
              h-[320px]
              overflow-hidden
              rounded-3xl
              cursor-pointer
              group
              "
            >

              <Image
                src={image}
                alt={`Room ${i + 1}`}
                fill
                className="
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-transparent
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                "
              />

              <div
                className="
                absolute
                bottom-6
                left-6
                opacity-0
                group-hover:opacity-100
                transition
                "
              >

                <h3 className="text-white text-xl font-semibold">
                  MK Deluxe Rooms
                </h3>

                <p className="text-[#D4AF37] text-sm mt-1">
                  Click to View
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />

    </section>
  );
}