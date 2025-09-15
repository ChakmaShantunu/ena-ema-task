"use client";
import React from "react";
import { motion } from "framer-motion";

const caseStudiesData = [
    { image: "/images/case1.png", name: "Velora Events", descriptions: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"] },
    { image: "/images/case2.png", name: "Flowpilot", descriptions: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"] },
    { image: "/images/case3.png", name: "GrowthSummit", descriptions: ["20% high conversion than average in first week", "Clean and modern design with clear CTA"] }
];

// Framer Motion variants
const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }, // stagger between cards
};

export default function CaseStudies() {
    return (
        <div>
            {/* Heading */}
            <motion.div
                className="text-accent text-center pt-32"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h1 className="manrope font-medium lg:text-5xl">Case Studies</h1>
                <p className="general-sans text-base mt-2">See the designs that delivered results</p>
            </motion.div>

            {/* Cards Container */}
            <motion.div
                className="my-12 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={container}
            >
                <div className="flex flex-col sm:flex-col md:flex-row gap-4 md:-mx-28 lg:-mx-16 justify-center mx-4">
                    {caseStudiesData.map((caseStudy, index) => (
                        <motion.div
                            key={index}
                            className="bg-neutral border border-[#2a3c36] rounded-xl shadow-md w-full sm:w-[90%] md:w-[600px] lg:w-[850px] flex-shrink-0 md:mx-4"
                            variants={fadeUp}
                        >
                            {/* Image */}
                            <img
                                src={caseStudy.image}
                                alt={caseStudy.name}
                                className="w-full h-auto rounded-t-xl object-cover"
                            />

                            {/* Content */}
                            <div className="flex flex-col md:flex-row justify-between items-start p-6 md:p-8 gap-4 md:gap-6">
                                {/* Name */}
                                <h2 className="lg:text-2xl font-bold text-accent manrope">{caseStudy.name}</h2>

                                {/* Descriptions */}
                                <div className="flex flex-col gap-2 md:gap-3 text-accent-content text-sm">
                                    {caseStudy.descriptions.map((desc, i) => (
                                        <p key={i} className="bg-primary rounded-full p-2 md:p-3 flex items-center">
                                            <img src="images/Vector.png" alt="" className="mr-4" />
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Button */}
            <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                viewport={{ once: true }}
            >
                <button
                    className="px-10 py-4 mb-32 bg-gradient-to-b from-[#1fffa5] to-[#ffffffd5] text-[#002013] font-medium rounded flex items-center justify-center gap-2 shadow-[inset_0_0_12px_#1fffa540,0_4px_12px_#ffffff80] transition-all duration-300 ease-in-out hover:shadow-[inset_0_0_18px_#1fffa540,0_6px_16px_#ffffff80] hover:scale-[1.02]"
                >
                    I want similar results
                    <span>
                        <img src="/images/arrow.png" alt="" />
                    </span>
                </button>
            </motion.div>
        </div>
    );
}
