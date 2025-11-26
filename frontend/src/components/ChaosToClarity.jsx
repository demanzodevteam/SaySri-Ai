"use client"
import React from "react";
import VibraHireLogo from "../../public/images/VibraHireLogo.png"
import StarsLogo from "../../public/images/Stars.png"
import Star2Logo from "../../public/images/Star2.png"
import Dashboard1Logo from "../../public/images/Dashboard1.png"
import DashboardLogo from "../../public/images/Dashboard.png"
import { gsapAnimations } from "./Animation/Animations";

export default function ChaosToClarity() {
    gsapAnimations();
    const features = [
        {
            title: "Azure Native",
            icon: StarsLogo.src,
        },
        {
            title: "API-First Design",
            icon: Star2Logo.src,
        },
        {
            title: "Scalable Framework",
            icon: Dashboard1Logo.src,
        },
        {
            title: "Seamless Integration",
            icon: DashboardLogo.src,
        },
    ];

    return (
        <div className="bg-black w-full text-white">
            <div className="mx-auto container text-center space-y-6">
                <h1 className="mb-4 fade-up">From Chaos to Clarity</h1>
                <p className="mb-16 max-w-lg mx-auto fade-up">
                    Imagine a hiring process that runs like your best recruiter — efficient, intuitive, and always learning.
                </p>
                <div className="mb-12">
                    <div className="relative w-full fade-up">
                        <hr className="border-1 border-gray-400" />
                        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white flex flex-col lg:flex-row items-center text-center gap-2 md:gap-6 px-12 w-sm lg:w-4xl">
                            <p>That's</p> <img src={VibraHireLogo.src} alt="" className="inline-block" />  <p>An AI partner that doesn't just help you hire faster, but helps you hire smarter.</p>
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto mt-26 fade-scale">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-black p-10 rounded-2xl border border-[#08A045] text-center flex flex-col items-center gap-4 hover:shadow-[0px_7px_50px_0px_#03AC13] transition-all duration-600"
                        >
                            <img src={feature.icon} alt="" className=""/>
                            <p className="w-[80px]">{feature.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
