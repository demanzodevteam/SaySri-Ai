"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsapAnimations } from "../Animation/Animations";
import ConeImg from "../../../public/images/Cubecone.webp";
import ShapeTextureImg from "../../../public/images/Shapetexture.webp";
import Girl1Img from "../../../public/images/Girl1.webp";
import Girl2Img from "../../../public/images/Girl2.webp";

gsap.registerPlugin(ScrollTrigger);

export default function MeetSaysri() {
    gsapAnimations();
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const Data = [
        {
            title: "VibraHire by Saysri",
            description:
                "Smarter hiring starts here. AI that understands people, not just resumes, for faster, bias-free recruitment.",
            image: ShapeTextureImg.src,
            bgType: "bg-contain",
        },
        {
            title: "IntelliBooks by Saysri",
            description:
                "AI that transforms documents into decisions automating reports, insights, and enterprise data processing.",
            image: ConeImg.src,
            bgType: "bg-cover",
        },
        {
            title: "AI Agents",
            description:
                "Collaborate with Saysri to architect custom AI ecosystems designed for automation, autonomy, and growth.",
            image: Girl2Img.src,
            bgType: "bg-cover",
        },
        {
            title: "Startup & Enterprise Acceleration",
            description:
                "We empower businesses of all sizes with tools, automation, and strategic technology support that streamline operations and unlock growth",
            image: Girl1Img.src,
            bgType: "bg-cover",
        },
    ];
    useEffect(() => {
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
            const totalCards = cardsRef.current.length;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => "+=" + (window.innerHeight * (totalCards - 1)),
                    scrub: 1,
                    pin: true,          
                    pinSpacing: true,   
                    snap: {
                        snapTo: "labelsDirectional", 
                        duration: 0.4,
                        delay: 0.1,
                        ease: "power1.inOut",
                    },
                },
            });

            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                const label = `card-${index}`;
                tl.addLabel(label);
                tl.fromTo(
                    card,
                    { y: 80, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    label
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);
   
    return (
        <section
            ref={sectionRef}
            className="w-full min-h-screen flex items-center justify-center ov  erflow-hidden"
        >
            <div className="w-full container" >
                <div className="py-8">
                    <div className="mx-auto">
                        <div className="text-center mb-12 fade-up">
                            <h1 className="font- mb-4">
                                Introducing Saysri AI Suite, Engineered for Intelligence.
                            </h1>
                            <p className="text-[#1E1E1E] max-w-4xl mx-auto">
                                Power your enterprise with intelligence that thinks, learns, and
                                evolves. Saysri&apos;s AI Suite fuses intelligence, automation, and
                                adaptability, empowering teams to move from reactive workflows to
                                self-evolving systems.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Data.map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        if (el) cardsRef.current[index] = el;
                                    }}
                                    className="rounded-2xl overflow-hidden group opacity-0" 
                                >
                                    <div
                                        className={`relative h-95 ${item.bgType} bg-center flex flex-col justify-end p-6 transition-all duration-500 ease-in-out group-hover:scale-105`}
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060606]/40 to-[#060606]/80"></div>

                                        <div className="relative z-10">
                                            <h5 className="text-2xl font-normal text-white mb-2 duration-500 ease-in-out group-hover:-translate-y-4">
                                                {item.title}
                                            </h5>
                                            <p className="text-white duration-500 ease-in-out group-hover:-translate-y-4">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}




// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import ConeImg from "../../../public/images/Cubecone.webp"
// import ShapeTextureImg from "../../../public/images/Shapetexture.webp"
// import GeometricImg from "../../../public/images/Geometric.webp"
// import Girl1Img from "../../../public/images/Girl1.webp"
// import Girl2Img from "../../../public/images/Girl2.webp"

// export default function MeetSaysri() {
//     const containerRef = useRef(null);

//     // Scroll progress across the entire section
//     // const { scrollYProgress } = useScroll({
//     //     target: containerRef,
//     //     offset: ["start 10px", "end end"],
//     // });

