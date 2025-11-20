import React from 'react';
import TrustImg from "../../public/images/Trusted.png"


export default function TrustSlider() {
    return (
        <div className='bg-[#2A2622] w-full'>
            <div className="w-full mx-auto container mt-16 pt-8 flex flex-col items-center gap-12">
                <div className="relative w-full text-center">
                    <hr className="border-1 border-white" />
                    <p className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2A2622] px-8 text-white font-semibold">
                        Trusted by fast-growing startups and enterprises across industries.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    <img src={TrustImg.src} alt="Cengage" className="h-full w-7xl cover" />
                </div>
            </div>
        </div>
    );
}