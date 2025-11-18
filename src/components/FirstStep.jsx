"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img1 from "../../public/images/UnderstandImg.png";
import Img2 from "../../public/images/Precision.png";
import Img3 from "../../public/images/Autonomy.png";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    titleBg: "Cognition",
    img: Img1.src,
    heading: "Understands context, not just commands.",
    description: "Agentic AI that comprehends meaning, emotion, and real intent.",
  },
  {
    titleBg: "Precision",
    img: Img2.src,
    heading: "Makes decisions with precision.",
    description: "Bias-free, data-driven, and adaptable to enterprise logic.",
  },
  {
    titleBg: "Adaptive",
    img: Img3.src,
    heading: "Acts with autonomy.",
    description: "From insights to actions — Saysri’s AI executes with precision and accountability.",
  },
];

export default function AgenticIntelligence() {
  return (
    <div className="bg-white w-full">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-center flex items-center justify-center flex-col">
          <h1 className="font-bold mb-4 text-center">Our first step toward Agentic Intelligence.</h1>
          <p className="max-w-2xl mx-auto">
            Saysri builds Agentic AI that goes beyond logic, understanding context, learning independently, and driving enterprise transformation with purpose.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto items-center">
        <div className="space-y-12">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              index={index}
              feature={feature}
            />
          ))}
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

function FeatureItem({ feature, index }) {
  const rootRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const titleEl = titleRef.current;
    const cardEl = cardRef.current;
    if (!root || !titleEl || !cardEl) return;

    gsap.set(titleEl, { scale: 1, opacity: 1, transformOrigin: "50% 50%" });
    gsap.set(cardEl, { y: 20, opacity: 0 });

    const titleTrigger = ScrollTrigger.create({
      trigger: root,
      start: "top 45%", 
      end: "top 85%",  
      onEnter: () => {
        gsap.to(titleEl, {
          scale: 0.7,
          opacity: 0.2,
          duration: 0.32,
          ease: "power2.out",
          delay: 0.04 + index * 0.06,
        });
      },
      onLeaveBack: () => {
        gsap.to(titleEl, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
      },
    });

    const cardTrigger = ScrollTrigger.create({
      trigger: root,
      start: "top 45%", 
      end: "top 30%",
      onEnter: () => {
        gsap.to(cardEl, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.16 + index * 0.1,
        });
      },
      onLeaveBack: () => {
        gsap.to(cardEl, { y: 20, opacity: 0, duration: 0.3, ease: "power1.out" });
      },
    });
    return () => {
      titleTrigger.kill();
      cardTrigger.kill();
    };
  }, [index]);

  return (
    <div ref={rootRef} className="relative flex justify-center items-center">
      <div
        ref={titleRef}
        className="absolute text-[220px] font-bold text-black select-none pointer-events-none"
        aria-hidden
        style={{ transformOrigin: "50% 50%" }}
      >
        {feature.titleBg}
      </div>

      <div
        ref={cardRef}
        className="relative bg-black text-white px-6 py-6 rounded-2xl max-w-[280px] z-10 text-center space-y-4"
      >
        <div className="p-3 rounded-md mb-4 flex justify-center items-center">
          <img src={feature.img} alt={`${feature.titleBg} Illustration`} className="h-14 w-14" />
        </div>
        <h6 className="font-bold">{feature.heading}</h6>
        <p className="text-gray-300 mt-2">{feature.description}</p>
      </div>
    </div>
  );
}




// "use client"
// import React from "react";
// import { motion } from "framer-motion";
// import Img1 from "../../public/images/UnderstandImg.png"
// import Img2 from "../../public/images/Precision.png"
// import Img3 from "../../public/images/Autonomy.png"
// import Img4 from "../../public/images/VideoImg.png"
// const features = [
//     {
//         titleBg: "Cognition",
//         img: Img1.src,
//         heading: "Understands context, not just commands.",
//         description: "Agentic AI that comprehends meaning, emotion, and real intent.",
//     },
//     {
//         titleBg: "Precision",
//         img: Img2.src,
//         heading: "Makes decisions with precision.",
//         description: "Bias-free, data-driven, and adaptable to enterprise logic.",
//     },
//     {
//         titleBg: "Adaptive",
//         img: Img3.src,
//         heading: "Acts with autonomy.",
//         description: "From insights to actions — Saysri’s AI executes with precision and accountability.",
//     },
// ];

// export default function AgenticIntelligence() {
//     const titleVariant = {
//         hidden: { y: 25, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0,
//                 ease: "easeOut",
//             },
//         },
//     };
//     const cardVariant = {
//         hidden: { y: 25, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.55,
//                 ease: "easeOut",
//                 delay: 0.3,
//             },
//         },
//     };
//     return (
//         <div className="bg-white w-full">
//             <div className="container mx-auto flex items-center justify-center">
//                 <div className="text-center flex items-center justify-center flex-col">
//                     <h1 className="font-bold mb-4 text-center">
//                         Our first step toward Agentic Intelligence.
//                     </h1>
//                     <p className="max-w-2xl mx-auto">
//                         Saysri builds Agentic AI that goes beyond logic, understanding context, learning independently, and driving enterprise transformation with purpose.</p>
//                 </div>

//             </div>
//             <div className="max-w-4xl mx-auto items-center">
//                 <div className="space-y-12">
//                     {features.map((feature, index) => (
//                         <div key={index} className="relative flex justify-center items-center">
//                             <motion.div className="absolute text-[220px] font-bold text-gray-300 opacity-30 select-none" variants={titleVariant}
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: false }}
//                                 custom={index}
//                                 aria-hidden>
//                                 {feature.titleBg}
//                             </motion.div>
//                             <motion.div className="relative bg-black text-white px-6 py-6 rounded-2xl max-w-[280px] z-10 text-center space-y-4" variants={cardVariant}
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: false }}
//                                 custom={index}>
//                                 <div className="p-3 rounded-md mb-4 flex justify-center items-center">
//                                     <img
//                                         src={feature.img}
//                                         alt={`${feature.titleBg} Illustration`}
//                                         className="h-14 w-14"
//                                     />
//                                 </div>
//                                 <h6 className="font-bold">{feature.heading}</h6>
//                                 <p className="text-gray-300 mt-2">{feature.description}</p>
//                             </motion.div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="max-w-4xl mx-auto items-center mt-14 space-y-4 flex flex-col items-center justify-center border-2 border-white">
//                 <iframe
//                     src="https://www.youtube.com/embed/n2lr1pCHTgs?list=TLGGRTq-ntUF6LExMjExMjAyNQ"
//                     title="Saysri Vibrahire - Product Introduction video"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin"
//                     allowFullScreen
//                     className="w-[840px] h-120 rounded-xl border-2 border-white"
//                 ></iframe>

//                 <button className="bg-black border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition hover:cursor-pointer hover:border-black">SEE HOW VIBRAHIRE WORKS</button>
//             </div>
//         </div>
//     );
// }
