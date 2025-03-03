import Image from "next/image";
import { HomeDatas } from "public/Datas";

const EventPlan = () => {
  return (
    <div className="mb-[5rem]">
      <h2 className="my-5 mb-6 mt-12 text-center font-clashDisplay text-3xl font-bold tracking-widest text-white">
        Events Planing Tips
      </h2>
      <div className="mx-auto flex flex-col items-center justify-center gap-6 sm:flex-row">
        {HomeDatas.EventPlan.map((datas) => (
          <div
            key={datas.id}
            className="flex max-w-72 items-center justify-center gap-3"
          >
            <Image
              src={datas.img}
              className="object-cover"
              alt={datas.text}
              height={150}
              width={150}
            />
            <div className="max-w-[13rem] py-3 text-center">
              <p className="mb-1 text-left text-[17px] font-medium text-gray-100">
                {datas.title}
              </p>
              <p className="text-left text-[14px] text-gray-300">
                {datas.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPlan;
