import React from "react";
import Img1 from "../../public/images/UnderstandImg.png"
import Img2 from "../../public/images/Precision.png"
import Img3 from "../../public/images/Autonomy.png"
import Img4 from "../../public/images/VideoImg.png"


export default function AgenticIntelligence() {
    return (
        <div className="bg-white w-full">
            <div className="container mx-auto flex items-center justify-center">
                <div className="text-center flex items-center justify-center flex-col">
                    <h1 className="font-bold mb-4 text-center">
                        Our first step toward Agentic Intelligence.
                    </h1>
                    <p className="max-w-2xl mx-auto">
                        Saysri builds Agentic AI that goes beyond logic, understanding context, learning independently, and driving enterprise transformation with purpose.</p>
                </div>

            </div>
            <div className="max-w-4xl mx-auto items-center">
                <div className="space-y-12">
                    {/* First One */}
                    <div className="relative flex justify-center items-center ">
                        <div className="absolute text-[220px] font-bold text-gray-300 opacity-30 select-none">
                            Cognition
                        </div>

                        <div className="relative bg-black text-white px-6 py-6 rounded-2xl max-w-[280px] z-10 text-center space-y-4">
                            <div className="p-3 rounded-md mb-4 flex justify-center items-center">
                                <img src={Img1.src} alt="AI Context Illustration" className="h-14 w-14" />
                            </div>
                            <h6 className="font-bold">Understands context, not just commands.</h6>
                            <p className="text-gray-300 mt-2">
                                Agentic AI that comprehends meaning, emotion, and real intent.
                            </p>
                        </div>
                    </div>
                    {/* Second One */}
                    <div className="relative flex justify-center items-center ">
                        <div className="absolute text-[220px] font-bold text-gray-300 opacity-30 select-none">
                            Precision
                        </div>

                        <div className="relative bg-black text-white px-6 py-6 rounded-2xl max-w-[280px] z-10 text-center space-y-4">
                            <div className="p-3 rounded-md mb-4 flex justify-center items-center">
                                <img src={Img2.src} alt="AI Context Illustration" className="h-14 w-14" />
                            </div>
                            <h6 className="font-bold">Makes decisions with precision.</h6>
                            <p className="text-gray-300 mt-2">
                                Bias-free, data-driven, and adaptable to enterprise logic.
                            </p>
                        </div>
                    </div>
                    {/* Third One */}
                    <div className="relative flex justify-center items-center ">
                        <div className="absolute text-[220px] font-bold text-gray-300 opacity-30 select-none">
                            Adaptive
                        </div>

                        <div className="relative bg-black text-white px-6 py-6 rounded-2xl max-w-[280px] z-10 text-center space-y-4">
                            <div className="p-3 rounded-md mb-4 flex justify-center items-center">
                                <img src={Img3.src} alt="AI Context Illustration" className="h-14 w-14" />
                            </div>
                            <h6 className="font-bold">Acts with autonomy.</h6>
                            <p className="text-gray-300 mt-2">
                                From insights to actions — Saysri’s AI executes with precision and accountability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto items-center mt-14 space-y-4 flex flex-col items-center justify-center border-2 border-white">
                <iframe
                    src="https://www.youtube.com/embed/n2lr1pCHTgs?list=TLGGRTq-ntUF6LExMjExMjAyNQ"
                    title="Saysri Vibrahire - Product Introduction video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-[840px] h-120 rounded-xl border-2 border-white"
                ></iframe>

                <button className="bg-black border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition hover:cursor-pointer hover:border-black">SEE HOW VIBRAHIRE WORKS</button>
            </div>
        </div>
    );
}
