import {
  ShieldCheck,
  Wifi,
  Car,
  ShowerHead,
  MapPin,
  BedDouble,
} from "lucide-react";

const features = [
  {
    icon: <BedDouble size={34} />,
    title: "Premium Rooms",
    description:
      "Well-maintained AC and Non-AC rooms designed for a peaceful and comfortable stay.",
  },
  {
    icon: <Wifi size={34} />,
    title: "Free Wi-Fi",
    description:
      "Stay connected with complimentary high-speed internet throughout your stay.",
  },
  {
    icon: <ShowerHead size={34} />,
    title: "24×7 Hot Water",
    description:
      "Enjoy uninterrupted hot water facilities with both Solar and Geyser systems.",
  },
  {
    icon: <MapPin size={34} />,
    title: "Prime Location",
    description:
      "Located just minutes away from Male Mahadeshwara Betta Temple.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Safe & Family Friendly",
    description:
      "Clean surroundings with a secure and welcoming environment for families.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="whychoose"
      className="bg-[#111111] py-28 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Why Choose Us
          </p>

          <h2
            className="
            font-[family:var(--font-heading)]
            text-5xl
            md:text-6xl
            mt-5
            "
          >
            Experience Comfort
            <br />

            <span className="text-[#D4AF37]">
              Like Never Before
            </span>

          </h2>

          <div className="flex justify-center items-center gap-4 mt-8">

            <div className="w-16 h-[2px] bg-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="w-16 h-[2px] bg-[#D4AF37]" />

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item) => (

            <div
              key={item.title}
              className="
              group
              bg-[#1A1A1A]
              border
              border-white/10
              rounded-3xl
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#D4AF37]
              hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)]
              "
            >

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-[#D4AF37]/10
                text-[#D4AF37]
                flex
                items-center
                justify-center
                mb-6
                group-hover:bg-[#D4AF37]
                group-hover:text-black
                transition-all
                duration-300
                "
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}