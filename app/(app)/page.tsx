"use client";
import Image from "next/image";
import WaveMarquee from "./gsap_animation";
import Hero from "../components/sections/hero";
import Category from "../components/sections/category";
import Store from "../components/sections/store";
import Testimonials from "../components/sections/textimonials";
import useFetch from "../lib/useAsyncFetch";
import { getAllProducts } from "../lib/async_data";
import Spinner from "../components/utils/spinner";
export default function Home() {
  const {
    data: products,
    loading,
    refetch,
  } = useFetch({
    fn: getAllProducts, // Your API function
    // params: { category: 'electronics' }
  });
  if (loading) {
    
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  if (!loading && products) {
    console.log(products);
    return (
    <main className="w-full">
      <Hero />
      <Category />
      <Store products={products.products} />
      <Testimonials />
    </main>
  );
  }
  
}
