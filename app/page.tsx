import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Listing from "@/components/Listing";
import Numbers from "@/components/Numbers";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Numbers />
      <Listing />
      <Testimonials />
    </>
  )
}
