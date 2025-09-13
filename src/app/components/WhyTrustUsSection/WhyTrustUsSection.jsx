import React from 'react'

export default function WhyTrustUsSection() {
    const services = [
        {
            "logo": "/images/framework.png",
            "title": "Proven Conversion Framework",
            "description": "Designs based on 100+ tested layouts that actually convert visitors into customers."
        },
        {
            "logo": "/images/design.png",
            "title": "Agency Level Design",
            "description": "Modern, premium, and tailored for your brand - without the agency price tag."
        },
        {
            "logo": "/images/delivery.png",
            "title": "5-day Guaranteed Delivery",
            "description": "With a highly professional team, we deliver on time, everytime."
        },
        {
            "logo": "/images/pricing.png",
            "title": "Transparent Pricing",
            "description": "No hidden fees, just clear value. What you see is what you pay."
        },
        {
            "logo": "/images/revisions.png",
            "title": "Revisions Until You're Happy",
            "description": "We keep working until it's right. Your satisfaction is guaranteed."
        },
        {
            "logo": "/images/speak.png",
            "title": "Results That Speak",
            "description": "Our pages consistently outperform industry averages for conversions."
        }
    ]

    return (
        <div className='mt-12 md:mt-24 lg:mt-36'>
            <div className='space-y-8 mx-[10px] md:mx-[160px]'>
                <h1 className='text-4xl lg:text-5xl text-center manrope font-medium text-accent'>Why Businesses <span className='text-secondary'>Trust Us</span> With Their Designs</h1>
                <p className='lg:text-base text-center general-sans text-accent'>We combine proven conversion frameworks with agency-level design to deliver results that matter.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-9 mt-12 lg:mt-36 lg:pb-32 max-w-11/12 mx-auto'>
                {
                    services.map((service, index) => {
                        return (
                            <div key={index} className="bg-primary card-xl shadow-sm rounded-lg w-full md:w-auto">
                                <div className="py-8 px-6">
                                    <img src={service.logo} alt="" />
                                    <h2 className='text-base text-accent font-medium mt-6 mb-3'>{service.title}</h2>
                                    <p className='text-accent-content text-sm'>{service.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
