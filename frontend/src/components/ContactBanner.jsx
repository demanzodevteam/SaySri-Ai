import React from "react";

export default function TrustedWealthPlatform() {
  const achievements = [
    {
      number: "10K",
      description: "Making estate planning simple and accessible for over 10,000 families.",
      badge: "https://source.unsplash.com/random/100x100/?award,2025",
      badgeAlt: "Momentum Leader 2025",
    },
    {
      number: "2,000",
      description: "Making estate planning simple and accessible for over 2,000 advisors.",
      badge: "https://source.unsplash.com/random/100x100/?best,results,2025",
      badgeAlt: "Best Results 2025",
    },
    {
      number: "80",
      description: "Making estate planning simple and accessible for over 80 institutions.",
      badge: "https://source.unsplash.com/random/100x100/?leader,2025",
      badgeAlt: "Leader 2025",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#CFEFD0] to-[#F8E4CB] w-full">
      <div className="container mx-auto text-center">
        <h2 className="  mb-12">
          Wealthly Is The <span className="italic">Trusted</span> Wealth Management Platform in 2025
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className=" ">
              <div className="text-5xl font-bold mb-2">{achievement.number}</div>
              <p className="">{achievement.description}</p>
              {/* <div className="flex justify-center">
                <img
                  src={achievement.badge}
                  alt={achievement.badgeAlt}
                  className="h-20 w-20 object-contain"
                />
              </div> */}
            </div>
          ))}
        </div>

        {/* <p className="text-gray-300 mt-12">Some of our achievements</p> */}
      </div>
    </div>
  );
}
