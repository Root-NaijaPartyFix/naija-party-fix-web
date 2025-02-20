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
    <Container maxWidth={"1380px"}>
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

      {/* Child Divs */}
      <div className="mb-[2rem] flex justify-center gap-4 overflow-x-auto border border-b-gray-200 border-t-gray-200 p-2 shadow-sm">
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

        <div className="mb-[2.5rem] border-2 border-brown bg-transparent px-8 py-3 text-brown">
          shortlist{" "}
        </div>

        {/* Flex Container with Nested Divs */}
        <div className="flex flex-col items-center justify-center gap-[3rem] sm:flex-row">
          {/* Child Div 1 */}
          <div className="flex flex-col items-center justify-center gap-3 space-y-2">
            <div className="rounded-full bg-[#8A8A8A] p-4">
              <span className="text-4xl">😊</span>
            </div>
            <div>
              <p className="text-brown-600 text-center font-bold">
                Text Item 1
              </p>
              <p className="text-brown-600 text-center">Text Item 1</p>
            </div>
            <p className="text-brown-600 text-center text-[12px] font-bold">
              Contact: vendor@gmail.com
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="rounded-full bg-[#8A8A8A] p-4">
              <span className="text-4xl">😊</span>
            </div>
            <div>
              <p className="text-brown-600 text-center font-bold">
                Text Item 1
              </p>
              <p className="text-brown-600 text-center">Text Item 1</p>
            </div>
            <p className="text-brown-600 text-center text-[12px] font-bold">
              Contact: vendor@gmail.com
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="rounded-full bg-[#8A8A8A] p-4">
              <span className="text-4xl">😊</span>
            </div>
            <div>
              <p className="text-brown-600 text-center font-bold">
                Text Item 1
              </p>
              <p className="text-brown-600 text-center">Text Item 1</p>
            </div>
            <p className="text-brown-600 text-center text-[12px] font-bold">
              Contact: vendor@gmail.com
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogPage;

// import Image from 'next/image';

// const CardComponent = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-6">
//       {/* Generate 6 Cards */}
//       {Array.from({ length: 6 }, (_, index) => (
//         <div
//           key={index}
//           className="max-w-sm bg-white rounded-lg shadow-md p-4"
//         >
//           {/* Card Content */}
//           <div className="flex flex-col items-center">
//             {/* Image */}
//             <Image
//               src="/path/to/your/image.jpg" // Replace with your image path
//               alt={`Card Image ${index + 1}`}
//               width={350} // Set your desired width
//               height={250} // Set your desired height
//               className="w-full h-48 object-cover rounded-t-md"
//             />

//             {/* Title */}
//             <h2 className="mt-4 text-xl font-semibold text-center text-gray-800">
//               Card Title {index + 1}
//             </h2>

//             {/* Paragraph */}
//             <p className="mt-2 text-center text-gray-600">
//               This is a short description or paragraph about the content of the card.
//             </p>

//             {/* Button */}
//             <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//               Learn More
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardComponent;
