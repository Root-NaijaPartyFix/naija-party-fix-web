import Image from "next/image";
import ReusableButton from "./Button";

const Card = ({ className, length }: { className: string; length: number }) => {
  return (
    <>
      {Array.from({ length }, (_, index) => (
        <div
          key={index}
          className="max-w-xs rounded-lg bg-[#8A8A8A] p-4 shadow-md lg:max-w-sm"
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
            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              Card Title {index + 1}
            </h2>
            <p className="mt-2 text-gray-600">
              This is a short description or paragraph about the content of the
              card.
            </p>
            <ReusableButton
              className={`hover:bg-brown-700 mt-4 w-full rounded-md px-6 py-2 text-white sm:w-2/3 ${className}`}
            >
              Learn More
            </ReusableButton>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
