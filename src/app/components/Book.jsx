import React from "react";
import Img1 from "../../public/images/Contextual.png"
import Img2 from "../../public/images/Adaptive_logic.png"
import Img3 from "../../public/images/Autonomous.png"



export default function IntelligenceBeyondAutomation() {
    return (
        <div className="bg-white w-full py-4">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-4">
                {/* Left Section */}
                <div className="space-y-14 ">
                    <div>
                        <h1 className="text-4xl font-bold">
                            Because intelligence deserves more than automation.
                        </h1>
                    </div>
                    <div className="space-y-4">
                        <p className="max-w-md">
                            Saysri’s Agentic AI goes beyond rules — it understands, reasons, and acts autonomously across your enterprise.
                        </p>
                        <button className="bg-black border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition hover:cursor-pointer hover:border-black">
                            BOOK A DEMO
                        </button>
                    </div>
                </div>

                {/* Right Section - Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black p-6 rounded-l-xl text-white text-center flex flex-col items-center justify-center">
                        <div className="p-3 rounded-md mb-4 flex justify-center items-center">
                            <img src={Img1.src} alt="AI Context Illustration" className="h-12 w-12" />
                        </div>
                        <h6 className="font-bold">Contextual Reasoning</h6>
                        <p className="text-gray-300 mt-2 text-center">
                            Understands data and intent beyond commands.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-black p-6 rounded-r-xl text-white flex flex-col items-start justify-center">
                            <div className="p-3 rounded-md mb-4 ">
                                <img src={Img2.src} alt="AI Context Illustration" className="h-12 w-12" />
                            </div>
                            <h6 className="font-bold">Adaptive Logic</h6>
                            <p className="mt-2">
                            Learns continuously and refines every decision.
                            </p>
                        </div>
                        <div className="bg-black p-6 rounded-r-xl text-white flex flex-col items-start justify-center">
                            <div className="p-3 rounded-md mb-4 flex justify-center items-center">
                                <img src={Img3.src} alt="AI Context Illustration" className="h-12 w-12" />
                            </div>
                            <h6 className="font-bold">Autonomous Orchestration</h6>
                            <p className=" mt-2">
                                Executes complex workflows with precision and transparency.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
