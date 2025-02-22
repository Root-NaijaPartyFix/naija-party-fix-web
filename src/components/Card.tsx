import Image from "next/image";
import ReusableButton from "./Button";

const Datas = [
  {
    id: 1,
    title: "Catering Services For Fabulous Cooperate Events......",
    text: "Our delicacies has been the best over the years with  sumptuous meals.",
    btn: "Cooperate Catering Services",
  },
  {
    id: 2,
    title: "Planning a wedding menu can be Daunting...",
    text: "Our delicacies has been the best over the years with sumptuous meals.",
    btn: "Decorations",
  },
  {
    id: 3,
    title: "Exquisite Appetizers",
    text: "Our delicacies has been the best over the years with  sumptuous meals.",
    btn: "Catering Services",
  },
  {
    id: 4,
    title: "Sensational Flavor Explosion in One Plate",
    text: "Our delicacies has been the best over the years with sumptuous meals.",
    btn: "Photography",
  },
  {
    id: 5,
    title: "Simple and Sophisticated We Have it All",
    text: "Our delicacies has been the best over the years with sumptuous meals.",
    btn: "Photography",
  },
  {
    id: 6,
    title: "Catering Services For Fabulous Cooperate Events......",
    text: "Our delicacies has been the best over the years with sumptuous meals.",
    btn: "Catering",
  },
];

interface Prop {
  selectedFilter?: string;
  num?: number;
}

const Card = ({ selectedFilter, num }: Prop) => {
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
          className="h-fit max-w-xs rounded-lg border border-gray-200 bg-gray-300 shadow-sm lg:max-w-sm dark:border-gray-700 dark:bg-gray-800"
        >
          <div>
            <Image
              src={`/images/blog/image-${index + 1}.jpg`}
              alt={`Card Image ${index + 1}`}
              width={500}
              height={500}
              className="-z-10 rounded-t-md object-cover"
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.text}
            </p>
            <button
              type="button"
              className="dark:hover:[var(--primary-hover)] inline-flex items-center rounded-lg bg-[var(--primary-color)] px-3 py-2 text-center text-sm font-medium text-white hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-4 focus:ring-[var(--primary-hover)] dark:bg-[var(--primary-color)] dark:focus:ring-[var(--primary-hover)]"
            >
              {data.btn}
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

// <div
//   key={data.id}
//   className="h-fit max-w-xs rounded-lg bg-[#989898] p-4 shadow-md lg:max-w-sm"
// >
//   <div className="flex flex-col text-start">
//     <Image
//       src={`/images/blog/image-${index + 1}.jpg`}
//       alt={`Card Image ${index + 1}`}
//       width={350}
//       height={250}
//       className="rounded-t-md object-cover"
//     />
//     <h5 className="mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-800">
//       {data.title}
//     </h5>
//     <p className="mb-3 text-gray-700">{data.text}</p>
//     <ReusableButton
//       className={`inline-flex w-full items-center rounded-md bg-brown px-3 py-2 text-center text-sm font-medium text-white hover:bg-brown/80 focus:outline-none focus:ring-4 focus:ring-brown/30 sm:w-2/3`}
//     >
//       {data.btn}
//     </ReusableButton>
//   </div>
// </div>;
