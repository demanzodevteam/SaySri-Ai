import React from "react";
import HeroImg from "../../public/images/hero-img.png"

export default function BookDemo() {
    return (
        <div className="container mx-auto">
            <div className="p-50 bg-black rounded-3xl  bg-center bg-no-repeat bg-[length:600px_auto]" style={{ backgroundImage: `url(${HeroImg.src})` }}>
                <div className="text-white  flex flex-col items-center justify-between mx-auto">
                    <h1 className="mb-4">
                        Meet the Future of Hiring.
                    </h1>
                    <p className="mb-4">
                        Book a demo and see how VibraHire can transform your talent ecosystem.
                    </p>
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                        BOOK A DEMO
                    </button>
                </div>
            </div>
        </div>
    );
}