//     // const blocks = [
//     //     {
//     //         bg: "bg-[#EFEFEF]",
//     //         text: "Saysri was born from one simple idea — technology should make work more human, helping teams focus on what truly matters.",
//     //         icon: Icon1.src,
//     //     },
//     //     {
//     //         bg: "bg-gradient-to-r from-[#CBF0D1] to-[#FFE1C6]",
//     //         text: "We're a team of engineers, recruiters, and designers building AI that understands context, empathy, and fairness.",
//     //         icon: Icon2.src,
//     //     },
//     //     {
//     //         bg: "bg-[#EFEFEF]",
//     //         text: "Our first creation, VbraHire, is transforming how teams hire — with speed, ethics, and intelligence.",
//     //         icon: Icon3.src,
//     //     },
//     // ];
//     const Data = [
//         {
//             title: "VibraHire by Saysri",
//             description:
//                 "Smarter hiring starts here. AI that understands people, not just resumes, for faster, bias-free recruitment.",
//             image: ShapeTextureImg.src,
//             bgType: "bg-contain"
//         },
//         {
//             title: "IntelliBooks by Saysri",
//             description:
//                 "AI that transforms documents into decisions automating reports, insights, and enterprise data processing.",
//             image: ConeImg.src,
//             bgType: "bg-cover"
//         },
//         {
//             title: "AI Agentic Consultation",
//             description:
//                 "Collaborate with Saysri to architect custom AI ecosystems designed for automation, autonomy, and growth.",
//             image: Girl2Img.src,
//             bgType: "bg-cover"
//         },
//         {
//             title: "Sartup & Enterprise Acceleration",
//             description:
//                 "Smart, scalable solutions that help you move faster.",
//             image: Girl1Img.src,
//             bgType: "bg-cover"
//         }
//     ];

//     return (
//         <div ref={containerRef} className="w-full container flex flex-col items-center justify-center">
//             {/* <div className=" w-full space-y-6">
//                 <div className="flex justify-center">
//                     <h2 className="flex text-4xl font-bold items-center gap-2 mb-4">
//                         Meet <img src={Logo.src} alt="" className="h-15" />
//                     </h2>
//                 </div>
//                 <div>
                    
//                 </div>
//                  {blocks.map((block, i) => {
//                     const targetScale = 1 - (blocks.length - i) * 0.05;

//                     const scale = useTransform(
//                         scrollYProgress,
//                         [i / blocks.length, 1],
//                         [1, targetScale]
//                     );

//                     return (
//                         <motion.div
//                             key={i}
//                             style={{ scale }}
//                             className="flex justify-center sticky top-28 z-10"
//                         >
//                             <div
//                                 className={`flex items-center p-6 rounded-xl max-w-2xl ${block.bg}`}
//                             >
//                                 <div className="font-normal pr-4">{block.text}</div>
//                                 <img src={block.icon} alt="" />
//                             </div>
//                         </motion.div>
//                     );
//                 })}
//             </div> */}

//             <div className="py-8">
//                 <div className="mx-auto">
//                     <div className="text-center mb-12">
//                         <h1 className="font-  mb-4">
//                             Introducing Saysri AI Suite, Engineered for Intelligence.
//                         </h1>
//                         <p className="text-[#1E1E1E] max-w-4xl mx-auto">
//                             Power your enterprise with intelligence that thinks, learns, and evolves. Saysri's AI Suite fuses intelligence, automation, and adaptability, empowering teams to move from reactive workflows to self-evolving systems.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
//                         {Data.map((item, index) => (
//                             <div key={index} className="rounded-2xl overflow-hidden group">
//                                 <div
//                                     className={`relative h-95 ${item.bgType} bg-center flex flex-col justify-end p-6 transition-all duration-500 ease-in-out group-hover:scale-105`}
//                                     style={{ backgroundImage: `url(${item.image})` }}
//                                 >
//                                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060606]/40 to-[#060606]/80"></div>

//                                     <div className="relative z-10">
//                                         <h5 className="text-2xl font-normal text-white mb-2 duration-500 ease-in-out group-hover:-translate-y-4">
//                                             {item.title}
//                                         </h5>
//                                         <p className="text-white duration-500 ease-in-out group-hover:-translate-y-4">
//                                             {item.description}                                        </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// }

