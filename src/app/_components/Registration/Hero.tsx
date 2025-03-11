import Image from "next/image";

const RegisterHero = () => {
  return (
    <section className="relative h-[80vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <h1 className="text-left text-3xl font-bold md:text-6xl">
            Login Here
          </h1>
          <p className="mt-4 text-left text-lg text-gray-200 md:text-xl">
            Your data to personalized content
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterHero;
