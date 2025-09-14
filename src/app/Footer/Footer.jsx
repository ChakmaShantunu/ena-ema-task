import React from 'react'

export default function Footer() {
    return (
        <div className='bg-secondary'>
            <div className='flex md:flex-row justify-between items-center gap-6 md:gap-0 py-8 md:py-16 w-11/12 mx-auto'>

                {/* Logo */}
                <img src="images/logo.png" alt="Logo" className="w-24 md:w-32" />

                {/* Text */}
                <p className='general-sans text-xs md:text-sm text-[#0a0f0d] text-center md:text-left hidden md:block'>
                    © All rights reserved to Ena Ema Technologies
                </p>
                <div className='ml-12'>
                    <div className='md:hidden ml-8 mb-2'>
                        <p className='general-sans text-xs md:text-sm text-[#0a0f0d] text-center md:text-left'>
                            © All rights reserved to <br /> Ena Ema Technologies
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className='flex gap-4 items-center'>
                        <img src="images/linkedin.png" alt="LinkedIn" className="w-5 md:w-6" />
                        <img src="images/facebook.png" alt="Facebook" className="w-5 md:w-6" />
                        <img src="images/insta.png" alt="Instagram" className="w-5 md:w-6" />
                        <img src="images/be.png" alt="Behance" className="w-5 md:w-6" />
                        <img src="images/port.png" alt="Portfolio" className="w-5 md:w-6" />
                    </div>
                </div>
            </div>
        </div>

    )
}
