import React from 'react';
import GlobeImg from '../../public/images/hero-img.png'
import BgImg from '../../public/images/BgIMG.png'

const ExperienceAI = () => {
    return (
        <section
            className="bg-black w-full bg-no-repeat bg-right bg-cover flex items-center justify-center py-45"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BgImg.src})`}}
        >
            <div className="text-white flex flex-col justify-center items-center container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between w-full">

                    {/* Left Content Section */}
                    <div className="w-full md:w-full text-center md:text-left">
                        <h1 className="font-bold mb-4 bg-gradient-to-r from-[#CBF0D1] to-[#FFE1C6] text-transparent bg-clip-text text-4xl md:text-5xl">
                            Experience Human-Centered AI
                        </h1>
                        <p className="mb-8 text-lg md:text-xl">
                            Unlock next-gen opportunities with AI that makes hiring human again.
                        </p>
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
                            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition hover:cursor-pointer">
                                BOOK A FREE DEMO
                            </button>
                            <button className="bg-transparent border-transparent border-2 hover:border-white text-white px-6 py-3 rounded-xl font-bold transition hover:cursor-pointer">
                                TALK TO OUR TEAM {String.fromCharCode(8594)}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default ExperienceAI;
