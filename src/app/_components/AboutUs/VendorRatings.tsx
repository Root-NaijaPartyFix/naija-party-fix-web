import { HomeDatas } from "public/Datas";
const VendorRatings = () => {
  return (
    <section className="container mx-auto pb-16">
      <h2 className="px-4 text-2xl font-bold text-white sm:text-3xl md:px-0 lg:text-4xl">
        The Data Doesn’t Deceive
      </h2>

      <div className="text mx-auto mt-4 grid w-full items-center gap-4 rounded-sm bg-brown p-5 text-center text-white [grid-template-columns:repeat(auto-fit,minmax(130px,1fr))] lg:p-10">
        {HomeDatas.HomeRatings.map((data, i) => (
          <div key={i} className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white/90 sm:text-2xl">
              {data.num}
            </h3>
            <p className="text-sm font-medium text-gray-300">{data.doings}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VendorRatings;
