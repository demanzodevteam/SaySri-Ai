import React from "react";
import VibraLogo from "../../public/images/VibraHireLogo.png"
import VideoSlider from "../../src/components/VideoSlider"

export default function VibraHeroSection() {
  return (
    <div className="w-full text-white bg-gradient-to-b from-[#000000] to-[#0B6E4F]">
      <div className="py-16 px-4 text-center">
        <div className="flex justify-center mb-4">
          <img
            src={VibraLogo.src}
            alt="VibraHire Logo"
            className=""
          />
        </div>
        <h1 className="font-normal mb-3">The Agentic AI Hiring Partner</h1>
        <p className="">
          Hiring shouldn't feel mechanical. It should feel intelligent.
        </p>
      </div>

      <div className="flex justify-center px-4 mb-6">
        <div className=" w-full bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            {/* <VideoSlider /> */}
        </div>
      </div>
      <div className="py-16 px-4 text-center">
        <div className="mx-auto">
          <p className="mb-8 max-w-2xl mx-auto">
            The AI-powered recruitment automation & ATS platform built for modern hiring teams.
            It's a self-evolving recruitment ecosystem powered by Saysri's Agentic AI.
          </p>

          <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors mb-12">
            BOOK A DEMO
          </button>

          <hr className="text-[#016143] mb-8"/>

          <div className="mx-auto">
            <h2 className="font-normal mb-6">Built for Recruiters Who Think Ahead</h2>

            <div className="mb-6 flex items-center justify-center gap-4">
              <p className="tooltip font-normal text-white">
                Forget filters and forms.
              </p>
              <p className="text-white max-w-lg text-start ">
                VibraHire understands context, intent, and potential, not just keywords.
                It doesn't just find talent — it recognizes alignment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
