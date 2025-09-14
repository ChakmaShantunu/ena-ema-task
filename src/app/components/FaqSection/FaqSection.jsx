"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function FaqSection() {
    const faqData = [
        { question: "How long does it take?", answer: "5 days from start to finish - design, development, and deployment included." },
        { question: "Do you provide revisions?", answer: "Yes, unlimited revisions until you're 100% satisfied with the final result." },
        { question: "What's the payment process?", answer: "50% upfront to get started, 50% after final delivery and your approval." },
        { question: "Can you deploy on my hosting?", answer: "Absolutely! Deployment is included in every package, on your hosting or ours." },
        { question: "Why are your prices so affordable compared to agencies?", answer: "We run lean without big overheads - you get the same agency-level quality at a fraction of the cost." },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="py-32 bg-[#1827228a] text-accent">
            <div className='w-11/12 md:max-w-4xl lg:max-w-6xl mx-auto'>

                {/* Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={fadeUp}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl lg:text-5xl manrope font-medium">
                        Got Questions<span className='text-secondary'>?</span> We’ve Got The Answers
                    </h2>
                </motion.div>

                {/* Accordion */}
                <div className='space-y-6 px-4 md:px-0'>
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={fadeUp}
                            className="collapse bg-primary"
                        >
                            <input type="radio" name="my-accordion-1" defaultChecked />

                            <div className="collapse-title font-semibold">
                                <div className="w-2 h-2 rounded-full bg-secondary mb-3"></div>
                                <span className='manrope font-bold text-lg sm:text-xl lg:text-2xl text-accent'>{faq.question}</span>
                            </div>

                            <div className="collapse-content text-sm text-accent-content general-sans">
                                {faq.answer}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
