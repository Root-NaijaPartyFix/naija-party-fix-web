import Image from "next/image";

const TrustIndicator = () => {
  return (
    <div className="mb-[5rem] flex items-center justify-center gap-4 text-white">
      <div className="rounded-sm bg-brown p-8 shadow-sm">
        <Image
          src={"/icons/product/brain.png"}
          className="object-cover"
          alt="display logo"
          height={100}
          width={100}
        />
      </div>

      {/* text */}
      <div className="flex flex-col gap-4">
        <div className="block">
          <h3 className="mb-1 text-[18px] font-bold">Trust Indicator</h3>
          <p className="text-[14px] text-gray-300">
            Recognitions that set us apart
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {/* first */}
          <div className="flex items-center justify-center gap-2">
            {/* icon */}
            <div className="flex items-center justify-center rounded-full p-3">
              <Image
                src={"/icons/product/icon1.png"}
                className="object-cover"
                alt="display logo"
                height={20}
                width={20}
              />
            </div>

            {/* side texts */}
            <div className="flex flex-col gap-1 border-b">
              <p className="text-[14px] font-medium">Top-Rated Vendors</p>
              <p className="text-[12px] text-gray-300">
                Selected based on customer feedback
              </p>
            </div>
          </div>
          {/* second */}
          <div className="flex items-center justify-center gap-2">
            {/* icon */}
            <div className="flex items-center justify-center rounded-full p-3">
              <Image
                src={"/icons/product/icon1.png"}
                className="object-cover"
                alt="display logo"
                height={20}
                width={20}
              />
            </div>

            {/* side texts */}
            <div className="flex flex-col gap-1 border-b">
              <p className="text-[14px] font-medium">Top-Rated Vendors</p>
              <p className="text-[12px] text-gray-300">
                Selected based on customer feedback
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicator;
