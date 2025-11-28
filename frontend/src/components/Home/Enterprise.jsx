import React from 'react';
import GlobeImg from '../../../public/images/hero-img.png'
import TrustImg from '../../../public/images/Trusted.png'
import SVGFader from "../../components/Animation/SVGFaderCarousel"

const EnterpriseAI = () => {
    return (
        <section className='relative w-full overflow-hidden '>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/images/Herovideo.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/2"></div>
            <div className="relative bg-transparent w-full">
                <div className="text-white container mx-auto !pb-0 flex items-center ">
                    <div className="my-auto flex flex-col lg:flex-row items-center justify-between">

                        {/* Left Content Section */}
                        <div className="w-full lg:w-1/2">
                            <h1 className=" font-normal mb-4 text-black">
                                Enterprise-Grade Agentic AI
                                That Thinks, Learns, and Acts for Your Business.
                            </h1>
                            <p className="mb-8 text-black">
                                From recruitment to business intelligence, Saysri.ai builds AI agents that adapt to your enterprise and execute with precision.</p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button className="bg-[#8CB183] text-white px-6 py-3 rounded-xl font-semibold border-2 border-transparent hover:bg-transparent hover:text-[#8CB183] hover:border-[#8CB183] transition hover:cursor-pointer">
                                    SEE VIBRAHIRE IN ACTION
                                </button>
                                <button className="bg-transparent border-2 border-transparent text-black px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition hover:cursor-pointer">
                                    MEET THE TEAM BEHIND IT {String.fromCharCode(8594)}
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <SVGFader />
                        </div>
                       
                    </div>                   
                </div>
            </div>
        </section>
    );
};

export default EnterpriseAI;


// import React from 'react';
// import GlobeImg from '../../public/images/hero-img.png'
// import TrustImg from '../../public/images/Trusted.png'

// const EnterpriseAI = () => {
//     return (
//         <section className='bg-black w-full'>
//             <div className="text-white flex flex-col justify-center items-center container mx-auto">
//                 <div className=" mx-auto flex flex-col md:flex-row items-center justify-between">

//                     {/* Left Content Section */}
//                     <div className="w-full md:w-1/2">
//                         <h1 className=" font-bold mb-4 bg-gradient-to-r from-[#CBF0D1] to-[#FFE1C6] text-transparent bg-clip-text">
//                             Enterprise-Grade Agentic AI
//                             That Thinks, Learns, and Acts for Your Business.
//                         </h1>
//                         <p className="mb-8">
//                             From recruitment to business intelligence, Saysri.ai builds AI agents that adapt to your enterprise and execute with precision.</p>

//                         {/* Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                             <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition hover:cursor-pointer">
//                                 SEE VIBRAHIRE IN ACTION
//                             </button>
//                             <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition hover:cursor-pointer">
//                                 MEET THE TEAM BEHIND IT {String.fromCharCode(8594)}
//                             </button>
//                         </div>
//                     </div>

//                     {/* Right Image Section */}
//                     <div className="w-full md:w-1/2 p-4 relative">
//                         <div className="relative w-full h-64 md:h-96 flex justify-center items-center">
//                             <img src={GlobeImg.src} alt="" />
//                             {/* Labels */}
//                             <div className="absolute top-10 right-30 bg-black text-white p-2 rounded border border-white">
//                                 AI for Action
//                             </div>
//                             <div className="absolute bottom-14 left-20 bg-black text-white p-2 rounded border border-white">
//                                 Beyond Automation
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom section */}
//                 <div className="w-full mt-16 pt-8 flex flex-col items-center gap-10">
//                     <div className="relative w-full text-center">
//                         <hr className="border-1 border-white" />
//                         <p className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-6 text-white">
//                             Trusted by fast-growing startups and enterprises across industries.
//                         </p>
//                     </div>


//                     <div className="flex flex-wrap justify-center gap-8">
//                         <img src={TrustImg.src} alt="Cengage" className="h-16 w-4xl cover" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default EnterpriseAI;