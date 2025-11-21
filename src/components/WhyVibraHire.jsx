import React from "react";

export default function WhyVibraHire() {
    const reasons = [
        {
            number: "1",
            title: "Learns Your Hiring DNA",
            description:
                "Adapts to your unique recruitment patterns, improving accuracy over time.",

        },
        {
            number: "2",
            title: "Promotes Fair, Bias-Free Decisions",
            description:
                "Every step is backed by explainable AI logic — transparent, ethical, and equitable.",
        },
        {
            number: "3",
            title: "Accelerates Hiring Without Losing Human Touch",
            description:
                "AI takes care of the process; you focus on the people.",
        },
        {
            number: "4",
            title: "Works Seamlessly Across Your Ecosystem",
            description:
                "Integrates with HR tools, CRMs, and internal systems — creating a unified hiring intelligence hub.",
        },
    ];

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <h2 className="text-center mb-12">
                    Why Enterprises Choose VibraHire
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group p-8 space-y-2 flex flex-col items-center justify-center text-center rounded-2xl shadow-md bg-[#EBEBEB] hover:bg-gradient-to-b from-[#DCFFE1] to-[#B9F8BF] transition-all duration-300"
                        >
                            <h1 className="group-hover:text-[#06A52D] transition-all duration-300">{reason.number}</h1>
                            <h6 className="">{reason.title}</h6>
                            <p className="">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
