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
];

const videos = [
  "/videos/roomvideo1.mp4",
  "/videos/roomvideo2.mp4",
  "/videos/roomvideo3.mp4",
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

        {/* Photos */}

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

        {/* Videos */}

        <div className="mt-24">

          <div className="text-center mb-12">

            <h2 className="font-[family:var(--font-heading)] text-4xl md:text-5xl text-[#D4AF37]">
              Room Videos
            </h2>

            <p className="text-gray-400 mt-4">
              Take a virtual tour of our rooms before your stay.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {videos.map((video, i) => (

              <div
                key={i}
                className="
                overflow-hidden
                rounded-3xl
                bg-[#111]
                border
                border-[#D4AF37]/20
                shadow-xl
                hover:border-[#D4AF37]
                transition-all
                duration-300
                "
              >

                <video
                  controls
                  preload="metadata"
                  className="w-full h-[320px] object-cover"
                >
                  <source
                    src={video}
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.

                </video>

              </div>

            ))}

          </div>

        </div>
                {/* Lightbox */}

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((src) => ({ src }))}
        />

      </div>

    </section>
  );
}