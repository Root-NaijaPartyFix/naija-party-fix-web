import ContactForm from "../_components/ContactUs/contactForm";
import Image from "next/image";
import AccordionTransition from "../_components/ContactUs/Accordion";
export default function MyComponent() {
  return (
    <div className="-z-50 bg-gradient-to-b from-[#0C2637] to-[#0C2637]/50 py-[5rem]">
      <div className="mx-auto max-w-7xl">
        <div className="relative mx-auto h-full w-full max-w-[70rem] px-0 py-0 shadow-lg md:px-10 md:py-12">
          <div className="absolute inset-0 rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Event hosting"
              fill
              sizes="100%"
              className="h-full w-full rounded-lg object-cover shadow-md"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative mx-auto grid grid-cols-1 items-center justify-center gap-[1.5rem] py-7 sm:grid-cols-2 sm:gap-4 md:gap-0">
            <div className="flex flex-col flex-wrap items-start justify-center gap-2 px-[24px] text-white">
              <h2 className="text-3xl font-semibold text-white/90">
                Welcome to the contact page
              </h2>
              <div>
                <p className="mb-1 text-xl font-medium text-gray-200">
                  We really love to hear from you
                </p>
                <p className="text-sm font-medium text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur hic sint ipsum dolorem maxime culpa.
                </p>
              </div>
            </div>
            <div className="">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="mt-28 px-4">
          <div className="mb-[2rem] ml-0 block sm:ml-2">
            <h2 className="text-center text-xl font-bold text-brown sm:text-left sm:text-2xl lg:text-3xl">
              FAQS
            </h2>
            <p className="mt-1 text-center text-sm text-gray-300 sm:text-left">
              Frequently Asked Questions <br />
              Here are some common question about NaijaPartyFixs.
            </p>
          </div>
          <AccordionTransition />
        </div>
      </div>
    </div>
  );
}
