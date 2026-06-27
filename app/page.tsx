import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Amenities from "@/components/Amenities/Amenities";
import Gallery from "@/components/Gallery/Gallery";
import Rooms from "@/components/Rooms/Rooms";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews/Reviews";
import FadeUp from "@/components/Motion/FadeUp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <FadeUp>
        <About />
      </FadeUp>

      <FadeUp>
        <WhyChoose />
      </FadeUp>

      <FadeUp>
        <Stats />
      </FadeUp>

      <FadeUp>
        <Reviews />
      </FadeUp>

      <FadeUp>
        <Amenities />
      </FadeUp>

      <FadeUp>
        <Rooms />
      </FadeUp>

      <FadeUp>
        <Gallery />
      </FadeUp>

      <FadeUp>
        <Contact />
      </FadeUp>

      <Footer />
      <FloatingButtons />
    </>
  );
}