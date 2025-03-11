const HeroSection = () => {
  return (
    <div className="mb-bom relative h-[90vh] bg-hero-image bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 px-4 text-center text-white">
        <h1 className="animate-fade-in text-3xl font-bold capitalize tracking-wide sm:text-4xl md:text-5xl">
          Let&apos;s plan your next event together
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
