import Image from "next/image";
import { HomeDatas } from "public/Datas";

const MeetTeam = () => {
  return (
    <div className="mb-0 flex flex-col items-center justify-center rounded-md bg-[#162b40] p-10 px-3 py-2 pt-[1.5rem] text-center text-white md:mb-bom">
      <p className="font-clashDisplay font-medium md:text-[20px]">
        Meet Incredible People
      </p>
      <h2 className="text-[1.5rem] font-bold sm:text-[1.5rem] md:text-[2rem]">
        Our Team
      </h2>
      <div className="mb-[3rem] flex flex-col items-center justify-center gap-7 text-center sm:flex-row md:mb-[4rem]">
        {HomeDatas.Staffs.map((data, i) => (
          <div
            key={i}
            className={`relative flex w-full flex-col items-center justify-center gap-y-[0.3rem] transition-transform duration-300 hover:scale-105 ${i === 1 || i === 3 ? "sm:mt-[5rem]" : ""}`}
          >
            <div className="relative h-full rounded-full">
              <Image
                src={data.img}
                className="rounded-md object-cover"
                alt={data.name}
                height={250}
                width={250}
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-lg font-semibold text-white">
                  {data.position}
                </p>
              </div>
            </div>
            <p className="mt-3 text-[18px] font-bold">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTeam;
