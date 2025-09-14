"use client";
import React from 'react';
import { motion } from 'framer-motion';
import CustomCard from '../Hero/customCard/CustomCard';

export default function Visitors() {
    const fadeZoomUp = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className='py-32'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeZoomUp}
                className="max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto text-center"
            >
                <h1 className="text-white mt-6 mb-4 text-4xl md:text-5xl lg:text-7xl manrope font-bold">
                    Ready to Turn Visitors Into <span className='text-secondary'>Real Customers?</span>
                </h1>
                <p className="text-[#f5f5f5] md:max-w-6/12 lg:max-w-7/12 mx-auto">
                    Don't settle for an average page. Get a premium, conversion-focused landing page that pays for itself.
                </p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeZoomUp}
            >
                <CustomCard />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeZoomUp}
                className="hidden md:block mt-6"
            >
                <div className="flex flex-wrap justify-center place-items-start md:items-center gap-12 mt-3 text-center">
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
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeZoomUp}
                className="block mt-4"
            >
                <div className="grid grid-cols-2 gap-2 md:hidden">
                    <div className="flex items-center justify-center gap-2 mr-16">
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
            </motion.div>
        </div>
    )
}
