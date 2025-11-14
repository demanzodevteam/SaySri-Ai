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
        <div className="bg-white container">

            <div className="mx-auto relative z-10">
                <div className="mb-12 px-14 flex gap-10">
                    <h1 className="font-bold mb-4">
                        We’re Human About AI
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
                                    className="w-full h-70 object-cover grayscale rounded-t-2xl"
                                />
                            </div>
                            <h6 className="font-semibold text-gray-800">{member.name}</h6>
                            <p className="">{member.role}</p>
                        </div>
                    ))}
                </div>

                <div className="relative flex justify-center items-center ">
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
                </div>
            </div>
        </div>
    );
}
