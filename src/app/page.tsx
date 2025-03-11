import { Box } from "@radix-ui/themes";
import Image from "next/image";
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

          <div className="relative mt-[3rem] h-[400px] w-full">
            <Image
              src="/images/Home/map.png"
              alt="Background"
              sizes="100%"
              fill
              className="absolute inset-0 object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <p className="text-lg">Explore Vendor Locations Near You</p>

              <div className="relative mt-4 flex items-center justify-center">
                <Image
                  src="/images/Home/location.png"
                  alt="Location Icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
