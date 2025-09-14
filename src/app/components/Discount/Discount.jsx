import React from 'react'

export default function Discount() {
    return (
        <div className='lg:max-w-[1440px] mx-auto'>
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
        </div>
    )
}
