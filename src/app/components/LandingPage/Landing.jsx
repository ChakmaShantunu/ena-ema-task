// Section.jsx
import { FaLaptopCode, FaUsers, FaRocket } from 'react-icons/fa';

export default function Section() {
    const cards = [
        {
            day: 'Day 1',
            "logo": "/images/User2.png",
            "title": "Book Your Project",
            "description": "Fill out a short form and we'll get started immediately."
        },
        {
            day: 'Day 2-4',
            "logo": "/images/design.png",
            title: 'Design & Development',
            description: "Unlimited revisions until perfect. You're involved every step.",
        },
        {
            day: 'Day 5',
            "logo": "/images/framework.png",
            title: 'Launch',
            description: 'Fully deployed on your hosting and ready to convert visitors.',
        },
    ];

    return (
        <section className="py-32 bg-[#1827228a] text-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-5xl font-medium mb-4 manrope">From Idea to Live Landing Page in <span className='text-secondary'>Just 5 Days</span></h2>
                <p className="text-accent mb-12 text-base">Our streamlined process ensures fast delivery without compromising quality.</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-[#192420] rounded-xl p-12 relative transition transform duration-300 ease-in-out hover:scale-105">
                            <div className="flex justify-center mb-4">
                                <div className="bg-[#003d25] rounded-full w-20 h-20 flex items-center justify-center">
                                    <img src={card.logo} alt="" />
                                </div>
                            </div>
                            <div className='lg:mt-9'>
                                <h3 className="text-xl font-semibold mb-2  general-sans">{card.title}</h3>
                                <p className="text-gray-400 general-sans">{card.description}</p>
                                <span className="absolute lg:-top-3 left-1/2 -translate-x-1/2 
                             bg-primary border border-secondary text-accent text-xs md:text-sm 
                             font-semibold px-3 py-1 rounded-full">{card.day}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
