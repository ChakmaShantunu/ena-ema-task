import React from 'react'

export default function Discount() {
    return (
        <div className='lg:max-w-[1440px] mx-auto px-4 lg:px-0'>
            <div className='flex items-center my-12'>
                <div className=''>
                    <img src="images/delivery.png" alt="" />
                </div>
                <div className='ml-4 space-y-2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-accent'>
                        Limited Availability
                    </h1>
                    <p className='text-accent text-sm md:text-base'>
                        We only onboard 5 new clients per month. 2 spots left for this month — secure yours today.
                    </p>
                </div>
            </div>
            <div className="bg-primary mb-32 shadow-sm rounded-2xl">
                <div className='flex justify-center items-center'>
                    <div className='py-6 md:py-8 lg:py-12 px-4 md:px-8 lg:px-16 text-center'>

                        {/* Headline */}
                        <h1 className='text-xl md:text-3xl lg:text-5xl text-accent manrope'>
                            Special Offer For Early Clients
                        </h1>

                        {/* Description */}
                        <p className='text-accent mt-2 mb-6 md:mt-4 md:mb-10 lg:mt-2 lg:mb-12 general-sans'>
                            Get 10% OFF + Free Hosting Setup when you book this week.
                        </p>

                        {/* Button */}
                        <div className="flex justify-center items-center">
                            <button
                                className="px-12 h-[54px] bg-gradient-to-b from-[#1fffa5] to-[#ffffffd5] text-[#002013] font-medium rounded flex items-center justify-center gap-2 shadow-[inset_0_0_12px_#1fffa540,0_4px_12px_#ffffff80] transition-all duration-300 ease-in-out hover:shadow-[inset_0_0_18px_#1fffa540,0_6px_16px_#ffffff80] hover:scale-[1.02]">
                                Claim my 10% discount
                                <span>
                                    <img src="/images/arrow.png" alt="" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
