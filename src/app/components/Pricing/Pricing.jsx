import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function Pricing() {
    const pricingData = [
        {
            title: "Basic",
            price: 200,
            description: "Perfect for solopreneurs",
            mostPopular: false,
            features: [
                "1 Landing Page (Design + Development)",
                "Hosting Deployment",
                "5-Day Delivery",
                "Basic Support",
            ],
        },
        {
            title: "Standard",
            price: 300,
            description: "Best balance of value & features",
            mostPopular: true,
            features: [
                "Everything in Basic",
                "Extra Custom Section",
                "Free Hosting Setup",
                "Free Consultation Call",
                "Priority Support",
            ],
        },
        {
            title: "Premium",
            price: 500,
            description: "For brands & agencies",
            mostPopular: false,
            features: [
                "Everything in Standard",
                "Advanced Animations",
                "Priority Delivery (3 Days)",
                "6 Months Free Support",
                "Performance Optimization",
            ],
        },
    ];
    return (
        <div className='lg:max-w-[1440px] mx-auto px-4 lg:px-0'>
            <div className='lg:mt-32 text-center lg:text-left'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-accent'>
                    Simple, Transparent Pricing — <span className='text-secondary'>Choose Your Plan</span>
                </h1>
                <p className='text-accent text-sm md:text-base lg:mt-2 lg:mb-12'>
                    No hidden fees, no surprises. Just premium landing pages at unbeatable prices.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9 lg:pb-12'>
                {pricingData.map((data, index) => (
                    <div
                        key={index}
                        className="card shadow-sm bg-primary px-4 py-6 lg:px-6 lg:py-8 
                   hover:border hover:border-secondary 
                   transform transition-transform duration-300 ease-in-out 
                   hover:scale-105 group cursor-pointer"
                    >
                        <div className="card-body relative">
                            {data.mostPopular && (
                                <span className="absolute -top-8 lg:-top-12 left-16 -translate-x-1/2 
                             bg-primary border border-secondary text-accent text-xs md:text-sm 
                             font-semibold px-3 py-1 rounded-full">
                                    Most Popular
                                </span>
                            )}

                            <div className="flex justify-between items-center">
                                <h2 className="font-bold text-accent text-2xl md:text-2xl lg:text-2xl">{data.title}</h2>
                                <span className="text-2xl text-secondary font-medium">${data.price}</span>
                            </div>

                            <p className='text-accent text-xs md:text-sm mt-2'>{data.description}</p>

                            <div className="w-full h-[1px] bg-[#2a3c36] my-4"></div>

                            <ul className="mt-6 flex flex-col gap-2 text-xs md:text-sm list-disc list-inside">
                                {data.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className='list-disc list-inside text-accent-content text-xs md:text-sm marker:text-secondary marker:text-lg'
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 flex justify-center items-center">
                                <button
                                    className="w-full h-[54px] bg-[#003d25] text-secondary font-medium rounded flex items-center justify-center gap-2 
              group-hover:text-[#002013] transition-all duration-300 ease-in-out 
              group-hover:bg-gradient-to-b group-hover:from-[#1fffa5] group-hover:to-[#ffffffd5] 
              group-hover:border group-hover:border-[#1fffa5] 
              group-hover:shadow-[inset_0_0_18px_#1fffa540,0_6px_16px_#ffffff80] 
              group-hover:scale-[1.02] cursor-pointer"
                                >
                                    Start My Project
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
