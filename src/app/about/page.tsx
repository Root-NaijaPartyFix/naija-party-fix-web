import { Container } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import ReusableButton from "~/app/_components/Button";
import OurStory from "../_components/AboutUs/Story";
import AboutHero from "../_components/AboutUs/Hero";
import Work from "../_components/AboutUs/Work";
import VendorRatings from "../_components/AboutUs/VendorRatings";

const page = () => {
  return (
    <div className="-z-50 bg-gradient-to-b from-[#0C2637] to-[#0C2637]/50 pb-[6rem]">
      <AboutHero />

      <div className="mx-auto max-w-7xl">
        <div className="m-auto flex w-full flex-col justify-center gap-y-[2rem] text-center sm:w-full">
          <OurStory />
          <VendorRatings />
          <Work />
        </div>
      </div>
    </div>
  );
};

export default page;
