"use client"
import React from "react";
import { gsapAnimations } from "./Animation/Animations";
import Process1Img from "../../public/images/Process1.webp"
import Process2Img from "../../public/images/Process2.webp"
import Process3Img from "../../public/images/Process3.webp"

export default function VibraHireProcess() {
  gsapAnimations();
  const steps = [
    {
      title: "Understands",
      description:
        "Interprets resumes, behavioral data, and job intent using AI-driven contextual comprehension powered by Gemini and OpenAI models.",
      image: Process1Img.src,
    },
    {
      title: "Matches",
      description:
        "Performs AI matchmaking by comparing candidate strengths and role expectations through dynamic contextual scoring — delivering data-backed alignment, not guesswork.",
      image: Process2Img.src,
    },
    {
      title: "Acts",
      description:
        "Automates communication, interview scheduling, and feedback via an integrated WhatsApp HR assistant — maintaining real-time engagement throughout the journey.",
      image: Process3Img.src,
    },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 fade-up">
          How VibraHire Thinks, Matches, and Acts
        </h2>
        <p className="mb-12 max-w-3xl mx-auto fade-up">
          VibraHire's architecture is built around contextual comprehension, precision scoring, and autonomous action — bringing logic and empathy into every hiring decision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#08A045] to-[#0B6E4F] rounded-xl p-6 text-white shadow-lg fade-up"
            >
              <div className="mb-4">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="mb-3">{step.title}</h3>
              <p className="">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex justify-center items-center space-x-3">
          <p className="fade-scale">
            It's not just automation.
          </p>
          <span className="tooltip text-white fade-scale">
            It's Agentic Decision Intelligence.
          </span>
        </div>
      </div>
    </div>
  );
}
