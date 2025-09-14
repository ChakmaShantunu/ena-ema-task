"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "50px" } },
            { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "30px" } },
        ],
    };


    return (
        <section className="py-16 bg-[#1827228a] text-accent">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="max-w-[1440px] mx-auto">
                    <h1 className="manrope text-5xl font-medium text-accent">What Our Clients Are Saying <span className="text-secondary">About Us</span></h1>
                    <p className="general-sans text-accent mt-2 mb-12">
                        Real feedback from students who have successfully completed our program.
                    </p>
                </div>
                <div className="overflow-hidden relative -mx-4">
                    <Slider {...settings}>
                        {feedbacks.map((f, index) => (
                            <div key={index} className="px-4">
                                <div className="bg-[#192420] w-full rounded-xl p-6 h-full flex flex-col justify-between">
                                    {/* 5-star rating */}
                                    <div className="flex mb-3">
                                        {Array.from({ length: f.rating }).map((_, i) => (
                                            <span key={i} className="text-secondary text-lg">★</span>
                                        ))}
                                        {Array.from({ length: 5 - f.rating }).map((_, i) => (
                                            <span key={i} className="text-gray-600 text-lg">★</span>
                                        ))}
                                    </div>

                                    {/* Feedback */}
                                    <p className="text-gray-300 mb-6 flex-grow">"{f.feedback}"</p>

                                    {/* User info */}
                                    <div className="flex items-center gap-4">
                                        <img src={f.image} alt="" />
                                        <div className="text-left">
                                            <p className="font-semibold">{f.name}</p>
                                            <p className="text-gray-400 text-sm">{f.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>

        </section>
    );
}
