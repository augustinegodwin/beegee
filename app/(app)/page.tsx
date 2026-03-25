import Image from "next/image";
import WaveMarquee from "./gsap_animation";
import Hero from "../components/sections/hero";
import Category from "../components/sections/category";
import Store from "../components/sections/store";
import Testimonials from "../components/sections/textimonials";

export default function Home() {
  return (
    <main className="w-full">
      <Hero/>
      <Category/>
      <Store/>
      <Testimonials/>
    </main>
  );
}
