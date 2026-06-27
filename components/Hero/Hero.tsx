import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">

      <Image
        src="/images/hero.jpg"
        alt="MK Deluxe Rooms"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-5xl md:text-7xl font-bold text-white">
          MK <span className="text-yellow-500">Deluxe Rooms</span>
        </h1>

        <p className="text-xl text-gray-300 mt-6 max-w-2xl">
          Comfortable Stay Near Male Mahadeshwara Betta
        </p>

        <div className="flex gap-4 mt-10 flex-wrap">

          <a
            href="https://wa.me/919481019898?text=Hi%20MK%20Deluxe%20Rooms,%20I%20would%20like%20to%20book%20a%20room."
            target="_blank"
            className="bg-yellow-500 px-7 py-3 rounded-full text-black font-semibold"
          >
            Book on WhatsApp
          </a>

          <a
            href="tel:+919481019898"
            className="border border-yellow-500 px-7 py-3 rounded-full text-white"
          >
            Call Now
          </a>

        </div>

      </div>

    </section>
  );
}