import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const features = [
    "Premium AC & Non-AC Rooms",
    "Free High-Speed Wi-Fi",
    "24×7 Hot Water",
    "LED TV in Every Room",
    "Family Friendly Stay",
    "Walking Distance to Temple",
  ];

  return (
    <section
      id="about"
      className="bg-[#0D0D0D] text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Image */}

        <div className="relative">

          <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#D4AF37] rounded-3xl"></div>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src="/images/room1.jpg"
              alt="MK Deluxe Rooms"
              width={700}
              height={700}
              className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
            />

          </div>

        </div>

        {/* Right Content */}

        <div>

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold mb-4">
            About Us
          </p>

          <h2
            className="
            font-[family:var(--font-heading)]
            text-5xl
            md:text-6xl
            leading-tight
            text-white
            "
          >
            A Peaceful Stay
            <br />

            <span className="text-[#D4AF37]">
              Near MM Hills
            </span>

          </h2>

          <div className="flex items-center gap-4 my-8">

            <div className="w-16 h-[2px] bg-[#D4AF37]" />

            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />

            <div className="w-16 h-[2px] bg-[#D4AF37]" />

          </div>

          <p className="text-gray-300 text-lg leading-9">

            Welcome to <strong>MK Deluxe Rooms</strong>,
            your perfect destination for a peaceful,
            comfortable and affordable stay near
            Male Mahadeshwara Betta Temple.

          </p>

          <p className="text-gray-400 mt-8 leading-9">

            Whether you're visiting with your family,
            on a pilgrimage or travelling with friends,
            we provide clean rooms, modern amenities
            and warm hospitality to make your stay
            memorable.

          </p>

          {/* Features */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <CheckCircle2
                  className="text-[#D4AF37]"
                  size={22}
                />

                <span className="text-gray-200">
                  {item}
                </span>

              </div>

            ))}

          </div>

          {/* Button */}

          <a
            href="https://wa.me/919481019898?text=Hi%20MK%20Deluxe%20Rooms,%20I%20would%20like%20to%20book%20a%20room."
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            mt-12
            px-8
            py-4
            rounded-full
            bg-[#D4AF37]
            hover:bg-[#E6C65B]
            text-black
            font-semibold
            transition
            shadow-xl
            "
          >
            Book Your Stay
          </a>

        </div>

      </div>
    </section>
  );
}