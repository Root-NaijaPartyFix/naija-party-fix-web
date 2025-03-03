import Image from "next/image";
import { HomeDatas } from "public/Datas";

const TopVendor = () => {
  return (
    <div className="mb-[5rem]">
      <h2 className="my-5 mb-6 mt-12 text-center font-clashDisplay text-3xl font-bold tracking-widest text-white">
        Events we cater
      </h2>
      <div className="mx-auto flex flex-col items-center justify-center gap-6 sm:w-full sm:flex-row">
        {HomeDatas.Vendors.map((datas) => (
          <div
            key={datas.id}
            className="flex max-w-60 flex-col items-center justify-center gap-6 rounded-sm border p-3"
          >
            <Image
              src={datas.img}
              className="object-cover"
              alt={datas.text}
              height={50}
              width={50}
            />
            <div className="text-center">
              <p className="mb-1 text-[15px] text-gray-100">{datas.title}</p>
              <p className="text-[12px] text-gray-300">{datas.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopVendor;
