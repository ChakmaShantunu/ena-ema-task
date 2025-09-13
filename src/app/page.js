import Image from "next/image";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className='bg-neutral'>
      <div className='max-w-[393px] min-h-[7893px] md:max-w-[744px] lg:max-w-[1440px] mx-auto'>
        <Hero></Hero>
      </div>
    </div>
  );
}
