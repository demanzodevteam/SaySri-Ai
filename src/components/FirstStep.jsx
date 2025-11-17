"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Img1 from "../../public/images/UnderstandImg.png";
import Img2 from "../../public/images/Precision.png";
import Img3 from "../../public/images/Autonomy.png";

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
  const titleVariant = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 0.28,
      transition: {
        duration: 0.32,
        ease: "easeOut",
        delay: 0.04 + custom * 0.06,
      },
    }),
  };

  const cardVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.16 + custom * 0.10,
      },
    }),
  };

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
              titleVariant={titleVariant}
              cardVariant={cardVariant}
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

function FeatureItem({ feature, index, titleVariant, cardVariant }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const scrollDirRef = useRef("down");
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function onScroll() {
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          scrollDirRef.current = y > lastY ? "down" : y < lastY ? "up" : scrollDirRef.current;
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const threshold = 0.5; 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;

          if (ratio >= threshold) {
            setVisible(true);
            return;
          }

          if (!entry.isIntersecting) {
            if (scrollDirRef.current === "up") {
              setVisible(false);
            }
            return;
          }

        });
      },
      { threshold: [0, 0.001, 0.25, threshold] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative flex justify-center items-center">
      <motion.div
        className="absolute text-[220px] font-bold text-gray-300 select-none pointer-events-none"
        variants={{
          hidden: { scale: 0.7, opacity: 0 },
          visible: (i) => ({ scale: 1, opacity: 0.28, transition: { duration: 0.32, ease: "easeOut", delay: 0.04 + i * 0.06 } }),
        }}
        custom={index}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        aria-hidden
        style={{ transformOrigin: "50% 50%" }}
      >
        {feature.titleBg}
      </motion.div>

      <motion.div
        className="relative bg-black text-white px-6 py-6 rounded-2xl max-w-[280px] z-10 text-center space-y-4"
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: (i) => ({ y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.16 + i * 0.1 } }),
        }}
        custom={index}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        <div className="p-3 rounded-md mb-4 flex justify-center items-center">
          <img src={feature.img} alt={`${feature.titleBg} Illustration`} className="h-14 w-14" />
        </div>
        <h6 className="font-bold">{feature.heading}</h6>
        <p className="text-gray-300 mt-2">{feature.description}</p>
      </motion.div>
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
