import Image from "next/image";
import EnterpriseAI from "../components/Enterprise";
import MeetSaysri from "../components/MeetSaysri";
import WhyHiring from "../components/WhyHiring";
import FirstStep from "../components/FirstStep"
import Book from "../components/Book"
import About from "../components/About"
import ExperienceAI from "../components/ExperienceAI"
import LatestInAI from "../components/LatestinAI"
import Testimonial from "../components/Testimonials"
// import ScrollTest from "../components/ScrollTest"


export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between ">
        <EnterpriseAI />
        <MeetSaysri />
        <WhyHiring />
        <FirstStep />
        <Book />
        <Testimonial />
        <About />
        <ExperienceAI />
        <LatestInAI />
        {/* <ScrollTest /> */}
    </main>
  );
}
