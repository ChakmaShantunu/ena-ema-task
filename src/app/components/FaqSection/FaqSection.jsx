import React from 'react'

export default function FaqSection() {
    return (
        <div>
            <div className="py-32 bg-[#1827228a] text-accent">
                <div className='w-11/12 md:max-w-4xl lg:max-w-6xl mx-auto'>
                    {/* List Description */}
                    <div className="mb-4 text-center">
                        <h2 className="text-4xl text-center lg:text-5xl text-accent manrope font-medium mb-12">Got Questions<span className='text-secondary'>?</span>  We’ve Got The Answers</h2>
                    </div>

                    <div className='space-y-6 px-4 md:px-0'>
                        <div className="collapse bg-primary">
                            <input type="radio" name="my-accordion-1" defaultChecked />

                            {/* Title + Circle in one row */}
                            <div className="collapse-title font-semibold">
                                <div className="w-2 h-2 rounded-full bg-secondary mb-3"></div>
                                <span className='manrope font-bold text-lg sm:text-xl lg:text-2xl text-accent'>How long does it take?</span>

                            </div>

                            <div className="collapse-content text-sm text-accent-content general-sans">
                                5 days from start to finish - design, development, and deployment included.
                            </div>
                        </div>
                        <div className="collapse bg-primary">
                            <input type="radio" name="my-accordion-1" defaultChecked />

                            {/* Title + Circle in one row */}
                            <div className="collapse-title font-semibold">
                                <div className="w-2 h-2 rounded-full bg-secondary mb-3"></div>
                                <span className='manrope font-bold text-lg sm:text-xl lg:text-2xl text-accent'>Do you provide revisions?</span>

                            </div>

                            <div className="collapse-content text-sm text-accent-content general-sans">
                                Yes, unlimited revisions until you're 100% satisfied with the final result.
                            </div>
                        </div>
                        <div className="collapse bg-primary">
                            <input type="radio" name="my-accordion-1" defaultChecked />

                            {/* Title + Circle in one row */}
                            <div className="collapse-title font-semibold">
                                <div className="w-2 h-2 rounded-full bg-secondary mb-3"></div>
                                <span className='manrope font-bold text-lg sm:text-xl lg:text-2xl text-accent'>What's the payment process?</span>

                            </div>

                            <div className="collapse-content text-sm text-accent-content general-sans">
                                50% upfront to get started, 50% after final delivery and your approval.
                            </div>
                        </div>
                        <div className="collapse bg-primary">
                            <input type="radio" name="my-accordion-1" defaultChecked />

                            {/* Title + Circle in one row */}
                            <div className="collapse-title font-semibold">
                                <div className="w-2 h-2 rounded-full bg-secondary mb-3"></div>
                                <span className='manrope font-bold text-lg sm:text-xl lg:text-2xl text-accent'>Can you deploy on my hosting?</span>

                            </div>

                            <div className="collapse-content text-sm text-accent-content general-sans">
                                Absolutely! Deployment is included in every package, on your hosting or ours.
                            </div>
                        </div>
                        <div className="collapse bg-primary">
                            <input type="radio" name="my-accordion-1" defaultChecked />

                            {/* Title + Circle in one row */}
                            <div className="collapse-title font-semibold">
                                <div className="w-2 h-2 rounded-full bg-secondary mb-3"></div>
                                <span className='manrope font-bold text-lg sm:text-xl lg:text-2xl text-accent'>Why are your prices so affordable compared to agencies?</span>

                            </div>

                            <div className="collapse-content text-sm text-accent-content general-sans">
                                We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
