import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="h-full w-full object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex h-full items-center justify-center p-4 text-center text-white">
        <div>
          <h1 className="text-4xl font-bold md:text-6xl">
            Welcome to Our Platform
          </h1>
          <p className="mt-4 text-lg text-gray-200 md:text-xl">
            Discover amazing experiences with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
