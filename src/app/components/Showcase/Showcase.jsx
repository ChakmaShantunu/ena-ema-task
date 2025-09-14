"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Showcase() {
    // fade-up animation variant
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <motion.div
            className="flex justify-center items-center mt-12 md:mt-24 lg:mt-36 gap-4 w-full overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }} // stagger between images
        >
            <motion.img
                src="/images/website1.png"
                alt="Website 1"
                className="w-full lg:w-[942px] rounded-2xl"
                variants={fadeUp}
            />
            <motion.img
                src="/images/website2.png"
                alt="Website 2"
                className="w-full lg:w-[942px] rounded-2xl"
                variants={fadeUp}
            />
        </motion.div>
    );
}
