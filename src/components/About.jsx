import React from "react";
import Person1 from "../../public/images/Person1.png"
import Person2 from "../../public/images/Person2.png"
import Person3 from "../../public/images/Person3.png"
import Person4 from "../../public/images/Person4.png"
import Person5 from "../../public/images/Person5.png"


export default function HumanAboutAI() {
    const teamMembers = [
        {
            name: "Emma Collins",
            role: "Product Manager",
            image: Person1.src,
        },
        {
            name: "James Parker",
            role: "Lead Developer",
            image: Person2.src,
        },
        {
            name: "Olivia Brooks",
            role: "Marketing Head",
            image: Person3.src,
        },
        {
            name: "Ethan Reed",
            role: "Manager",
            image: Person4.src,
        },
        {
            name: "Malik Abdul Wahab",
            role: "Designer",
            image: Person5.src,
        },
    ];

    return (
        <div className="bg-white container space-y-20">
            <div className="text-center border-t border-[#FEF9F8] pt-8">
                <h1 className="mb-4 text-black">
                    Ready to Experience Smarter Business Automation?
                </h1>
                <p className="text-black mb-8 max-w-2xl mx-auto">
                    See how Saysri.ai can help your team work faster and smarter.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <button className="bg-[#8CB183] text-white px-6 py-3 rounded-xl font-semibold border-2 border-transparent hover:bg-transparent hover:text-[#8CB183] hover:border-[#8CB183] transition hover:cursor-pointer">
                        BOOK A FREE DEMO
                    </button>
                    <button className="bg-transparent border-2 border-transparent text-black px-6 py-3 rounded-xl font-bold hover:bg-black hover:text-white transition hover:cursor-pointer">
                        TALK TO AN EXPERT →
                    </button>
                </div>
            </div>

            <div className="mx-auto relative z-10">
                <div className="mb-12 md:px-14 flex flex-col md:flex-row justify-center md:gap-10">
                    <h1 className="mb-4">
                        About the founders
                    </h1>
                    <p className="">
                        Behind every Saysri algorithm is a team obsessed with empathy.<br></br> We’re not building bots — we’re building better ways for humans to connect.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="w-full mx-auto mb-4 overflow-hidden  ">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-70 object-cover rounded-t-2xl"
                                />
                            </div>
                            <h6 className="font-normal text-black">{member.name}</h6>
                            <p className="">{member.role}</p>
                        </div>
                    ))}
                </div>

                {/* <div className="relative flex justify-center items-center ">
                    <div className="absolute text-[160px] font-bold text-gray-300 opacity-30 select-none">
                        Coming Soon
                    </div>

                    <div className="relative text-black px-6 py-6 rounded-2xl z-10 text-center space-y-4">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            Hiring is just the beginning.
                        </h1>
                        <p className="mx-auto">
                            We’re exploring AI solutions that help companies retain, develop, and empower people throughout their journey.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
