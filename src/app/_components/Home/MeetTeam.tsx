import Image from "next/image";
import { HomeDatas } from "public/Datas";
import ReusableButton from "~/app/_components/Button";
const MeetTeam = () => {
  return (
    <div className="gap-x--3 mb-[5rem] flex flex-col items-center justify-center p-10 px-3 py-2 text-center">
      <p className="my-2 font-clashDisplay font-medium md:text-[20px]">
        Meet Incredible People
      </p>
      <h2 className="text-[1.5rem] font-bold sm:text-[1.5rem] md:text-[2rem]">
        Our Team
      </h2>
      <div className="mb-[3rem] mt-7 flex flex-1 flex-col items-center justify-center gap-7 text-center sm:flex-row md:mb-[4rem]">
        {HomeDatas.Staffs.map((data, i) => {
          return (
            <div
              key={i}
              className={`flex w-full flex-col flex-wrap items-center justify-center gap-y-[0.3rem] ${i === 1 || i == 3 ? "sm:mt-[3rem]" : ""} `}
            >
              <Image
                src={data.img}
                className={`object-cover`}
                alt={data.name}
                height={200}
                width={200}
              />
              <p className="text-[16px] font-bold">{data.name}</p>
              <p className="text-[12px] font-light text-gray-400">
                {data.position}
              </p>
            </div>
          );
        })}
      </div>
      <p className="my-4 font-bold">
        Call us now +234-5678-789-90 Or request for a quote
      </p>
      <ReusableButton className="bg-brown text-white hover:border-brown hover:bg-white hover:text-brown">
        REQUEST A QUOTE
      </ReusableButton>
    </div>
  );
};

export default MeetTeam;
