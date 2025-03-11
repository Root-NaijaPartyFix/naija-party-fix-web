import Image from "next/image";
import { ProductDatas } from "public/Datas";

const CustomerReview = () => {
  return (
    <div className="bg-bgDeep flex flex-col items-center justify-center rounded-md pb-5 sm:p-6 sm:pb-10">
      <h1 className="my-[1rem] mb-[2rem] text-3xl font-bold text-white">
        Customer&nbsp;<span className="text-brown">Reviews</span>
      </h1>
      <div className="-z-1 flex w-full flex-wrap items-center justify-center gap-4 sm:gap-5">
        {ProductDatas.Reviews.map((review, index) => (
          <div
            key={index}
            className="lg:w-[14rem ] flex w-[18rem] flex-col gap-2 rounded-lg bg-gray-100 p-4 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg sm:w-[15rem] md:w-[16rem]"
          >
            <div className="flex items-center gap-3">
              <Image
                src={review.img}
                alt="User profile"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-[16px] font-bold">{review.name}</p>
                <span className="text-yellow-500">{review.rating}</span>
              </div>
            </div>
            <p className="text-left text-[14px] text-gray-800">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
