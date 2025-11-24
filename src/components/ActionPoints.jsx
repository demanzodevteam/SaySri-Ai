import React from "react";

export default function ActionPoints() {
  const points = [
    "It doesn't follow commands — it interprets goals.",
    "It doesn't automate steps — it creates pathways.",
    "It doesn't replace recruiters — it amplifies them.",
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <h1 className="text-center mb-4">
          Agentic Intelligence in Action
        </h1>
        <p className="text-center mb-12">
          What makes VibraHire different?
        </p>

        <div className="flex flex-col md:flex-row s-x-8 gap-8 max-w-3xl mx-auto">
          <div className="w-[100%] md:w-[60%] space-y-10">
            {points.map((point, index) => (
              <div
                key={index}
                className="tooltiptransparent"
              >
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>

          {/* Right Side: Result Box */}
          <div className="w-[100%] md:w-[40%] bg-green-600 text-white p-9 rounded-2xl">
            <p className="text-xl font-semibold">
              The result: faster hiring, stronger alignment, and scalable intelligence that grows with your enterprise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
