import Image from "next/image";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/Hero";
import FaqSection from "./components/FaqSection";
import { FieldSection } from "./components/Slider";
import { PoweredBySection } from "./components/Supported";
import { Footer } from "./components/layout/Footer";
import { ContactSection } from "./components/layout/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda - TechHub",
}


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <FieldSection/>
      <PoweredBySection/>
      <FaqSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
}
