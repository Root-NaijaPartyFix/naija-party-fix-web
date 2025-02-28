const HeroSection = () => {
  return (
    <div className="h-[90vh] bg-hero-image bg-cover bg-center bg-no-repeat">
      <div className="flex h-full flex-col justify-center bg-brown bg-opacity-10 pt-16 text-white">
        <div className="flex h-[60%] flex-col items-center justify-evenly">
          <p
            style={{
              wordSpacing: "5px",
              letterSpacing: "2px",
            }}
            className="font-poppin text-center text-3xl font-bold capitalize"
          >
            Let&apos;s plan your next event together
          </p>
          <hr color="white" className="w-2/6" />
          <button className="rounded-md bg-brown px-16 py-3 text-base hover:bg-[var(--primary-hover)]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
