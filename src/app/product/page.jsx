import WhyHiring from "../../components/WhyHiring";
import DataSheetImg from "../../../public/images/Datasheet.png"
import VibraHireSection from "../../components/VibraHeroSection";
import VibraProcess from "../../components/VibraProcess";
import WhyVibraHire from "../../components/WhyVibraHire";
import ChaosToClarity from "../../components/ChaosToClarity";

export default function Productpage() {
  const sectionOne = {
    title: "The VibraHire Intelligence Framework",
    description:
      "Scale Hiring. Reduce Bias. Improve Speed.",
    para:"VibraHire’s foundation is built on contextual learning, cognitive scoring, and autonomous orchestration combining logic with empathy at enterprise scale.",
    items: [
      { title: "AI Matchmaking Engine", text: "Matches candidates and roles using deep contextual models trained on enterprise data." },
      { title: "Integrated Online Assessment Platform", text: "Enables built-in skill, aptitude, and personality testing — no third-party dependency." },
      { title: "WhatsApp HR Assistant", text: "Automates communication, reminders, and feedback loops to improve candidate experience." },
      { title: "Adaptive Learning Layer", text: "Continuously improves recommendations with every successful hire or rejected match." },
      { title: "API-First Architecture", text: "Seamlessly integrates with ATS, CRM, or HRIS systems for unified hiring intelligence." },
    ],
    image: DataSheetImg.src,
  };
  const sectionTwo = {
    title: "The VibraHire Advantage",
    description:
      "Because precision, fairness, and intelligence should define every hire.",
    items: [
      { title: "AI-Powered Matchmaking", text: "Precision-driven role-to-candidate pairing using contextual scoring models." },
      { title: "Seamless Online Assessments", text: "Skill-based evaluation within the platform — no plugins, no dependencies." },
      { title: "Real-Time Candidate Engagement", text: "Instant HR communication through WhatsApp, ensuring a connected experience." },
      { title: "Enterprise-Grade Scalability", text: "Multi-tenant SaaS architecture designed for consultancies and corporates alike." },
      { title: "Data Security First", text: "Azure-native infrastructure ensures compliance, encryption, and end-to-end protection." },
    ],
    image: DataSheetImg.src,
  };
  return (
    <main className="flex w-full flex-col items-center justify-between ">
      <VibraHireSection />
      <WhyHiring {...sectionOne} bgColor="bg-white"reverse={false} />
      <VibraProcess />
      <WhyHiring {...sectionTwo} bgColor="bg-[#DFFFE7]" reverse={true} />
      <WhyVibraHire />
      <ChaosToClarity />
    </main>
  );
}
