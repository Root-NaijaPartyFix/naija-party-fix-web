const LatestNews = () => {
  return (
    <div className="bg mb-[5rem] rounded-sm bg-[#0C2637] p-[2.5rem]">
      <div className="flex flex-col items-center justify-center gap-[2rem] text-white">
        <h2 className="text-[1.5rem] font-bold">LATEST NEWS</h2>
        <div className="flex w-full flex-col gap-[1.5rem] sm:flex-row lg:w-[95%]">
          <div className="flex flex-col text-start">
            <div className="mb-[1rem] w-full border-b-2 border-gray-400"></div>
            <p className="mb-2 text-[16px] font-bold">
              Culinary creativity : The Signature dishes for soiree has been
              labelled ......
            </p>
            <p className="text-[15px] text-gray-400">
              Culinary creativity : The Signature dishes for soiree has been
              labelled by public as best.
            </p>
          </div>
          <div className="flex flex-col text-start">
            <div className="mb-[1rem] w-full border-b-2 border-gray-400"></div>
            <p className="mb-2 text-[16px] font-bold">
              Events Planning Pitfalls to Avoid: Planning an event......
            </p>
            <p className="text-[15px] text-gray-400">
              Culinary creativity : The Signature dishes for soiree has been
              labelled by public as best.
            </p>
          </div>
          <div className="flex flex-col text-start">
            <div className="mb-[1rem] w-full border-b-2 border-gray-400"></div>
            <p className="mb-2 text-[16px] font-bold">
              Soiree is the best and most most affordable vendor......
            </p>
            <p className="text-[15px] text-gray-400">
              Culinary creativity : The Signature dishes for soiree has been
              labelled by public as .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
