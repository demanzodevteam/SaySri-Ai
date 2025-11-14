import React from "react";
import NumberImg from "../../../public/images/Numbers.png"

export default function SuccessTestimonials() {
  const testimonials = [
    {
      quote: "Saysri's AI feels like an extra recruiter on our team — only faster and fairer.",
      author: "— Talent Head, Fintech Client",
    },
    {
      quote: "Vibrahire helped us reduce hiring time by 40% and improve candidate quality dramatically.",
      author: "— HR Lead, CloudMotrix",
    },
    {
      quote: "With Intellibooks, accounting dropped 70% — like a finance team on autopilot.",
      author: "— CFO, GreenFin Pvt Ltd",
    },
  ];

  return (
    <div className="bg-black w-full text-white">
      <div className="container mx-auto">
        {/* Testimonials Section */}
        <div className="mb-16">
          <h1 className="font-bold text-center mb-12">
            Success that speaks through experience
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className=" p-4 rounded-lg relative"
              >
                <div className="tooltip bg-white text-black ">
                    <p className="text-lg mb-4">"{testimonial.quote}"</p>
                </div>
                <p className="text-right pe-4 pt-3">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center border-t border-[#FEF9F8] pt-8">
          <h1 className="font-bold mb-4 bg-gradient-to-r from-[#CBF0D1] to-[#FFE1C6] text-transparent bg-clip-text">
            Ready to Experience Smarter Business Automation?
          </h1>
          <p className="text-white mb-8 max-w-2xl mx-auto">
             See how Saysri.ai can help your team work faster and smarter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              BOOK A FREE DEMO
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
              TALK TO AN EXPERT →
            </button>
          </div>
          <img src={NumberImg.src} alt="" />
        </div>
      </div>
    </div>
  );
}
