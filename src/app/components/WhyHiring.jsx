import React from "react";
import ConeImg from "../../../public/images/Cubecone.webp"
import PaperImg from '../../../public/images/Paper.png'


export default function WhyHiring() {
  return (
    <div className="bg-black w-full">
      <div className="mx-auto container">
        <div className="text-center mb-12">
          <h1 className="font-bold mb-4 bg-gradient-to-r from-[#CBF0D1] to-[#FFE1C6] text-transparent bg-clip-text">
            Why Hiring Feels Broken Today
          </h1>
          <p className="text-white max-w-2xl mx-auto">
            Hiring used to be about people. Now it's about sifting through piles of data.  Recruiters are overwhelmed, candidates are ghosted, and good talent slips away.          </p>
        </div>  

        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl">
        
                            {/* Left Content Section */}
                            <div className="w-full md:w-1/2 p-4 flex flex-col">
                                <div className='text-[#979797] hover:text-white all ease-in-out duration-100'>
                                  <h5 className="font-bold mb-3">
                                   Resume Chaos. Saysri Brings Clarity.
                                </h5>
                                <p className="mb-8 max-w-md">
                                    From recruitment to business intelligence, Saysri.ai builds AI agents that adapt to your enterprise and execute with precision.</p>
                                </div>
                                <div className='text-[#979797] hover:text-white all ease-in-out duration-100'>
                                  <h5 className="font-bold mb-3">
                                   Biased Screening. Saysri Ensures Fairness.
                                </h5>
                                <p className="mb-8 max-w-md">
                                    Human judgment often overlooks potential. Our Smart Candidate Screening applies unbiased logic for consistent results.</p>
                                </div>
                                <div className='text-[#979797] hover:text-white all ease-in-out duration-100'>
                                  <h5 className="font-bold mb-3">
                                   Manual Hiring. Saysri Automates It.
                                </h5>
                                <p className="mb-8 max-w-md">
                                    Traditional hiring workflows break under pressure. Automated Hiring Filter brings speed and accuracy through AI-driven automation.</p>
                                </div>
        
                            </div>
        
                            {/* Right Image Section */}
                            <div className="w-full md:w-1/2 p-4 relative">
                                <div className="w-full h-64 md:h-106 flex justify-center items-center">
                                    <img src={PaperImg.src} alt="" />
                                </div>
                            </div>
                        </div>  
      </div>
    </div>
  );
}
