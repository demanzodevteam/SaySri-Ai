"use client"
import { gsapAnimations } from "../Animation/Animations";
import TrustImg from "../../../public/images/Trusted.png"

export default function TrustSlider() {
    gsapAnimations();
    return (

        <div className="bg-[#2A2622] w-full">
            <div className="w-full mx-auto container mt-10 md:mt-16 pt-6 md:pt-8 flex flex-col items-center gap-10 ">

                {/* Title */}
                <div className="relative w-full text-center px-4 fade-up">
                    <hr className="border border-white" />
                    <p className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                        bg-[#2A2622] px-4 md:px-8 text-white font-semibold text-sm md:text-base ">
                        Trusted by fast-growing startups and enterprises across industries.
                    </p>
                </div>

                {/* Carousel */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4 fade-up">
                    <img
                        src={TrustImg.src}
                        alt="Cengage"
                        className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                    />
                </div>

            </div>
        </div>
    );
}
