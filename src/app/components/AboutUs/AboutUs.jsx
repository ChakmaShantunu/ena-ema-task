"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

export default function AboutUs() {
    const feedbacks = [
        {
            name: "Sarah Johnson",
            position: "SaaS Founder",
            image: "/images/Ellipse 3.png",
            rating: 5,
            feedback: "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
        },
        {
            name: "Mike Chen",
            position: "Fitness Coach",
            image: "/images/Ellipse.png",
            rating: 5,
            feedback: "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
        },
        {
            name: "Amanda Rodriguez",
            position: "E-Commerce Owner",
            image: "/images/Ellipse 2.png",
            rating: 5,
            feedback: "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
        },
        {
            name: "David Lee",
            position: "SaaS Founder",
            image: "/images/Ellipse 4.png",
            rating: 5,
            feedback: "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
        },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        swipeToSlide: true,
        centerMode: false,
        centerPadding: "70px",
        rlt: true,
        autoplay: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "50px" } },
            { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "30px" } },
        ],
    };

    const zoomUp = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="py-16 bg-[#1827228a] text-accent">
            <div className="max-w-[1440px] mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-[1440px] mx-auto mb-12"
                >
                    <h1 className="manrope text-5xl font-medium text-accent">
                        What Our Clients Are Saying <span className="text-secondary">About Us</span>
                    </h1>
                    <p className="general-sans text-accent mt-2">
                        Real feedback from students who have successfully completed our program.
                    </p>
                </motion.div>

                <div className="overflow-hidden relative -mx-4">
                    <Slider {...settings}>
                        {feedbacks.map((f, index) => (
                            <motion.div
                                key={index}
                                className="px-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                variants={zoomUp}
                            >
                                <div className="bg-[#192420] w-full h-full md:h-[262px] lg:h-[262px] rounded-xl p-6 flex flex-col justify-between">
                                    {/* 5-star rating */}
                                    <div className="flex mb-3">
                                        {Array.from({ length: f.rating }).map((_, i) => (
                                            <span key={i} className="text-secondary text-lg">
                                                ★
                                            </span>
                                        ))}
                                        {Array.from({ length: 5 - f.rating }).map((_, i) => (
                                            <span key={i} className="text-gray-600 text-lg">
                                                ★
                                            </span>
                                        ))}
                                    </div>

                                    {/* Feedback */}
                                    <p className="text-gray-300 mb-6 flex-grow">"{f.feedback}"</p>

                                    {/* User info */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={f.image}
                                            alt={f.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div className="text-left">
                                            <p className="general-sans font-semibold">{f.name}</p>
                                            <p className="general-sans text-gray-400 text-sm">
                                                {f.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
