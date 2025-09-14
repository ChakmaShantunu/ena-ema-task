"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUs() {
    const feedbacks = [
        {
            name: "John Doe",
            position: "Frontend Developer",
            image: "/images/user1.jpg",
            rating: 5,
            feedback: "This course completely changed the way I approach projects. Highly recommended!",
        },
        {
            name: "Jane Smith",
            position: "UI/UX Designer",
            image: "/images/user2.jpg",
            rating: 5,
            feedback: "Amazing content and very practical. I loved every part of it.",
        },
        {
            name: "Alice Johnson",
            position: "Project Manager",
            image: "/images/user3.jpg",
            rating: 5,
            feedback: "Clear explanation and structured approach. Great learning experience.",
        },
        {
            name: "Bob Williams",
            position: "Backend Developer",
            image: "/images/user4.jpg",
            rating: 5,
            feedback: "Hands-on examples made it very easy to understand complex topics.",
        },
    ];

    const settings = {
        dots: false,
        infinite: false,        
        speed: 500,
        slidesToShow: 4,          
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        swipeToSlide: true,
        centerMode: true,        
        centerPadding: "70px", 
        rlt: true,    
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "50px" } },
            { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "30px" } },
        ],
    };


    return (
        <section className="py-16 bg-[#1827228a] text-white">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="max-w-[1440px] mx-auto">
                    <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
                    <p className="text-gray-400 mb-12">
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
                                            <span key={i} className="text-yellow-400 text-lg">★</span>
                                        ))}
                                        {Array.from({ length: 5 - f.rating }).map((_, i) => (
                                            <span key={i} className="text-gray-600 text-lg">★</span>
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
