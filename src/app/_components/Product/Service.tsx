//

import { ProductDatas } from "public/Datas";

const Service = () => {
  return (
    <div className="bg-bgDeep mb-20 rounded-lg px-4 py-16">
      {/* Section Heading */}
      <h2 className="mb-10 text-center text-2xl font-bold text-white md:text-3xl">
        Service Package
      </h2>

      {/* Service Cards */}
      <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:grid-cols-3">
        {ProductDatas.ServicePackage.map((datas) => (
          <div
            key={datas.id}
            className="w-full max-w-sm rounded-lg bg-[#C4C4C4] p-8 shadow-lg transition-transform hover:scale-105 hover:bg-[#B0B0B0]"
          >
            <p className="mb-2 text-lg font-semibold text-brown">
              {datas.title}
            </p>

            <div className="flex flex-col gap-2 text-left text-sm font-medium text-gray-900">
              <p>🔥 {datas.nums} Consultation hours</p>
              <p>🔥 {datas.nums} Templates</p>
              <p>🔥 {datas.nums} Images</p>
              <p>🔥 Unlimited access to files</p>
            </div>

            <p className="mt-4 text-lg font-semibold text-brown">
              {datas.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
