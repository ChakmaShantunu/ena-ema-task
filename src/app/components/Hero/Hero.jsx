"use client";
import Image from "next/image";
import CustomCard from "./customCard/CustomCard";

export default function Hero() {
    return (
        <div>
            <div className="flex items-center justify-center pt-12">
                <Image src="/images/logo.png" alt="Logo" width={120} height={27} className="w-[80px] h-[18px] lg:w-[120px] lg:h-[27px]" />
            </div>
            <div className="flex justify-center items-center">
                <div className="relative inline-block mt-10 md:mt-15 lg:mt-20">
                    <span className="bg-secondary w-[370px] h-6 px-4 py-2 block rounded-4xl absolute bottom-3.5 left-1/2 -translate-x-1/2 z-10 highlight-span md:w-[420px] md:h-7 lg:w-[461px] lg:h-8"></span>
                    <p className="text-accent-content flex items-center gap-2 bg-primary px-4 py-2 rounded-4xl relative z-20 text-sm general-sans md:text-base lg:text-lg opacity-95"><img src="/images/sparkle.png" width={16} height={16} alt="sparkle" />Trusted by 30+ startups & entrepreneurs worldwide</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <h1 className="text-white mt-6 mb-4 text-xl md:text-4xl lg:text-7xl text-center manrope font-bold">Strategic Landing Pages That Convert From Just $200</h1>
                <p className="text-center text-[#f5f5f5] md:max-w-6/12 lg:max-w-7/12 mx-auto">Stop wasting traffic on generic pages. We deliver premium, conversion-focused landing pages designed, developed, and launched in just 5 days.</p>
            </div>

            <CustomCard></CustomCard>
            <div className="flex flex-wrap justify-center items-center gap-12 mt-3 text-center">
                <div className="flex items-center justify-center gap-2">
                    <span><img src="images/Lock.png" alt="" /></span>
                    <p className="text-accent-content text-xs">SSL secure</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <span><img src="images/Check.png" alt="" /></span>
                    <p className="text-accent-content text-xs">Money-back guaranteed</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <span><img src="images/Star.png" alt="" /></span>
                    <p className="text-accent-content text-xs">Satisfaction guaranteed</p>
                </div>
            </div>
        </div>
    );
}
