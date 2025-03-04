import Image from "next/image";

const TrustIndicator = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center gap-10 text-white sm:flex-row">
      {/* Main Icon Box */}
      <div className="rounded-lg bg-brown p-16 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:p-12">
        <Image
          src={"/icons/product/brain.png"}
          className="object-cover"
          alt="display logo"
          height={100}
          width={100}
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-6">
        <div className="text-center sm:text-left">
          <h3 className="mb-2 text-xl font-bold">Trust Indicator</h3>
          <p className="text-gray-300">Recognitions that set us apart</p>
        </div>

        {/* Indicators List */}
        <div className="flex flex-col gap-4">
          {/* First Indicator */}
          <div className="flex items-center gap-4 p-3 transition-all duration-300 hover:rounded-lg hover:bg-white/10">
            {/* Icon */}
            <div className="flex items-center justify-center rounded-full bg-gray-700 p-3">
              <Image
                src={"/icons/product/icon1.png"}
                className="object-cover"
                alt="display logo"
                height={24}
                width={24}
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <p className="text-base font-medium">Top-Rated Vendors</p>
              <p className="text-sm text-gray-300">
                Selected based on customer feedback
              </p>
            </div>
          </div>

          {/* Second Indicator */}
          <div className="flex items-center gap-4 p-3 transition-all duration-300 hover:rounded-lg hover:bg-white/10">
            {/* Icon */}
            <div className="flex items-center justify-center rounded-full bg-gray-700 p-3">
              <Image
                src={"/icons/product/icon1.png"}
                className="object-cover"
                alt="display logo"
                height={24}
                width={24}
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-1 border-b border-white/20 pb-2">
              <p className="text-base font-medium">Top-Rated Vendors</p>
              <p className="text-sm text-gray-300">
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
