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

      <Container maxWidth={"1380px"}>
        <div className="m-auto flex w-full flex-col justify-center gap-y-[2rem] text-center sm:w-full">
          <OurStory />
          <VendorRatings />
          <Work />

          {/* Third component */}
          {/* <div className="flex flex-wrap items-center justify-center gap-7 p-[5px] sm:p-6 lg:flex-nowrap">
            <div className="flex max-w-lg flex-col gap-5 text-center">
              <h2 className="text-2xl font-bold text-[#C1121F]">
                WHAT &nbsp; MATTERS&nbsp; TO&nbsp; US
              </h2>
              <p className="tex-[12px] text-gray-600">
                We provide specialized services to enhance and support events,
                such as catering, decorations ,photography. entertainment and
                event planning. Plenty of vegetarians and vegan options.
              </p>
              <div className="m-auto max-w-[250px]">
                <ReusableButton className="rounded-full border bg-brown px-[2.5rem] py-[.5rem] text-center text-[13px] font-medium text-white hover:border-brown hover:bg-white hover:text-brown sm:text-[16px]">
                  REQUEST A QUOTE
                </ReusableButton>
              </div>
            </div>

            <div className="relative -z-20 w-full max-w-sm">
              <Image
                src="/images/Home/img-1.jpg"
                alt="Feature Illustration"
                width={300}
                height={300}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div> */}

          {/* <div className="-z-20 flex h-[250px] w-full p-[5px] sm:h-[300px] sm:p-0 md:h-[400px] lg:h-[600px]">
            <div className="flex w-1/3 flex-col gap-4">
              <div className="relative flex-1">
                <Image
                  src="/images/about/img5.png"
                  alt="Image 1"
                  sizes="100%"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative flex-1">
                <Image
                  src="/images/about/img4.png"
                  alt="Image 2"
                  sizes="100%"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="ml-4 flex-1">
              <div className="relative h-full w-full">
                <Image
                  src="/images/about/img6.png"
                  alt="Image 3"
                  sizes="100%"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div> */}

          {/* <div className="-z-20 mb-bom flex h-[250px] flex-row-reverse p-[5px] sm:h-[300px] sm:px-0 md:h-[400px] lg:h-[600px]">
            <div className="flex w-1/3 flex-col gap-4">
              <div className="relative flex-1">
                <Image
                  src="/images/about/img3.png"
                  alt="Image 1"
                  sizes="100%"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="relative flex-1">
                <Image
                  src="/images/about/img2.png"
                  alt="Image 2"
                  sizes="100%"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="mr-4 flex-1">
              <div className="relative h-full w-full">
                <Image
                  src="/images/about/img1.png"
                  alt="Image 3"
                  sizes="100%"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default page;
