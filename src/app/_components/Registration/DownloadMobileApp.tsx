import Image from "next/image";
import React from "react";

const DownloadMobileApp = () => {
  return (
    <div className="mt-[5rem] flex flex-col items-center justify-center gap-4 rounded-md bg-gradient-to-b via-bgDeep/20 py-12 shadow-md hover:bg-bgDeep/10 sm:flex-row lg:gap-8 lg:py-24">
      <div className="flex max-w-sm flex-col items-center justify-center gap-2 rounded-lg border-4 border-gray-50 bg-gradient-to-b from-[#A54A95] to-[#3F1C39] px-20 py-36 lg:max-w-md lg:gap-16 lg:px-28 lg:py-44">
        <div className="relative">
          <Image
            src={"/images/Register/Naija.png"}
            width={50}
            height={50}
            className="mb-1 object-cover"
            alt="naija_logo"
          />
        </div>
        <p className="text-sm font-semibold">Naijapartyfix</p>
      </div>
      <div className="max-w-sm flex-1">
        <div className="flex flex-col gap-4 px-4 py-6">
          <h2 className="text-center text-2xl font-semibold text-gray-100 sm:text-left">
            DOWNLOAD APP & <br />
            GET THE VOUCHER!
          </h2>
          <p className="text-center text-gray-300 sm:text-left">
            Get 30% off for first transaction using Soiree mobile app for now.
          </p>
          <div className="flex gap-2">
            <Image
              src={"/images/Register/apple.png"}
              width={80}
              height={40}
              className="h-full w-full object-cover"
              alt="apple_download"
            />
            <Image
              src={"/images/Register/playstore.png"}
              width={80}
              height={40}
              className="h-full w-full object-cover"
              alt="playstore_download"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadMobileApp;
