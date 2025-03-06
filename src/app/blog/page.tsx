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
    <main className="-z-50 bg-gradient-to-b from-[#0C2637] to-[#0C2637]/50 pb-[6rem]">
      <div className="container mx-auto">
        {/* Child Divs */}
        <div className="mb-[2rem] flex gap-4 overflow-x-auto border border-b-gray-200 border-t-gray-200 p-2 shadow-sm sm:justify-center">
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
        <div className="[grid-template-columns:repeat(auto-fit, minmax(300px,1fr))] mb-bom grid max-w-7xl gap-6 px-4">
          <Card selectedFilter={selectedFilter} />
        </div>

        {/*  */}
        <div className="mx-auto mb-bom flex max-w-4xl flex-col items-center justify-center p-6">
          {/* Title */}
          <h1 className="mb-4 text-center text-3xl font-bold text-brown">
            Browse & Shortlist Vendors
          </h1>

          <div className="mb-[2.5rem] hidden border-2 border-brown bg-transparent px-8 py-3 text-brown">
            shortlist{" "}
          </div>

          {/* Flex Container with Nested Divs */}
          {/* <div className="flex flex-col items-center justify-center gap-[3rem] sm:flex-row">
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
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
