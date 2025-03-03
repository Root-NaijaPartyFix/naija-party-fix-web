import Image from "next/image";

const EventCater = () => {
  return (
    <div className="mx-auto mb-[5rem] mt-[2rem] w-[100%] text-white">
      <h2 className="my-5 mb-6 mt-12 text-center font-clashDisplay text-3xl font-bold tracking-widest">
        Events we cater
      </h2>

      {/* Four images */}
      {/* <div>
        <div
          className="relative grid w-auto gap-3 rounded-md"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gridTemplateRows: "repeat(2, 1fr)",
          }}
        >
          <div
            className="relative col-span-1 row-span-2"
            // style={{ aspectRatio: "2 / 1" }}
          >
            <Image
              src={"/images/Home/wedding.png"}
              alt="Image 1"
              className="object-cover"
              fill
              sizes="100%"
            />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center font-bold text-white">
              Weddings
            </p>
          </div>
          <div
            className="relative col-span-2 row-span-1"
            style={{ aspectRatio: "2 / 1" }}
          >
            <Image
              src={"/images/Home/coperate.png"}
              alt="Image 1"
              className="object-cover"
              sizes="100%"
              fill
            />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center font-bold text-white">
              Cooperate
            </p>
          </div>
          <div
            className="relative col-span-1 row-span-1"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src={"/images/Home/parties.png"}
              alt="Image 1"
              className="object-cover"
              sizes="100%"
              fill
            />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center font-bold text-white">
              Parties
            </p>
          </div>
          <div
            className="relative col-span-1 row-span-1"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src={"/images/Home/social-event.png"}
              alt="Image 1"
              className="-ml-[1px] object-cover"
              sizes="100%"
              fill
            />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center font-bold text-white">
              Social <br />
              Events{" "}
            </p>
          </div>
        </div>
      </div> */}

      <div className="overflow-hidden">
        <div
          className="relative grid h-60 gap-3 rounded-md sm:h-96 md:h-[500px]"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gridTemplateRows: "repeat(2, 1fr)",
          }}
        >
          {/* Images */}
          <div className="relative col-span-1 row-span-2 h-full">
            <Image
              src="/images/Home/wedding.png"
              alt="Weddings"
              className="h-full w-full object-cover"
              fill
              sizes="100%"
            />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center font-bold text-white">
              Weddings
            </p>
          </div>
          <div className="relative col-span-2 row-span-1 h-full">
            <Image
              src="/images/Home/coperate.png"
              alt="Corporate"
              className="h-full w-full object-cover"
              fill
              sizes="100%"
            />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center font-bold text-white">
              Corporate
            </p>
          </div>
          <div className="relative col-span-1 row-span-1 h-full">
            <Image
              src="/images/Home/parties.png"
              alt="Parties"
              className="h-full w-full object-cover"
              fill
              sizes="100%"
            />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center font-bold text-white">
              Parties
            </p>
          </div>
          <div className="relative col-span-1 row-span-1 h-full">
            <Image
              src="/images/Home/social-event.png"
              alt="Social Events"
              className="h-full w-full object-cover"
              fill
              sizes="100%"
            />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center font-bold text-white">
              Social <br />
              Events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCater;
