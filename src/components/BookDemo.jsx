"use client"
import React from "react";
import HeroImg from "../../public/images/hero-img.png"
import { gsapAnimations } from "./Animation/Animations";


export default function BookDemo() {
    gsapAnimations();
    return (
        <div className="container mx-auto">
            <div className="fade-scale py-20 px-10 md:p-50 bg-black rounded-3xl  bg-center bg-no-repeat bg-contain md:bg-[length:600px_auto]" style={{ backgroundImage: `url(${HeroImg.src})` }}>
                <div className="text-white flex flex-col items-center justify-between mx-auto">
                    <h1 className="mb-4 fade-up">
                        Meet the Future of Hiring.
                    </h1>
                    <p className="mb-4 fade-up">
                        Book a demo and see how VibraHire can transform your talent ecosystem.
                    </p>
                    <button className="fade-up bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                        BOOK A DEMO
                    </button>
                </div>
            </div>
        </div>
    );
}
