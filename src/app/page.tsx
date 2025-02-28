import { Box } from "@radix-ui/themes";
import HeroSection from "~/app/_components/Home/HomeHeroSection";
import BookToday from "./_components/Home/BookToday";
import EventCater from "./_components/Home/EventCater";
import LatestNews from "./_components/Home/LatestNews";
import MeetTeam from "./_components/Home/MeetTeam";
import Satisfaction from "./_components/Home/Satisfaction";
import VendorRatings from "./_components/Home/VendorRatings";
import { Poppins } from "./styles/fonts";
export default async function Home() {
  return (
    <div className={`${Poppins.className}`}>
      {/* Hero */}
      <HeroSection />

      <div className="mx-auto max-w-6xl">
        <Box>
          {/* Event Cater */}
          <EventCater />

          {/* Book Today section */}
          <BookToday />

          {/* Satisfaction guarantee */}
          <Satisfaction />

          {/* meet our team section */}
          <MeetTeam />

          {/* wecdding vendor ratings */}
          <VendorRatings />

          {/* Latest News */}
          <LatestNews />
        </Box>
      </div>
    </div>
  );
}
