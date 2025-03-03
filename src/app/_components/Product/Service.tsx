import Image from "next/image";
import { ProductDatas } from "public/Datas";

const Service = () => {
  return (
    <div className="mb-[5rem]">
      <h2 className="text-center text-[1.4rem] font-bold text-white md:text-[1.7rem]">
        Service Package
      </h2>

      <div className="flex flex-col justify-center gap-5 text-center sm:flex-row">
        {ProductDatas.ServicePackage.map((datas) => (
          <div
            key={datas.id}
            className="bg-lightGray flex flex-col gap-3 rounded-lg p-5"
          >
            <p className="mb-1 text-center text-[18px] font-medium text-brown">
              {datas.title}
            </p>
            <div className="flex flex-col gap-1 text-left font-medium">
              <p> {datas.nums} Consultation hours</p>
              <p> {datas.nums} Templates</p>
              <p> {datas.nums} Images</p>
              <p> Unliited access file</p>
            </div>
            <p className="text-center text-[18px] font-semibold text-brown">
              {datas.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
