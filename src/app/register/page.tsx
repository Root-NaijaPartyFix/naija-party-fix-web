import React from "react";
import { Poppins } from "../styles/fonts";
import GeneralOverview from "../_components/Registration/GeneralOverview";
import DownloadMobileApp from "../_components/Registration/DownloadMobileApp";
import RegisterHero from "../_components/Registration/Hero";

const page = () => {
  return (
    <div
      className={`${Poppins.className} -z-50 bg-gradient-to-b from-[#0C2637] to-[#0C2637]/50 pb-[6rem]`}
    >
      <RegisterHero />
      <div className="mx-auto max-w-7xl">
        <GeneralOverview />

        <DownloadMobileApp />
      </div>
    </div>
  );
};

export default page;
