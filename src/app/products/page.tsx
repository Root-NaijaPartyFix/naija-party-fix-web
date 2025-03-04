import { Box, Container } from "@radix-ui/themes";
import React from "react";
import HeroSection from "~/app/_components/Home/HomeHeroSection";
import { Poppins } from "../styles/fonts";
import Image from "next/image";
import Category from "../_components/Product/Category";
import Service from "../_components/Product/Service";
import TrustIndicator from "../_components/Product/TrustIndicator";
import RecentProject from "../_components/Product/RecentProject";
import PlanForm from "../_components/Product/PlanForm";
import CustomerReview from "../_components/Product/CustomerReview";

function ProductPage() {
  return (
    <div className="-z-50 flex flex-col items-center justify-center gap-[2rem] bg-gradient-to-b from-[#0C2637] via-[#0C2637]/50 to-[#0C2637]/70 py-[7rem]">
      {/* Herosection */}

      <div className={`mx-auto max-w-7xl ${Poppins.className}`}>
        {/* Featured Venture */}

        <Category />

        <Service />

        <TrustIndicator />

        <RecentProject />

        <PlanForm />

        <CustomerReview />
        {/* 
          <div className="mx-auto mt-[1rem] w-[100%] border-0 py-[3rem] sm:mt-[5rem] sm:border-2">
            <div className="flex flex-col items-center justify-center gap-[1rem] bg-transparent">
              <div>
                <h2 className="text-[1.4rem] font-bold md:text-[1.7rem]">
                  Featured Vendors
                </h2>
              </div>

              <div className="relative -z-10 m-auto flex w-full flex-col justify-center gap-[1.5rem] text-start sm:w-[80%] sm:flex-row">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex h-[300px] w-full flex-col justify-between gap-1 rounded-md shadow-md sm:w-1/3"
                  >
                    <div className="relative -z-10 h-[80%]">
                      <Image
                        src="/images/product/featured-cake-1.jpg"
                        alt={`Image ${idx + 1}`}
                        className="rounded-tl-md rounded-tr-md object-cover"
                        fill
                        sizes="100%"
                      />
                    </div>
                    <div className="mb-2 flex h-[20%] flex-col justify-center gap-y-1 px-2">
                      <p className="text-[11px] text-gray-400">
                        Photography by Alex
                      </p>
                      <p className="text-[14px] font-bold">
                        Photography by Alex
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mb-bom mt-[0] w-[100%] border-0 py-[3rem] sm:mt-[5rem] sm:border-2">
            <div className="flex flex-col items-center justify-center gap-[1rem] bg-transparent">
              <div>
                <h2 className="text-[1.4rem] font-bold md:text-[1.7rem]">
                  Top Vendors by Category
                </h2>
              </div>

              <div className="relative -z-10 m-auto flex w-full flex-col justify-center gap-[1.5rem] text-start sm:w-[80%] sm:flex-row">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex w-full flex-row items-center justify-center gap-2 rounded-md shadow-md hover:bg-gray-300 sm:w-1/3 sm:flex-col"
                  >
                    <div className="relative -z-10 h-[150px] w-[150px]">
                      <Image
                        src="/images/product/featured-cake-1.jpg"
                        alt={`Image ${idx + 1}`}
                        className="rounded-tl-md rounded-tr-md object-cover"
                        fill
                        sizes="100%"
                      />
                    </div>
                    <div className="mb-2 flex flex-col justify-center gap-y-1 px-2 text-center">
                      <p className="text-[14px] font-bold">
                        Photography by Alex
                      </p>
                      <p className="text-[11px] text-gray-400">
                        Photography by Alex
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default ProductPage;
