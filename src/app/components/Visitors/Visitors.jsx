import React from 'react'
import CustomCard from '../Hero/customCard/CustomCard'

export default function Visitors() {
    return (
        <div className='py-32'>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-white mt-6 mb-4 text-xl md:text-4xl lg:text-7xl text-center manrope font-bold">Ready to Turn Visitors Into <span className='text-secondary'>Real Customers?</span></h1>
                <p className="text-center text-[#f5f5f5] md:max-w-6/12 lg:max-w-7/12 mx-auto">Don't settle for an average page. Get a premium, conversion-focused landing page that pays for itself.</p>
            </div>

            <CustomCard></CustomCard>
            <div className="flex flex-wrap justify-center items-center gap-12 mt-3 text-center">
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
        </div>
    )
}
