import { motion } from "framer-motion";
export default function CustomCard() {
    const textVariants = {
        initial: { y: 0, opacity: 1 },
        hover: {
            y: [-0, -5, 5, 0],
            opacity: [1, 0, 0, 1],

        }
    };
    return (
        <div className="mx-4">
            <div className="max-w-[794px] w-full rounded-lg border border-[#2a3c38] shadow-[0_1px_25px_#1fffa51A] py-8 px-6 bg-neutral mx-auto mt-12 md:px-0">
                <div>
                    {/* Inputs */}
                    <div className="flex flex-wrap justify-center items-center gap-3 mb-3">
                        <div className="flex items-center flex-1 min-w-[220px] h-[54px] rounded px-3 border border-[#2a3c38]">
                            <span className="mr-2">
                                <img src="/images/user.png" alt="" />
                            </span>
                            <input
                                type="text"
                                placeholder="Name"
                                className="general-sans w-full h-full outline-none text-accent-content"
                            />
                        </div>
                        <div className="flex items-center flex-1 min-w-[220px] h-[54px] rounded px-3 border border-[#2a3c38]">
                            <span className="mr-2">
                                <img src="/images/EnvelopeSimpleOpen.png" alt="" />
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="general-sans w-full h-full outline-none text-accent-content"
                            />
                        </div>
                        <div className="flex items-center flex-1 min-w-[220px] h-[54px] rounded px-3 border border-[#2a3c38]">
                            <span className="mr-2">
                                <img src="/images/phone.png" alt="" />
                            </span>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="general-sans w-full h-full outline-none text-accent-content"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center items-center">
                        <motion.button
                            initial="initial"
                            whileHover="hover"
                            className="general-sans w-full h-[54px] bg-gradient-to-b from-[#1fffa5] to-[#ffffffd5] text-[#002013] font-medium rounded flex items-center justify-center gap-2 shadow-[inset_0_0_12px_#1fffa540,0_4px_12px_#ffffff80] transition-all duration-300 ease-in-out hover:shadow-[inset_0_0_18px_#1fffa540,0_6px_16px_#ffffff80] hover:scale-[1.02]">
                            <motion.span
                                variants={textVariants}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >Get my high-converting landing page</motion.span>
                            <motion.span
                                variants={textVariants}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <img src="/images/arrow.png" alt="" />
                            </motion.span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}
