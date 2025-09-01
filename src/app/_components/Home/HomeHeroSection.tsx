import { Button } from "@radix-ui/themes";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative mb-bom h-[90vh] bg-hero-image bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 px-4 text-center text-white">
        <h1 className="animate-fade-in text-3xl font-bold capitalize tracking-wide sm:text-4xl md:text-5xl">
          Let&apos;s plan your next event together
        </h1>
        <Link href={"/contact"}>
          <Button style={{ cursor: "pointer" }}>Book an appointment</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
