import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ramesh Kumar",
    location: "Bengaluru",
    review:
      "Very clean rooms and excellent hospitality. Walking distance to the temple and the staff were very helpful. Highly recommended.",
  },
  {
    name: "Priya S",
    location: "Mysuru",
    review:
      "Stayed with my family for two nights. The rooms were spacious, hot water was available all day, and the location was perfect.",
  },
  {
    name: "Mahesh Gowda",
    location: "Mandya",
    review:
      "Affordable pricing with premium facilities. Wi-Fi, TV and cleanliness were excellent. Will definitely stay again.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#111111] py-28 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Guest Reviews
          </p>

          <h2
            className="
            font-[family:var(--font-heading)]
            text-5xl
            md:text-6xl
            mt-5
            "
          >
            What Our
            <span className="text-[#D4AF37]">
              {" "}Guests Say
            </span>
          </h2>

          <div className="flex justify-center items-center gap-4 mt-8">

            <div className="w-16 h-[2px] bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="w-16 h-[2px] bg-[#D4AF37]" />

          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item) => (

            <div
              key={item.name}
              className="
              bg-[#181818]
              border
              border-white/10
              rounded-3xl
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#D4AF37]
              hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]
              "
            >

              {/* Stars */}

              <div className="flex gap-1 text-[#D4AF37] mb-6">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="text-gray-300 leading-8 mb-8 italic">
                "{item.review}"
              </p>

              {/* User */}

              <div className="border-t border-white/10 pt-6">

                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-[#D4AF37] text-sm mt-1">
                  {item.location}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Google Button */}

        <div className="text-center mt-16">

          <a
            href="https://share.google/PCYqalL78sYnKQS11"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            px-8
            py-4
            rounded-full
            bg-[#D4AF37]
            hover:bg-[#E6C65B]
            text-black
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            shadow-xl
            "
          >
            View All Reviews on Google
          </a>

        </div>

      </div>
    </section>
  );
}