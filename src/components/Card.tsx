import Image from "next/image";
import ReusableButton from "./Button";

const Datas = [
  {
    id: 1,
    title: "Catering Services For Fabulous Cooperate Events......",
    text: "Our delicacies has been the best over the years with  sumptuous meals .......",
    btn: "Cooperate Catering Services",
  },
  {
    id: 2,
    title: "Planning a wedding menu can be Daunting...",
    text: "Our delicacies has been the best over the years with sumptuous meals .......",
    btn: "Decorations",
  },
  {
    id: 3,
    title: "Exquisite Appetizers",
    text: "Our delicacies has been the best over the years with  sumptuous meals .......",
    btn: "Catering Services",
  },
  {
    id: 4,
    title: "Sensational Flavor Explosion in One Plate",
    text: "Our delicacies has been the best over the years with sumptuous meals .......",
    btn: "Photography",
  },
  {
    id: 5,
    title: "Simple and Sophisticated We Have it All",
    text: "Our delicacies has been the best over the years with sumptuous meals .......",
    btn: "Photography",
  },
  {
    id: 6,
    title: "Catering Services For Fabulous Cooperate Events......",
    text: "Our delicacies has been the best over the years with sumptuous meals .......",
    btn: "Catering",
  },
];

const Card = ({ selectedFilter }: { selectedFilter: string }) => {
  // Filter Datas based on selectedFilter
  const filteredDatas =
    selectedFilter === "All"
      ? Datas
      : Datas.filter((data) => data.btn === selectedFilter);

  return (
    <>
      {filteredDatas.map((data, index) => (
        <div
          key={data.id}
          className="h-fit max-w-xs rounded-lg bg-[#989898] p-4 shadow-md lg:max-w-sm"
        >
          {/* Card Content */}
          <div className="flex flex-col text-start">
            <Image
              src={`/images/blog/image-${index + 1}.jpg`}
              alt={`Card Image ${index + 1}`}
              width={350}
              height={250}
              className="rounded-t-md object-cover"
            />
            <h5 className="mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-800">
              {data.title}
            </h5>
            <p className="mb-3 text-gray-700">{data.text}</p>
            <ReusableButton
              className={`inline-flex w-full items-center rounded-md bg-brown px-3 py-2 text-center text-sm font-medium text-white hover:bg-brown/80 focus:outline-none focus:ring-4 focus:ring-brown/30 sm:w-2/3`}
            >
              {data.btn}
            </ReusableButton>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
