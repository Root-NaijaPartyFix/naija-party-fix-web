import { HomeDatas } from "public/Datas";
const VendorRatings = () => {
  return (
    <div className="py py text mb-[5rem] grid w-full grid-cols-2 items-center gap-4 rounded-sm bg-brown p-5 text-center text-white sm:grid-cols-4">
      {HomeDatas.HomeRatings.map((data, i) => (
        <div key={i} className="flex flex-col items-center">
          <h3 className="text-[1rem] font-bold sm:text-[1.5rem]">{data.num}</h3>
          <p className="text-[.7rem] text-gray-200 sm:text-[1rem]">
            {data.doings}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VendorRatings;
