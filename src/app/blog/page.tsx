"use client";

import { Container } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import Card from "~/components/Card";

const filterBtn = [
  {
    id: 1,
    text: "All",
  },

  {
    id: 2,
    text: "Catering",
  },
  {
    id: 3,
    text: "Decorations",
  },
  {
    id: 4,
    text: "Photography",
  },
];
const BlogPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  return (
    <main>
      {/* hero section */}
      <div className="relative -z-10 mb-[5rem] h-[60vh] w-full">
        {/* Hero Image */}
        <Image
          src="/images/blog/hero.png"
          alt="image-hero"
          className="object-cover"
          fill
          priority
        />

        {/* Overlay Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 px-4 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            Welcome to Our Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Discover the latest trends, tips, and stories to inspire your
            journey.
          </p>
          <button className="hover:bg-brown-600 mt-6 rounded-md bg-brown px-6 py-2 text-white">
            Explore Now
          </button>
        </div>
      </div>
      <Container maxWidth={"1380px"} px={"5px"}>
        {/* Child Divs */}
        <div className="- mb-[2rem] flex gap-4 overflow-x-auto border border-b-gray-200 border-t-gray-200 p-2 shadow-sm sm:justify-center">
          {filterBtn.map(({ id, text }) => (
            <button
              key={id}
              onClick={() => setSelectedFilter(text)}
              className={`rounded-md border-2 border-red-500 p-2 ${
                selectedFilter === text ? "bg-red-500 text-white" : ""
              }`}
            >
              <p className="text-center">{text}</p>
            </button>
          ))}
        </div>

        {/*  */}
        <div className="mb-[5rem] flex flex-wrap justify-center gap-6">
          <Card selectedFilter={selectedFilter} />
        </div>

        {/*  */}
        <div className="mx-auto mb-[5rem] flex max-w-4xl flex-col items-center justify-center p-6">
          {/* Title */}
          <h1 className="mb-4 text-center text-3xl font-bold text-brown">
            Browse & Shortlist Vendors
          </h1>

          <div className="mb-[2.5rem] hidden border-2 border-brown bg-transparent px-8 py-3 text-brown">
            shortlist{" "}
          </div>

          {/* Flex Container with Nested Divs */}
          <div className="flex flex-col items-center justify-center gap-[3rem] sm:flex-row">
            {/* Child Div 1 */}
            <div className="flex max-w-sm flex-col items-center justify-center gap-3 space-y-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="rounded-full bg-[#8A8A8A] p-4">
                <span className="text-4xl">😊</span>
              </div>
              <div>
                <p className="text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Text Item 1
                </p>
                <p className="text-center text-gray-700 dark:text-gray-400">
                  Catering
                </p>
              </div>
              <p className="text-center text-[12px] font-bold text-gray-700 dark:text-gray-400">
                Contact: vendor@gmail.com
              </p>
            </div>

            <div className="flex max-w-sm flex-col items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="rounded-full bg-[#8A8A8A] p-4">
                <span className="text-4xl">😊</span>
              </div>
              <div>
                <p className="text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Text Item 1
                </p>
                <p className="text-center text-gray-700 dark:text-gray-400">
                  Photography
                </p>
              </div>
              <p className="text-center text-[12px] font-bold text-gray-700 dark:text-gray-400">
                Contact: vendor@gmail.com
              </p>
            </div>

            <div className="flex max-w-sm flex-col items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="rounded-full bg-[#8A8A8A] p-4">
                <span className="text-4xl">😊</span>
              </div>
              <div>
                <p className="text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Text Item 1
                </p>
                <p className="text-center text-gray-700 dark:text-gray-400">
                  Event Planning
                </p>
              </div>
              <p className="text-center text-[12px] font-bold text-gray-700 dark:text-gray-400">
                Contact: vendor@gmail.com
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default BlogPage;
