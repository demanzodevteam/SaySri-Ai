import Image from "next/image";
import EnterpriseAI from "../components/Home/Enterprise";
import MeetSaysri from "../components/Home/MeetSaysri";
import FirstStep from "../components/Home/FirstStep"
import About from "../components/Home/About"
import LatestInAI from "../components/Home/LatestinAI"
import TrustSlider from "../components/Home/TrustSlider"
import VideoSlider from "../components/Home/VideoSlider";
import WhyHiring from "../components/WhyHiring";
import Book from "../components/Book"
import ExperienceAI from "../components/ExperienceAI"
import Testimonial from "../components/Testimonials"


export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between ">
        <EnterpriseAI />
        <MeetSaysri />
        <TrustSlider />
        <FirstStep />
        <VideoSlider />
        {/* <Book /> */}
        {/* <Testimonial /> */}
        <About />
        {/* <ExperienceAI /> */}
        <LatestInAI />
    </main>
  );
}
