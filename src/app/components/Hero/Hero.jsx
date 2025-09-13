"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex items-center justify-center pt-12">
            <Image src="/images/logo.png" alt="Logo" width={120} height={27} className="w-[80px] h-[18px] lg:w-[120px] lg:h-[27px]" />
        </div>
    );
}
