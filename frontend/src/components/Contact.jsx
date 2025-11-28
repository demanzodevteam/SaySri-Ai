"use client"
import React, { useState } from "react";

export default function ConnectWithExperts() {
  const items = [
    {
      title: "AI-Powered Automation",
      text: "Streamline repetitive tasks with intelligent automation that learns and adapts to your workflows."
    },
    {
      title: "Faster Time-to-Value",
      text: "Deploy AI solutions quickly with minimal setup, ensuring fast returns and measurable outcomes."
    },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    expertise: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <h1 className="max-w-lg"><span className="text-[#8CB183]">Connect</span> with Our Team of Experts</h1>
              <p>Contact our team of excellence-driven experts today to bring your project to life.</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span><i className="fa-solid fa-phone text-[#8CB183]"></i></span>
                <a href="tel:+17139535200" className="">+1 713.953.5200</a>
              </div>
              <div className="flex items-center gap-2">
                <span><i className="fa-solid fa-envelope text-[#8CB183]"></i></span>
                <a href="mailto:lja@ija.com" className="">lja@ija.com</a>
              </div>
              <div className="flex items-center gap-2">
                <span><i className="fa-solid fa-location-dot text-[#8CB183]"></i></span>
                <a href="#" className="">See Our Locations</a>
              </div>
            </div>
            <div className="w-full flex flex-col">
              {items?.map((item, index) => (
                <div key={index} className="text-black ">
                  <div className="flex items-start">

                    <div>
                      <h6 className="mb-1 fade-up">
                        <i className="fa-solid fa-circle-check me-2 text-[#8CB183]"></i>{item.title}
                      </h6>
                      <p className="ms-7 mb-7 max-w-[100%] lg:max-w-[80%] all ease-in-out duration-100 fade-up">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="bg-white p-6 rounded-lg border-1 border-gray-300 shadow-2xl">
              <h3 className="text-xl font-semibold text-[#8CB183] mb-4">
                Want to Join Our Talented Team?
              </h3>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:underline"
              >
                VISIT OUR JOB BOARD 👉
              </a>
              <div className="mt-4">
                <img
                  src="https://source.unsplash.com/random/300x200/?happy,professional"
                  alt="Happy Professional"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div> */}
          </div>

          <div className="p-6 rounded-xl border-1 border-gray-100 shadow-xl text-black">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h5>Enter Your Information</h5>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="location" className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="expertise" className="block text-sm font-medium mb-1">
                  What Expertise You're Interested In
                </label>
                <select
                  id="expertise"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="AI">AI</option>
                  <option value="Recruitment">Recruitment</option>
                  <option value="Automation">Automation</option>
                  <option value="Consulting">Consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8CB183] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#8CB183]/80 transition-colors flex items-center justify-center"
              >
                SUBMIT <span className="ml-2">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}
