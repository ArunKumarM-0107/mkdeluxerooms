import Image from "next/image";

type HeroSlideProps = {
  image: string;
};

export default function HeroSlide({ image }: HeroSlideProps) {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={image}
        alt="MK Deluxe Rooms"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
}