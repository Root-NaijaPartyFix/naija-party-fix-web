"use client";
import Card from "../_components/Card";
import { useState } from "react";
import LatestNews from "../_components/Blog/LatestNews";

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
    <main className="-z-50 bg-gradient-to-b from-[#0C2637] to-[#0C2637]/50 py-[6rem]">
      <div className="container mx-auto max-w-7xl">
        {/* Child Divs */}
        <div className="mb-[2rem] flex gap-4 overflow-x-auto border border-b-gray-200 border-t-gray-200 p-2 shadow-sm sm:justify-center">
          {filterBtn.map(({ id, text }) => (
            <button
              key={id}
              onClick={() => setSelectedFilter(text)}
              className={`rounded-md border-2 border-red-500 px-4 py-2 text-white ${
                selectedFilter === text ? "bg-red-500" : ""
              }`}
            >
              <p className="text-center">{text}</p>
            </button>
          ))}
        </div>
        <div className="mb-[5rem] flex flex-wrap justify-center gap-6">
          <Card selectedFilter={selectedFilter} />
        </div>

        <LatestNews />
      </div>
    </main>
  );
};

export default BlogPage;
