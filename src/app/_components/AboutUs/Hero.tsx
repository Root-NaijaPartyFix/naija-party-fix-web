import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative h-[500px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1561912774-79769a0a0a7a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Your trusted partners for creating unforgetable events
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
