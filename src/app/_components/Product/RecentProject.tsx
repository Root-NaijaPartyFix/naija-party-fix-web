import Image from "next/image";

const RecentProject = () => {
  return (
    <div>
      <h2 className="mb-[3rem] text-center text-[1.4rem] font-bold text-white md:text-[1.7rem]">
        Categories
      </h2>
      <div className="-z-20 mb-[2rem] flex h-[250px] w-full gap-2 p-[5px] sm:h-[300px] sm:p-0 md:h-[400px] lg:h-[500px]">
        {/* Left Column - Two Images */}
        <div className="flex w-1/3 flex-col gap-2">
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
        <div className="flex-1">
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

      <div className="-z-20 mb-[5rem] flex h-[250px] flex-row-reverse gap-2 p-[5px] sm:h-[300px] sm:px-0 md:h-[400px] lg:h-[500px]">
        {/* Left Column - Two Images */}
        <div className="flex w-1/3 flex-col gap-2">
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
        <div className="flex-1">
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
    </div>
  );
};

export default RecentProject;
