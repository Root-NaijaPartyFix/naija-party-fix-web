import Image from "next/image";
import { ProductDatas } from "public/Datas";

const Category = () => {
  return (
    <div className="mb-[5rem] text-white">
      <div className="mt-[7rem] text-center">
        <h2 className="text-[1.4rem] font-bold md:text-[1.7rem]">Categories</h2>
        <p>Explore our curated selection of service</p>
      </div>
      <div className="flex flex-col justify-center gap-5 text-center sm:flex-row">
        {ProductDatas.Categories.map((datas) => (
          <div key={datas.id} className="flex flex-col gap-1">
            <Image
              src={datas.img}
              className="rounded-sm object-cover"
              alt={datas.text}
              height={400}
              width={400}
            />
            <div className="max-w-[13rem] py-3 text-center">
              <p className="mb-1 text-left text-[16px] font-medium text-gray-100">
                {datas.title}
              </p>
              <p className="text-left text-[13px] text-gray-300">
                {datas.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
