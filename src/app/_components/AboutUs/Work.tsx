import { AboutUsDatas } from "public/Datas";

const Work = () => {
  return (
    <div className="container mx-auto pb-16">
      <h2 className="px-4 text-2xl font-bold text-white md:px-0 md:text-3xl lg:text-4xl">
        Our Work Process
      </h2>
      <div className="mt-4 grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
        {AboutUsDatas.Works.map(({ id, title, text }) => (
          <div key={id} className="flex w-full flex-col gap-3 px-6 py-4">
            <h3 className="break-words text-center text-xl font-semibold text-gray-300 sm:text-2xl">
              {title}
            </h3>
            <div className="h-[1px] bg-gray-300" />
            <p className="text-sm text-gray-300">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
