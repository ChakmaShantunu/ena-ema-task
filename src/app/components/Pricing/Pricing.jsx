"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

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

    // Framer Motion variants
    const zoomUp = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } }, // stagger animation for cards
    };

    return (
        <div className='lg:max-w-[1440px] mx-auto px-4 lg:px-0'>
            <motion.div
                className='lg:mt-32 text-center lg:text-left'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={zoomUp}
            >
                <h1 className='manrope text-3xl md:text-4xl lg:text-5xl font-medium text-accent'>
                    Simple, Transparent Pricing — <span className='text-secondary'>Choose Your Plan</span>
                </h1>
                <p className='general-sans text-accent text-sm md:text-base lg:mt-2 lg:mb-12'>
                    No hidden fees, no surprises. Just premium landing pages at unbeatable prices.
                </p>
            </motion.div>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9 lg:pb-12'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={container}
            >
                {pricingData.map((data, index) => (
                    <motion.div
                        key={index}
                        className="card shadow-sm bg-primary px-4 py-6 lg:px-6 lg:py-8 
                   hover:border hover:border-secondary 
                   transform transition-transform duration-300 ease-in-out 
                   hover:scale-105 group cursor-pointer"
                        variants={zoomUp}
                    >
                        <div className="card-body relative">
                            {data.mostPopular && (
                                <span className="general-sans absolute -top-8 lg:-top-12 left-16 -translate-x-1/2 
                             bg-primary border border-secondary text-accent text-xs md:text-sm 
                             font-semibold px-3 py-1 rounded-full">
                                    Most Popular
                                </span>
                            )}

                            <div className="flex justify-between items-center">
                                <h2 className="manrope font-bold text-accent text-2xl md:text-2xl lg:text-2xl">{data.title}</h2>
                                <span className="general-sans text-2xl text-secondary font-medium">${data.price}</span>
                            </div>

                            <p className='general-sans text-accent text-xs md:text-sm mt-2'>{data.description}</p>

                            <div className="w-full h-[1px] bg-[#2a3c36] my-4"></div>

                            <ul className="mt-6 flex flex-col gap-2 text-xs md:text-sm list-disc list-inside">
                                {data.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className='general-sans list-disc list-inside text-accent-content text-xs md:text-sm marker:text-secondary marker:text-lg'
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 flex justify-center items-center">
                                <button
                                    className="general-sans w-full h-[54px] bg-[#003d25] text-secondary font-medium rounded flex items-center justify-center gap-2 
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
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
