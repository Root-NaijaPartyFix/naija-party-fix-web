import { Box, Container } from "@radix-ui/themes";
import React from "react";
import HeroSection from "~/components/HomeHeroSection";
import { Poppins } from "../styles/fonts";
import Image from "next/image";

function ProductPage() {
  return (
    <div className="">
      {/* Herosection */}
      <Box as="div" className={`${Poppins.className}`}>
        <HeroSection />

        <Container maxWidth={"1380px"}>
          {/* Featured Venture */}

          <div className="mx-auto mt-[5rem] w-[90%] border-2 border-gray-500 px-[] py-[3rem]">
            <div className="flex flex-col items-center justify-center gap-[1rem] bg-transparent">
              <div>
                <h2 className="text-[1.5rem] font-bold">Featured Vendors</h2>
              </div>

              <div className="relative -z-10 m-auto flex w-full flex-col justify-center gap-[1.5rem] text-start sm:w-[80%] sm:flex-row">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex h-[300px] w-full flex-col justify-between sm:w-1/3"
                  >
                    {/* Image container */}
                    <div className="relative h-[80%]">
                      <Image
                        src="/images/product/featured-cake-1.jpg"
                        alt={`Image ${idx + 1}`}
                        className="object-cover"
                        layout="fill"
                      />
                    </div>
                    {/* Text container */}
                    <div className="flex h-[20%] flex-col justify-center gap-y-1 px-2">
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

          {/*  */}
          <div className="mx-auto mb-[5rem] mt-[5rem] w-[90%] border-2 border-gray-500 px-[] py-[3rem]">
            <div className="flex flex-col items-center justify-center gap-[1rem] bg-transparent">
              <div>
                <h2 className="text-[1.5rem] font-bold">
                  Top Vendors by Category
                </h2>
              </div>

              <div className="relative -z-10 m-auto flex w-full flex-col justify-center gap-[1.5rem] text-start sm:w-[80%] sm:flex-row">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex w-full flex-row items-center justify-center gap-[1rem] sm:w-1/3 sm:flex-col"
                  >
                    {/* Image container */}
                    <div className="relative h-[150px] w-[150px]">
                      <Image
                        src="/images/product/featured-cake-1.jpg"
                        alt={`Image ${idx + 1}`}
                        className="object-cover"
                        layout="fill"
                      />
                    </div>
                    {/* Text container */}
                    <div className="flex flex-col justify-center gap-y-1 px-2 text-center">
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
          </div>
        </Container>
      </Box>
    </div>
  );
}

export default ProductPage;
