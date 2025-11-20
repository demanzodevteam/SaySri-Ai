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
          <h1 className="mb-4 text-center">Your first step toward Agentic Intelligence.</h1>
          <p className="max-w-2xl mx-auto">
            Saysri builds Agentic AI that goes beyond logic, understanding context, learning independently, and driving enterprise transformation with purpose.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto items-center">
        <div className="space-y-24 pb-20">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              index={index}
              feature={feature}
            />
          ))}
        </div>
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
        className="shadow-[0_0_84px_0_rgba(210,210,210,0.8)] bg-white relative bg-gradient-to-b from-[#CFEFD0]/50 to-[#F8E4CB]/50 text-black px-6 py-10 rounded-2xl max-w-[280px] z-10 text-center space-y-4"
      >
        <div className="p-3 rounded-md mb-4 flex justify-center items-center">
          <img src={feature.img} alt={`${feature.titleBg} Illustration`} className="h-14 w-14" />
        </div>
        <h6 className="font-normal">{feature.heading}</h6>
        <p className="mt-2">{feature.description}</p>
      </div>
    </div>
  );
}


// "use client";

// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Img1 from "../../public/images/UnderstandImg.png";
// import Img2 from "../../public/images/Precision.png";
// import Img3 from "../../public/images/Autonomy.png";

// gsap.registerPlugin(ScrollTrigger);

// const features = [
//   {
//     titleBg: "Cognition",
//     img: Img1.src,
//     heading: "Understands context, not just commands.",
//     description: "Agentic AI that comprehends meaning, emotion, and real intent.",
//   },
//   {
//     titleBg: "Precision",
//     img: Img2.src,
//     heading: "Makes decisions with precision.",
//     description: "Bias-free, data-driven, and adaptable to enterprise logic.",
//   },
//   {
//     titleBg: "Adaptive",
//     img: Img3.src,
//     heading: "Acts with autonomy.",
//     description: "From insights to actions — Saysri’s AI executes with precision and accountability.",
//   },
// ];

// export default function AgenticIntelligence() {
//   return (
//     <div className="bg-white w-full">
//       <div className="container mx-auto flex items-center justify-center">
//         <div className="text-center flex items-center justify-center flex-col">
//           <h1 className="font-bold mb-4 text-center">Your first step toward Agentic Intelligence.</h1>
//           <p className="max-w-2xl mx-auto">
//             Saysri builds Agentic AI that goes beyond logic, understanding context, learning independently, and driving enterprise transformation with purpose.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto items-center">
//         <div className="space-y-24 pb-20">
//           {features.map((feature, index) => (
//             <FeatureItem
//               key={index}
//               index={index}
//               feature={feature}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function FeatureItem({ feature, index }) {
//   const rootRef = useRef(null);
//   const titleRef = useRef(null);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const root = rootRef.current;
//     const titleEl = titleRef.current;
//     const cardEl = cardRef.current;
//     if (!root || !titleEl || !cardEl) return;

//     gsap.set(titleEl, { scale: 1, opacity: 1, transformOrigin: "50% 50%" });
//     gsap.set(cardEl, { y: 20, opacity: 0 });

//     const titleTrigger = ScrollTrigger.create({
//       trigger: root,
//       start: "top 45%",
//       end: "top 85%",
//       onEnter: () => {
//         gsap.to(titleEl, {
//           scale: 0.7,
//           opacity: 0.2,
//           duration: 0.32,
//           ease: "power2.out",
//           delay: 0.04 + index * 0.06,
//         });
//       },
//       onLeaveBack: () => {
//         gsap.to(titleEl, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
//       },
//     });

//     const cardTrigger = ScrollTrigger.create({
//       trigger: root,
//       start: "top 45%",
//       end: "top 30%",
//       onEnter: () => {
//         gsap.to(cardEl, {
//           y: 0,
//           opacity: 1,
//           duration: 0.5,
//           ease: "power2.out",
//           delay: 0.16 + index * 0.1,
//         });
//       },
//       onLeaveBack: () => {
//         gsap.to(cardEl, { y: 20, opacity: 0, duration: 0.3, ease: "power1.out" });
//       },
//     });
//     return () => {
//       titleTrigger.kill();
//       cardTrigger.kill();
//     };
//   }, [index]);

//   return (
//     <div ref={rootRef} className="relative flex justify-center items-center">
//       <div
//         ref={titleRef}
//         className="absolute text-[220px] font-bold text-black select-none pointer-events-none"
//         aria-hidden
//         style={{ transformOrigin: "50% 50%" }}
//       >
//         {feature.titleBg}
//       </div>
//       <div
//         ref={cardRef}
//         className="shadow-[0_0_84px_0_rgba(210,210,210,0.8)] bg-white relative bg-gradient-to-b from-[#CFEFD0]/50 to-[#F8E4CB]/50 text-black px-6 py-10 rounded-2xl max-w-[280px] z-10 text-center space-y-4"
//       >
//         <div className="p-3 rounded-md mb-4 flex justify-center items-center">
//           <img src={feature.img} alt={`${feature.titleBg} Illustration`} className="h-14 w-14" />
//         </div>
//         <h6 className="font-bold">{feature.heading}</h6>
//         <p className="mt-2">{feature.description}</p>
//       </div>
//     </div>
//   );
// }
