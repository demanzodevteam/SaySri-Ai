import React from "react";
import Logo from "../../public/images/Black_logo.png"
import Icon1 from "../../public/images/Group.png"
import Icon2 from "../../public/images/Vector.png"
import Icon3 from "../../public/images/Group 106.png"
import ConeImg from "../../public/images/Cubecone.webp"
import ShapeTextureImg from "../../public/images/Shapetexture.webp"
import GeometricImg from "../../public/images/Geometric.webp"



export default function MeetSaysri() {
    return (
        <div className="w-full container flex flex-col items-center justify-center">
            <div className=" w-full space-y-6">
                <div className="flex justify-center">
                    <h2 className="flex text-4xl font-bold items-center gap-2 mb-4">
                        Meet <img src={Logo.src} alt="" className="h-15" />
                    </h2>
                </div>

                <div className="flex justify-center">
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
                </div>
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

// "use client"
// import { motion } from "framer-motion";

// // OverlapCards.jsx
// // Uses framer-motion and CSS position:sticky to create overlapping card animations as you scroll.
// // Pass optional `icons` array of React nodes (e.g. <img src={Icon1.src} />) to show icons.
// // Props:
// // - icons: ReactNode[]
// // - topOffset: number (px) where cards stick, default 28
// // - overlapScale: number (scale applied to lower cards, default 0.98)
// // - animationDelayStep: number (stagger delay in seconds, default 0.12)

// export default function OverlapCards({
//   icons = [],
//   topOffset = 28,
//   overlapScale = 0.98,
//   animationDelayStep = 0.12,
// }) {
//   // <-- your provided full cards array integrated here
//   const cards = [
//     {
//       id: 1,
//       text:
//         "Saysri was born from one simple idea — technology should make work more human, helping teams focus on what truly matters.",
//     },
//     {
//       id: 2,
//       text:
//         "We're a team of engineers, recruiters, and designers building AI that understands context, empathy, and fairness.",
//       highlighted: true,
//     },
//     {
//       id: 3,
//       text:
//         "Our first creation, VbraHire, is transforming how teams hire — with speed, ethics, and intelligence.",
//     },
//   ];

//   const cardVariant = {
//     offscreen: { opacity: 0, y: 50, scale: overlapScale },
//     onscreen: (i) => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, delay: i * animationDelayStep, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section className="w-full flex justify-center bg-white py-20">
//       <div className="w-full max-w-4xl relative">
//         <div className="h-[20vh]" />

//         <div className="relative h-[120vh]">
//           <div className="absolute inset-0 flex flex-col items-center justify-start">
//             {cards.map((c, idx) => {
//               const isHighlighted = !!c.highlighted;
//               const bgClass = isHighlighted
//                 ? "bg-gradient-to-r from-[#CBF0D1] to-[#FFE1C6]"
//                 : "bg-[#EFEFEF]";

//               // increase zIndex for later cards so they overlap on top
//               const zIndex = 10 + idx;

//               return (
//                 <motion.div
//                   custom={idx}
//                   key={c.id}
//                   initial="offscreen"
//                   whileInView="onscreen"
//                   viewport={{ once: false, amount: 0.45 }}
//                   variants={cardVariant}
//                   className={`sticky top-${topOffset} flex items-center justify-between p-6 rounded-xl max-w-2xl w-11/12 mx-auto mb-8 ${bgClass}`}
//                   style={{ zIndex }}
//                 >
//                   <div className={`font-semibold ${isHighlighted ? "pl-4" : "pr-4"}`}>
//                     {c.text}
//                   </div>

//                   <div className="w-12 h-12 flex-shrink-0 ml-4">
//                     {icons[idx] ? (
//                       icons[idx]
//                     ) : (
//                       <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">Icon</div>
//                     )}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="h-[40vh]" />
//       </div>
//     </section>
//   );
// }
