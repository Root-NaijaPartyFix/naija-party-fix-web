import { Box } from "@radix-ui/themes";
import HeroSection from "~/app/_components/Home/HomeHeroSection";
import EventCater from "./_components/Home/EventCater";
import EventPlan from "./_components/Home/EventPlan";
import MeetTeam from "./_components/Home/MeetTeam";
import Satisfaction from "./_components/Home/Satisfaction";
import TopVendor from "./_components/Home/TopVendor";
import { Poppins } from "./styles/fonts";

// import ClickableMap from "./_components/GeoMap";

export default async function Home() {
  return (
    <div
      className={`${Poppins.className} -z-50 bg-gradient-to-b from-[#0C2637] to-[#0C2637]/50 pb-[6rem]`}
    >
      {/* Hero */}

      <div className="mx-auto max-w-7xl">
        <Box>
          <HeroSection />
          {/* Event Cater */}
          <EventCater />

          {/* Top Vendors */}
          <TopVendor />

          {/* Satisfaction guarantee */}
          <Satisfaction />

          {/* Event Plan */}
          <EventPlan />

          {/* meet our team section */}
          <MeetTeam />

          {/* <InteractiveMap /> */}
          {/* <div className="">
            <h2 className="my-5 mb-6 mt-12 text-center font-clashDisplay text-3xl font-bold tracking-widest text-white">
              Interactive Map
            </h2>
            <ClickableMap />
          </div> */}
        </Box>
      </div>
    </div>
  );
}
