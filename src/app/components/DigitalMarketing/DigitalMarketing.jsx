"use client"
import React from "react";
import { motion } from 'framer-motion';

const App = () => {
    const fadeZoomUp = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };
    return (
        <div className="grid lg:grid-cols-3 gap-4 bg-accent pt-42 pb-52 mx-auto overflow-hidden">

            {/* Left side */}
            <div className="space-y-12 text-sm relative">
                <div className="absolute top-1/4 left-2/5">
                    <p className="border border-black p-2 max-w-[349px]">Researching and writing relevant, semantically tagged articles that readers will find interesting, useful and share, hence bettering your company’s position on the internet.</p>
                </div>
                <div className="relative">
                    <div className="absolute top-86 left-[410px]">
                        <img src="/images/Arrow.png" alt="" className="-rotate-90" />
                    </div>
                    <div className="absolute top-89 left-4/6 w-52 h-0.5 bg-black"></div>
                    <div className="absolute top-89 left-full w-0.5 h-6 bg-black"></div>
                </div>
                <div className="absolute top-96 left-1/5">
                    <p className="border border-black p-2 max-w-[349px]">Researching and writing relevant, semantically tagged articles that readers will find interesting, useful and share, hence bettering your company’s position on the internet.</p>
                </div>
                <div className="relative top-32 -left-17">
                    <div className="absolute top-86 left-[410px]">
                        <img src="/images/Arrow.png" alt="" className="-rotate-90" />
                    </div>
                    <div className="absolute top-89 left-4/6 w-52 h-0.5 bg-black"></div>
                    {/* <div className="absolute top-89 left-full w-0.5 h-6 bg-black"></div> */}
                </div>
                <div className="absolute top-9/12 left-1/5">
                    <p className="border border-black p-2 max-w-[349px]">Researching and writing relevant, semantically tagged articles that readers will find interesting, useful and share, hence bettering your company’s position on the internet.</p>
                </div>
                <div className="relative top-60 -left-17">
                    <div className="absolute top-89 left-[410px]">
                        <img src="/images/Arrow.png" alt="" className="rotate-90" />
                    </div>
                    <div className="absolute top-89 left-4/6 w-82 h-0.5 bg-black"></div>
                    <div className="absolute top-89 left-[742px] w-0.5 h-6 bg-black"></div>
                </div>
                <div className="absolute top-11/12 left-5/12">
                    <p className="border border-black p-2 max-w-[349px]">Researching and writing relevant, semantically tagged articles that readers will find interesting, useful and share, hence bettering your company’s position on the internet.</p>
                </div>
                <div className="relative top-[590px] left-28">
                    <div className="absolute top-78 left-[412px]">
                        <img src="/images/Arrow 1.png" alt="" className="" />
                    </div>
                    <div className="absolute top-89 left-4/6 w-96 h-0.5 bg-black"></div>
                    <div className="absolute top-65 left-[798px] w-0.5 h-24 bg-black"></div>
                </div>
            </div>

            {/* MIddle side */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeZoomUp}
                className="bg-gray-100 py-10 min-h-screen">
                <div className="space-y-4">
                    <h1 className="text-center text-5xl font-bold">
                        Digital Marketing Overview
                    </h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur. Fringilla mauris vel felis vitae. Id quisque urna sed eget facilisi. Nulla pretium odio dictumst aliquet.</p>
                </div>

                {/* Circle Container */}
                <div
                    className="relative w-[500px] h-[500px] mx-auto border-4 border-black rounded-full mt-32">
                    {/* Center Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full flex items-center justify-center text-center font-bold text-black">
                        Digital Marketing
                    </div>

                    {/* Google Ads */}
                    <div className="absolute w-[120px] h-[120px] rounded-full bg-[#71c6bf] flex items-center justify-center top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 rounded-full bg-black text-white text-2xl flex items-center justify-center shadow-md">
                            📈
                        </div>
                    </div>
                    <div className="absolute text-sm font-medium text-gray-800 whitespace-nowrap top-[-18%] left-1/2 -translate-x-1/2">
                        Google Ads
                    </div>

                    {/* Facebook */}
                    <div className="absolute w-[120px] h-[120px] rounded-full bg-[#71c6bf] flex items-center justify-center top-[20%] left-[85%] -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 rounded-full bg-black text-white text-2xl flex items-center justify-center shadow-md">
                            📘
                        </div>
                    </div>
                    <div className="absolute text-sm font-medium text-gray-800 top-[15%] left-[100%]">
                        Facebook
                    </div>

                    {/* Video */}
                    <div className="absolute w-[120px] h-[120px] rounded-full bg-[#71c6bf] flex items-center justify-center top-1/2 left-full -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 rounded-full bg-black text-white text-2xl flex items-center justify-center shadow-md">
                            🎥
                        </div>
                    </div>
                    <div className="absolute text-sm font-medium text-gray-800 top-1/2 left-[115%]">
                        Video
                    </div>

                    {/* Content Writing */}
                    <div className="absolute w-[120px] h-[120px] rounded-full bg-[#71c6bf] flex items-center justify-center top-[80%] left-[85%] -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 rounded-full bg-black text-white text-2xl flex items-center justify-center shadow-md">
                            ✍️
                        </div>
                    </div>
                    <div className="absolute text-sm font-medium text-gray-800 top-[80%] left-[100%]">
                        Content Writing
                    </div>

                    {/* Graphic Design */}
                    <div className="absolute w-[120px] h-[120px] rounded-full bg-[#71c6bf] flex items-center justify-center top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 rounded-full bg-black text-white text-2xl flex items-center justify-center shadow-md">
                            🖼️
                        </div>
                    </div>
                    <div className="absolute text-sm font-medium text-gray-800 top-[115%] left-1/2 -translate-x-1/2">
                        Graphic Design
                    </div>

                    {/* SEO */}
                    <div className="absolute w-[120px] h-[120px] rounded-full bg-[#71c6bf] flex items-center justify-center top-[80%] left-[12%] -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 rounded-full bg-black text-white text-2xl flex items-center justify-center shadow-md">
                            🔍
                        </div>
                    </div>
                    <div className="absolute text-sm font-medium text-gray-800 top-[80%] -left-[8%]">
                        SEO
                    </div>

                    {/* TikTok */}
                    <div className="absolute w-[120px] h-[120px] rounded-full bg-[#71c6bf] flex items-center justify-center top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 rounded-full bg-black text-white text-2xl flex items-center justify-center shadow-md">
                            📱
                        </div>
                    </div>
                    <div className="absolute text-sm font-medium text-gray-800 top-1/2 left-[-23%]">
                        TikTok
                    </div>

                    {/* LinkedIn */}
                    <div className="absolute w-[120px] h-[120px] rounded-full bg-[#71c6bf] flex items-center justify-center top-[20%] left-[15%] -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 rounded-full bg-black text-white text-2xl flex items-center justify-center shadow-md">
                            💼
                        </div>
                    </div>
                    <div className="absolute text-sm font-medium text-gray-800 top-[20%] left-[-10%]">
                        LinkedIn
                    </div>

                </div>
            </motion.div>

            {/* Right Side */}
            <div className="space-y-12 text-sm relative">
                <div className="relative -top-29 right-96">
                    <div className="absolute top-69 left-[408px]">
                        <img src="/images/Arrow.png" alt="" className="rotate-90" />
                    </div>
                    <div className="absolute top-69 left-1/12 w-91 h-0.5 bg-black"></div>
                    <div className="absolute top-69 left-13 w-0.5 h-6 bg-black"></div>
                </div>
                <div className="absolute top-44 -left-32">
                    <p className="border border-black p-2 max-w-[349px]">Researching and writing relevant, semantically tagged articles that readers will find interesting, useful and share, hence bettering your company’s position on the internet.</p>
                </div>

                <div className="relative -top-6 right-26">
                    <div className="absolute top-69 left-[408px]">
                        <img src="/images/Arrow.png" alt="" className="rotate-90" />
                    </div>
                    <div className="absolute top-69 left-1/12 w-91 h-0.5 bg-black"></div>
                    <div className="absolute top-69 left-13 w-0.5 h-6 bg-black"></div>
                </div>
                <div className="absolute top-80 left-1/5">
                    <p className="border border-black p-2 max-w-[349px]">Researching and writing relevant, semantically tagged articles that readers will find interesting, useful and share, hence bettering your company’s position on the internet.</p>
                </div>

                <div className="relative top-48 right-8">
                    <div className="absolute top-69 left-[408px]">
                        <img src="/images/Arrow.png" alt="" className="rotate-90" />
                    </div>
                    <div className="absolute top-69 left-1/12 w-91 h-0.5 bg-black"></div>
                    {/* <div className="absolute top-69 left-13 w-0.5 h-6 bg-black"></div> */}
                </div>
                <div className="absolute top-7/12 left-[208px]">
                    <p className="border border-black p-2 max-w-[349px]">Researching and writing relevant, semantically tagged articles that readers will find interesting, useful and share, hence bettering your company’s position on the internet.</p>
                </div>

                <div className="relative top-[545px] right-32">
                    <div className="absolute top-66 left-[408px]">
                        <img src="/images/Arrow.png" alt="" className="-rotate-90" />
                    </div>
                    <div className="absolute top-69 left-1/12 w-91 h-0.5 bg-black"></div>
                    <div className="absolute top-37 left-13 w-0.5 h-32 bg-black"></div>
                </div>
                <div className="absolute top-10/12 left-2/12">
                    <p className="border border-black p-2 max-w-[349px]">Researching and writing relevant, semantically tagged articles that readers will find interesting, useful and share, hence bettering your company’s position on the internet.</p>
                </div>

            </div>
        </div>
    );
};

export default App;
