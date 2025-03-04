import ReusableButton from "~/app/_components/Button";

const BookToday = () => {
  return (
    <div className="mb-bom w-full rounded-sm bg-[#C1121F] px-3 py-[32px] text-white md:px-12">
      <div className="m-auto flex h-auto max-w-full flex-col items-center justify-center gap-4 text-center sm:gap-3 md:max-w-[456px]">
        <p className="font-medium md:text-2xl">BOOK TODAY!</p>
        <h2 className="text-[20px] font-bold md:text-[2rem]">
          Book Your Tasting session or Discuss Your Project
        </h2>
        <hr color="white" className="w-2/6" />
        <ReusableButton className="bg-white text-brown hover:border-white hover:bg-brown hover:text-white">
          BOOK YOUR DATE
        </ReusableButton>
      </div>
    </div>
  );
};

export default BookToday;
