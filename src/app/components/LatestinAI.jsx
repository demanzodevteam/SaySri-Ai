import React from "react";
import Img1 from "../../../public/images/Robot.webp"
import Img2 from "../../../public/images/Tablet.webp"
import Img3 from "../../../public/images/Fighter.webp"

export default function LatestInAI() {
  const articles = [
    {
      title: "How AI Is Redefining Recruitment in 2025",
      readTime: "2 Mins Read",
      image: Img1.src,
    },
    {
      title: "Top 5 Accounting Tasks You Can Automate Today",
      readTime: "2 Mins Read",
      image: Img2.src,
    },
    {
      title: "The Future of AI-Powered Business Operations",
      readTime: "2 Mins Read",
      image: Img3.src,
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <h2 className="font-bold mb-12 text-center">
          Stay Ahead with the Latest in AI and Automation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white flex overflow-hidden grayscale hover:grayscale-0 transition-all gap-3"
            >
              <img src={article.image} alt=""className=" h-30 w-30 object-cover rounded-xl"/>
              <div className="my-auto">
                <p className="text-[21px] leading-[29px] font-bold  mb-1 font-['Col_Sans',_sans-serif]">
                  {article.title}
                </p>
                <p className="text-sm text-gray-500">{article.readTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
