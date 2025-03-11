import HoverImage from "../HoverImage";

const EventCater = () => {
  return (
    <div className="mx-auto mb-20 w-[100%] rounded-lg bg-bgDeep px-4 py-10 text-white">
      <h2 className="mb-6 text-center font-clashDisplay text-3xl font-bold tracking-widest">
        Events we cater
      </h2>
      <div className="overflow-hidden">
        <div
          className="relative grid h-60 gap-3 rounded-md sm:h-96 md:h-[500px] lg:h-[700px]"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gridTemplateRows: "repeat(2, 1fr)",
          }}
        >
          {/* Images */}
          <div className="relative col-span-1 row-span-2 h-full">
            <HoverImage
              src="/images/Home/wedding.png"
              alt="Project Image 1"
              className="h-full w-full"
              text="Weddings and Events"
            />
          </div>
          <div className="relative col-span-2 row-span-1 h-full">
            <HoverImage
              src="/images/Home/coperate.png"
              alt="Project Image 1"
              className="h-full w-full"
              text="Corporate"
            />
          </div>
          <div className="relative col-span-1 row-span-1 h-full">
            <HoverImage
              src="/images/Home/parties.png"
              alt="Project Image 1"
              className="h-full w-full"
              text="Parties"
            />
          </div>
          <div className="relative col-span-1 row-span-1 h-full">
            <HoverImage
              src="/images/Home/social-event.png"
              alt="Project Image 1"
              className="h-full w-full"
              text={`Social  Events`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCater;
