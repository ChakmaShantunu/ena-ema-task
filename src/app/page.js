import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Showcase from "./components/Showcase/Showcase";
import WhyTrustUsSection from "./components/WhyTrustUsSection/WhyTrustUsSection";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Pricing from "./components/Pricing/Pricing";
import Discount from "./components/Discount/Discount";
import Landing from "./components/LandingPage/Landing";

// min-h-[7893px]
export default function Home() {
  return (
    <div className='bg-neutral'>
      <div className='max-w-[393px] md:max-w-[744px] lg:max-w-[1440px] mx-auto'>
        <Hero></Hero>
      </div>
      <div>
        <Showcase></Showcase>
      </div>
      <div>
        <WhyTrustUsSection></WhyTrustUsSection>
      </div>
      <div className="bg-[#0a0f0d]">
        <CaseStudies></CaseStudies>
        <Pricing></Pricing>
        <Discount></Discount>
        <Landing></Landing>
      </div>
    </div>
  );
}
