import Image from "next/image";
import CTAButton from "./CTAButton";

type RoomCardProps = {
  image: string;
  title: string;
  description: string;
  features: string[];
};

export default function RoomCard({
  image,
  title,
  description,
  features,
}: RoomCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <Image
        src={image}
        alt={title}
        width={700}
        height={500}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="text-gray-500 mt-3">
          {description}
        </p>

        <ul className="mt-5 space-y-2">
          {features.map((feature, index) => (
            <li key={index}>✅ {feature}</li>
          ))}
        </ul>

        <div className="mt-6">
          <CTAButton
            text="Book on WhatsApp"
            href="https://wa.me/919481019898?text=Hi%20MK%20Deluxe%20Rooms,%20I%20would%20like%20to%20book%20a%20room."
          />
        </div>
      </div>
    </div>
  );
}