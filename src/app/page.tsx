import { Feature } from "@/components/sections/Feature";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Services } from "./[pages]/services/page";
import { About } from "./[pages]/about/page";
import MapSection from "@/components/sections/Map";
import { Hero } from "@/components/sections/Hero";
import { Branches } from "./[pages]/branches/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs
        heading={"We don’t just send staff. We send care."}
        description={
          "When you choose us, you’re choosing trained professionals who show up not just with credentials, but with compassion. We’ve helped hundreds of families across Lucknow care for their loved ones at home — with dignity, safety, and respect."
        }
        image={{
          src: "images/care.png",
          alt: "",
        }}
      />
      <Feature />
      <Services />
      <About />
      <Branches />
      <MapSection />
    </>
  );
}
