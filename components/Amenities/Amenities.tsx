import {
  Wifi,
  Tv,
  ShowerHead,
  BedDouble,
  MapPin,
} from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "High-speed internet access",
  },
  {
    icon: Tv,
    title: "LED TV",
    description: "Entertainment in every room",
  },
  {
    icon: ShowerHead,
    title: "24×7 Hot Water",
    description: "Solar & Geyser",
  },
  {
    icon: BedDouble,
    title: "Family Rooms",
    description: "Comfortable stay",
  },
  {
    icon: MapPin,
    title: "Near MM Hills",
    description: "Just minutes from the temple",
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Our Amenities
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Everything you need for a comfortable stay.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">

          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
              >
                <Icon
                  size={50}
                  className="mx-auto text-yellow-500"
                />

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-3">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}