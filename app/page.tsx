import DarkBg from "@/components/DarkBg";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" h-screen text-white bg-[#1c1c1c] ">
      <Hero />
      <DarkBg />
      <Services />
      <DarkBg />
      <Testimonial />
      <DarkBg />
      <Footer />
    </main>
  );
}
