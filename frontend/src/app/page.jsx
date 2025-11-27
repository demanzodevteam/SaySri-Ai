// import EnterpriseAI from "../components/Home/Enterprise";
// import MeetSaysri from "../components/Home/MeetSaysri";
// import FirstStep from "../components/Home/FirstStep";
// import About from "../components/Home/About";
// import LatestInAI from "../components/Home/LatestinAI";
// import TrustSlider from "../components/Home/TrustSlider";
// import VideoSlider from "../components/Home/VideoSlider";

// export default async function Home() {
//   const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
//   const res = await fetch(`${baseUrl}/api/home?populate[FirstSection][populate]=*`,
//     { next: { revalidate: 60 } } // optional caching
//   );
//   const json = await res.json();
  
//   const cms = json?.data?.attributes || {};
//   console.log(cms)
//   return (
//     <main className="flex w-full flex-col items-center justify-between ">
//       <EnterpriseAI cms={cms.FirstSection} />
//       <MeetSaysri cms={cms.meetSaysri} />
//       <TrustSlider cms={cms.trustSlider} />
//       <FirstStep cms={cms.firstStep} />
//       <VideoSlider cms={cms.videoSlider} />
//       <About cms={cms.about} />
//       <LatestInAI cms={cms.latestInAI} />
//     </main>
//   );
// }




import Image from "next/image";
import EnterpriseAI from "../components/Home/Enterprise";
import MeetSaysri from "../components/Home/MeetSaysri";
import FirstStep from "../components/Home/FirstStep"
import About from "../components/Home/About"
import LatestInAI from "../components/Home/LatestinAI"
import TrustSlider from "../components/Home/TrustSlider"
import VideoSlider from "../components/Home/VideoSlider";
import { strapiURL} from "../../lib/strapi";


export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between ">
        <EnterpriseAI />
        <MeetSaysri />
        <TrustSlider />
        <FirstStep />
        <VideoSlider />
        <About />
        <LatestInAI />
    </main>
  );
}
