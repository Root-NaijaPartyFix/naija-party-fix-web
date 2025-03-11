import Image from "next/image";
import React from "react";
import RegisterForm from "./RegisterForm";

const GeneralOverview = () => {
  return (
    <div className="mt-[7rem] flex h-full flex-col items-center justify-center gap-6 rounded-md bg-bgDeep px-4 py-14 shadow-md sm:flex-row sm:items-start sm:gap-8 md:py-20 lg:gap-10 lg:py-28">
      {/* Left Content */}
      <div className="h-full max-w-sm flex-1 lg:max-w-md">
        <div>
          <p className="text-sm text-gray-300">About NaijaPartyFix</p>
          <h3 className="mb-2 text-2xl font-semibold text-gray-200">
            General Overview
          </h3>
        </div>
        <p className="text-sm text-gray-300">
          NaijaPartyFix is poised to become the go-to destination for
          unforgettable parties, concerts, and events in Nigeria. Join us on
          this incredible journey as we redefine the party experience in Naija.
        </p>
        {/* Image Wrapper */}
        <div className="relative mt-4 w-full overflow-hidden rounded-lg border border-gray-400">
          <Image
            src="https://images.unsplash.com/photo-1521478706270-f2e33c203d95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="overview"
            width={500}
            height={350}
            className="object-cover"
          />
        </div>
      </div>
      {/* Right Content (Form) */}
      <div className="h-auto max-w-sm flex-1 lg:max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
};

export default GeneralOverview;
