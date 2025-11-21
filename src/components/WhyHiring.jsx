import React from "react";
import ConeImg from "../../public/images/Cubecone.webp";
import PaperImg from "../../public/images/Paper.png";

export default function WhyHiring({ title, description, para, items, image, bgColor = "bg-black", reverse = false, }) {
  return (
    <div className={`${bgColor} w-full`}>
      <div className="mx-auto container">
        <div className="text-center mb-12">
          <h1 className=" mb-4 text-black">
            {title}
          </h1>
          <p className="text-black max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className={`mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}>
          {/* Left Content Section */}
          <div className="w-full md:w-2/5  flex flex-col">
            <p className="mb-6 max-w-lg">{para}</p>
            {items?.map((item, index) => (
              <div key={index} className="text-black ">
                <h6 className="mb-1 hover:text-[#0B6E4F] all ease-in-out duration-100">
                  {item.title}
                </h6>
                <p className="mb-7 max-w-md hover:text-[#0B6E4F] all ease-in-out duration-100">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full md:w-3/5 relative">
            <div className="flex justify-center items-center">
              <img src={image} alt="" className="h-[100%]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
