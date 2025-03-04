import Image from "next/image";
import { ProductDatas } from "public/Datas";

const Category = () => {
  return (
    <div className="bg-bgDeep/80 mb-20 rounded-lg p-8 text-white backdrop-blur-lg">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Categories</h2>
        <p className="mt-2 text-lg text-gray-300">
          Explore our curated selection of services
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {ProductDatas.Categories.map((datas) => (
          <div key={datas.id} className="flex flex-col items-center">
            {/* Image with Hover Effect */}
            <div className="overflow-hidden rounded-md">
              <Image
                src={datas.img}
                className="h-[350px] w-[350px] rounded-md object-cover transition-transform duration-300 hover:scale-105"
                alt={datas.text}
                height={300}
                width={300}
              />
            </div>

            {/* Text Content */}
            <div className="mt-3 max-w-[15rem] text-center">
              <p className="mb-1 text-lg font-semibold text-gray-100">
                {datas.title}
              </p>
              <p className="text-sm text-gray-300">{datas.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
