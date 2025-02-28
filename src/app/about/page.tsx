import { Container } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import ReusableButton from "~/app/_components/Button";

const page = () => {
  const Works = [
    {
      id: 1,
      title: "Tell us about your event",
      text: "We provide specialized services to enhance and support events",
    },
    {
      id: 2,
      title: "Choose your package",
      text: "We provide specialized services to enhance and support events",
    },
    {
      id: 3,
      title: "Meet  your coordinator",
      text: "We provide specialized services to enhance and support events",
    },
    {
      id: 4,
      title: "Walk through and polish details",
      text: "We provide specialized services to enhance and support events",
    },
    {
      id: 5,
      title: "Put your trust in our team",
      text: "We provide specialized services to enhance and support events",
    },
  ];
  return (
    <>
      <div className="relative -z-40 mb-[2rem] h-[60vh] w-full bg-[#0C2637]">
        {/* Overlay Text Content */}
        <h1 className="text-2xl font-bold md:text-4xl">
          Glad you like to know about us
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-2xl font-bold md:text-4xl">
            Glad you like to know about us
          </h1>
        </div>
      </div>
      <Container maxWidth={"1380px"}>
        <div className="m-auto flex w-full flex-col justify-center gap-y-[2rem] text-center sm:w-[80%]">
          <h2 className="text-[1.5rem] font-bold text-[#C1121F] sm:text-[1rem] md:text-[1.5rem]">
            OUR WORK PROCESS
          </h2>
          <div className="lg:gap-[2.5rem]` m-auto mb-[5rem] flex flex-wrap items-center justify-center sm:gap-6">
            {Works.map(({ id, title, text }) => (
              <div
                key={id}
                className="flex w-full flex-col gap-3 border-blue-500 px-6 py-4 sm:w-[48%] lg:w-[30%]"
              >
                <h3 className="break-words text-center text-2xl font-bold">
                  {title}
                </h3>
                <div className="h-[1px] bg-gray-300" />
                <p className="text-[13px] text-gray-500">{text}</p>
              </div>
            ))}
          </div>

          {/* Third component */}
          <div className="flex flex-wrap items-center justify-center gap-7 p-[5px] sm:p-6 lg:flex-nowrap">
            {/* Text Container */}
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

            {/* Image Container */}
            <div className="relative -z-20 w-full max-w-sm">
              <Image
                src="/images/Home/img-1.jpg"
                alt="Feature Illustration"
                width={300}
                height={300}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Fourt component */}
          <div className="-z-20 flex h-[250px] w-full p-[5px] sm:h-[300px] sm:p-0 md:h-[400px] lg:h-[600px]">
            {/* Left Column - Two Images */}
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

            {/* Right Column - Single Image */}
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
          </div>

          <div className="-z-20 mb-[5rem] flex h-[250px] flex-row-reverse p-[5px] sm:h-[300px] sm:px-0 md:h-[400px] lg:h-[600px]">
            {/* Left Column - Two Images */}
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

            {/* Right Column - Single Image */}
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
          </div>

          {/* Testimonoes */}
          <div className="mb-[5rem] flex flex-col items-center justify-center border pb-5 sm:p-6 sm:pb-0">
            <h1 className="my-[1rem] text-3xl font-bold">
              Customer&nbsp;<span className="text-[#C1121F]">Reviews</span>
            </h1>
            <div className="-z-10 flex w-full flex-wrap items-center justify-center gap-2 sm:gap-5">
              <div className="flex w-[9rem] flex-col gap-1 rounded-sm bg-gray-100 p-2 drop-shadow-md sm:w-[12rem] md:max-w-[14rem]">
                <div className="flex flex-col items-start justify-start gap-x-1 gap-y-1 sm:flex-row">
                  <div className="flex justify-start gap-1">
                    <span className="rounded-full bg-gray-300 p-3"></span>
                    <p className="text-[18px] font-bold sm:mr-2">Sarah T.</p>
                  </div>
                  <span>⭐⭐⭐</span>
                </div>
                <p className="text-left text-[11px] text-gray-800 sm:text-[13px]">
                  Floral Fantasies transformed our venue beautifully.
                </p>
              </div>
              <div className="flex w-[9rem] flex-col gap-1 rounded-sm bg-gray-100 p-2 drop-shadow-md sm:w-[14rem] md:max-w-[14rem]">
                <div className="flex flex-col items-start justify-start gap-x-1 gap-y-1 sm:flex-row">
                  <div className="flex justify-start gap-1">
                    <span className="rounded-full bg-gray-300 p-3"></span>
                    <p className="text-[18px] font-bold sm:mr-2">Sarah T.</p>
                  </div>
                  <span>⭐⭐⭐⭐</span>
                </div>
                <p className="text-left text-[11px] text-gray-800 sm:text-[13px]">
                  Dreamy Cakes Bakery created the most delicious desserts. So
                  yummy and mouth watering..
                </p>
              </div>
              <div className="flex w-[9rem] flex-col gap-1 rounded-sm bg-gray-100 p-2 drop-shadow-md sm:w-[12rem] md:max-w-[14rem]">
                <div className="flex flex-col items-start justify-start gap-x-1 gap-y-1 sm:flex-row">
                  <div className="flex justify-start gap-1">
                    <span className="rounded-full bg-gray-300 p-3"></span>
                    <p className="text-[18px] font-bold sm:mr-2">Sarah T.</p>
                  </div>
                  <span>⭐⭐⭐</span>
                </div>
                <p className="text-left text-[11px] text-gray-800 sm:text-[13px]">
                  Habeeb was welcoming and warm in his greeting, he did a
                  wonderful work making the venue look nice
                </p>
              </div>
              <div className="flex w-[9rem] flex-col gap-1 rounded-sm bg-gray-100 p-2 drop-shadow-md sm:w-[12rem] md:max-w-[14rem]">
                <div className="flex flex-col items-start justify-start gap-x-1 gap-y-1 sm:flex-row">
                  <div className="flex justify-start gap-1">
                    <span className="rounded-full bg-gray-300 p-3"></span>
                    <p className="text-[18px] font-bold sm:mr-2">Sarah T.</p>
                  </div>
                  <span>⭐⭐⭐</span>
                </div>
                <p className="text-left text-[11px] text-gray-800 sm:text-[13px]">
                  Alex was amazing at capturing our special moments. And he did
                  a very good work at organizing our guests
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
