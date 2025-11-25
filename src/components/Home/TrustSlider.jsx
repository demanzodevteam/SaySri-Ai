"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TrustImg from "../../../public/images/Trusted.png"

gsap.registerPlugin(ScrollTrigger);


export default function TrustSlider() {
    const fadeUpRef = useRef(null);
        useEffect(() => {
            if (!fadeUpRef.current) return;
    
            gsap.fromTo(
                fadeUpRef.current,
                { autoAlpha: 0, y: 40 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: fadeUpRef.current,
                        start: "top 80%",
                        toggleActions: "restart pause none reset",
                    },
                }
            );
        }, []);
    return (

        <div className="bg-[#2A2622] w-full">
            <div className="w-full mx-auto container mt-10 md:mt-16 pt-6 md:pt-8 flex flex-col items-center gap-10" ref={fadeUpRef}>

                {/* Title */}
                <div className="relative w-full text-center px-4">
                    <hr className="border border-white" />
                    <p className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                        bg-[#2A2622] px-4 md:px-8 text-white font-semibold text-sm md:text-base">
                        Trusted by fast-growing startups and enterprises across industries.
                    </p>
                </div>

                {/* Carousel */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4">
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
