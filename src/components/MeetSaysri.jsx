"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../../public/images/Black_logo.png"
import Icon1 from "../../public/images/Group.png"
import Icon2 from "../../public/images/Vector.png"
import Icon3 from "../../public/images/Group 106.png"
import ConeImg from "../../public/images/Cubecone.webp"
import ShapeTextureImg from "../../public/images/Shapetexture.webp"
import GeometricImg from "../../public/images/Geometric.webp"

export default function MeetSaysri() {
    const containerRef = useRef(null);

    // Scroll progress across the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10px", "end end"],
    });

    const blocks = [
        {
            bg: "bg-[#EFEFEF]",
            text: "Saysri was born from one simple idea — technology should make work more human, helping teams focus on what truly matters.",
            icon: Icon1.src,
        },
        {
            bg: "bg-gradient-to-r from-[#CBF0D1] to-[#FFE1C6]",
            text: "We're a team of engineers, recruiters, and designers building AI that understands context, empathy, and fairness.",
            icon: Icon2.src,
        },
        {
            bg: "bg-[#EFEFEF]",
            text: "Our first creation, VbraHire, is transforming how teams hire — with speed, ethics, and intelligence.",
            icon: Icon3.src,
        },
    ];
    return (
        <div ref={containerRef} className="w-full container flex flex-col items-center justify-center">
            <div className=" w-full space-y-6">
                <div className="flex justify-center">
                    <h2 className="flex text-4xl font-bold items-center gap-2 mb-4">
                        Meet <img src={Logo.src} alt="" className="h-15" />
                    </h2>
                </div>
                <div>
                    
                </div>
                 {blocks.map((block, i) => {
                    const targetScale = 1 - (blocks.length - i) * 0.05;

                    const scale = useTransform(
                        scrollYProgress,
                        [i / blocks.length, 1],
                        [1, targetScale]
                    );

                    return (
                        <motion.div
                            key={i}
                            style={{ scale }}
                            className="flex justify-center sticky top-28 z-10"
                        >
                            <div
                                className={`flex items-center p-6 rounded-xl max-w-2xl ${block.bg}`}
                            >
                                <div className="font-normal pr-4">{block.text}</div>
                                <img src={block.icon} alt="" />
                            </div>
                        </motion.div>
                    );
                })}
                {/* <div className="flex justify-center">
                    <div className="flex items-center bg-[#EFEFEF] p-6 rounded-xl max-w-xl">
                        Saysri was born from one simple idea — technology should make work more human, helping teams focus on what truly matters.
                        <img src={Icon1.src} alt="" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex items-center justify-center bg-gradient-to-r from-[#CBF0D1] to-[#FFE1C6] p-6 rounded-xl max-w-2xl">
                        <div className="font-semibold pl-4">
                            We're a team of engineers, recruiters, and designers building AI that understands context, empathy, and fairness.
                        </div>
                        <img src={Icon2.src} alt="" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex items-center bg-[#EFEFEF] p-6 rounded-xl max-w-xl ">
                        Our first creation, VbraHire, is transforming how teams hire — with speed, ethics, and intelligence.
                        <img src={Icon3.src} alt="" />
                    </div>
                </div> */}
            </div>

            {/* Second Part */}
            <div className="py-8 px-4">
                <div className="mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="font-bold  mb-4">
                            Introducing Saysri AI Suite, Engineered for Intelligence.
                        </h1>
                        <p className="text-[#1E1E1E] max-w-4xl mx-auto">
                            Power your enterprise with intelligence that thinks, learns, and evolves. Saysri's AI Suite fuses intelligence, automation, and adaptability, empowering teams to move from reactive workflows to self-evolving systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
                        <div className="rounded-2xl overflow-hidden group">
                            <div className="h-100 bg-contain bg-center flex flex-col justify-end p-6  transition-all duration-500 ease-in-out group-hover:scale-105" style={{ backgroundImage: `url(${ShapeTextureImg.src})` }}>
                                <h5 className="text-2xl font-bold text-white mb-2 duration-500 ease-in-out group-hover:-translate-y-4">VibraHire by Saysri</h5>
                                <p className="text-white duration-500 ease-in-out group-hover:-translate-y-4">
                                    Smarter hiring starts here. AI that understands people, not just resumes, for faster, bias-free recruitment.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden group">
                            <div className="h-100 bg-cover bg-center flex flex-col justify-end p-6 transition-all duration-500 ease-in-out group-hover:scale-105" style={{ backgroundImage: `url(${ConeImg.src})` }}>
                                <h5 className="text-2xl font-bold text-white mb-2 duration-500 ease-in-out group-hover:-translate-y-4">IntelliBooks by Saysri</h5>
                                <p className="text-white duration-500 ease-in-out group-hover:-translate-y-4">
                                    AI that transforms documents into decisions automating reports, insights, and enterprise data processing.                          </p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden group">
                            <div className="h-100 bg-contain bg-center flex flex-col justify-end p-6 transition-all duration-500 ease-in-out group-hover:scale-105" style={{ backgroundImage: `url(${GeometricImg.src})` }}>
                                <h5 className="text-2xl font-bold text-white mb-2 duration-500 ease-in-out group-hover:-translate-y-4">AI Agentic Consultation</h5>
                                <p className="text-white duration-500 ease-in-out group-hover:-translate-y-4">
                                    Collaborate with Saysri to architect custom AI ecosystems designed for automation, autonomy, and growth.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


// import React from "react";
// import Logo from "../../public/images/Black_logo.png"
// import Icon1 from "../../public/images/Group.png"
// import Icon2 from "../../public/images/Vector.png"
// import Icon3 from "../../public/images/Group 106.png"
// import ConeImg from "../../public/images/Cubecone.webp"
// import ShapeTextureImg from "../../public/images/Shapetexture.webp"
// import GeometricImg from "../../public/images/Geometric.webp"

// export default function MeetSaysri() {
//     return (
//         <div className="w-full container flex flex-col items-center justify-center">
//             <div className=" w-full space-y-6">
//                 <div className="flex justify-center">
//                     <h2 className="flex text-4xl font-bold items-center gap-2 mb-4">
//                         Meet <img src={Logo.src} alt="" className="h-15" />
//                     </h2>
//                 </div>

//                 <div className="flex justify-center">
//                     <div className="flex items-center bg-[#EFEFEF] p-6 rounded-xl max-w-xl">
//                         Saysri was born from one simple idea — technology should make work more human, helping teams focus on what truly matters.
//                         <img src={Icon1.src} alt="" />
//                     </div>
//                 </div>

//                 <div className="flex justify-center">
//                     <div className="flex items-center justify-center bg-gradient-to-r from-[#CBF0D1] to-[#FFE1C6] p-6 rounded-xl max-w-2xl">
//                         <div className="font-semibold pl-4">
//                             We're a team of engineers, recruiters, and designers building AI that understands context, empathy, and fairness.
//                         </div>
//                         <img src={Icon2.src} alt="" />
//                     </div>
//                 </div>

//                 <div className="flex justify-center">
//                     <div className="flex items-center bg-[#EFEFEF] p-6 rounded-xl max-w-xl ">
//                         Our first creation, VbraHire, is transforming how teams hire — with speed, ethics, and intelligence.
//                         <img src={Icon3.src} alt="" />
//                     </div>
//                 </div>
//             </div>

//             {/* Second Part */}
//             <div className="py-8 px-4">
//                 <div className="mx-auto">
//                     <div className="text-center mb-12">
//                         <h1 className="font-bold  mb-4">
//                             Introducing Saysri AI Suite, Engineered for Intelligence.
//                         </h1>
//                         <p className="text-[#1E1E1E] max-w-4xl mx-auto">
//                             Power your enterprise with intelligence that thinks, learns, and evolves. Saysri's AI Suite fuses intelligence, automation, and adaptability, empowering teams to move from reactive workflows to self-evolving systems.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
//                         <div className="rounded-2xl overflow-hidden group">
//                             <div className="h-100 bg-contain bg-center flex flex-col justify-end p-6  transition-all duration-500 ease-in-out group-hover:scale-105" style={{ backgroundImage: `url(${ShapeTextureImg.src})` }}>
//                                 <h5 className="text-2xl font-bold text-white mb-2 duration-500 ease-in-out group-hover:-translate-y-4">VibraHire by Saysri</h5>
//                                 <p className="text-white duration-500 ease-in-out group-hover:-translate-y-4">
//                                     Smarter hiring starts here. AI that understands people, not just resumes, for faster, bias-free recruitment.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="rounded-2xl overflow-hidden group">
//                             <div className="h-100 bg-cover bg-center flex flex-col justify-end p-6 transition-all duration-500 ease-in-out group-hover:scale-105" style={{ backgroundImage: `url(${ConeImg.src})` }}>
//                                 <h5 className="text-2xl font-bold text-white mb-2 duration-500 ease-in-out group-hover:-translate-y-4">IntelliBooks by Saysri</h5>
//                                 <p className="text-white duration-500 ease-in-out group-hover:-translate-y-4">
//                                     AI that transforms documents into decisions automating reports, insights, and enterprise data processing.                          </p>
//                             </div>
//                         </div>
//                         <div className="rounded-2xl overflow-hidden group">
//                             <div className="h-100 bg-contain bg-center flex flex-col justify-end p-6 transition-all duration-500 ease-in-out group-hover:scale-105" style={{ backgroundImage: `url(${GeometricImg.src})` }}>
//                                 <h5 className="text-2xl font-bold text-white mb-2 duration-500 ease-in-out group-hover:-translate-y-4">AI Agentic Consultation</h5>
//                                 <p className="text-white duration-500 ease-in-out group-hover:-translate-y-4">
//                                     Collaborate with Saysri to architect custom AI ecosystems designed for automation, autonomy, and growth.                                </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// }

