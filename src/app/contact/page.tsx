import { Container } from "@radix-ui/themes";
import Card from "~/components/Card";

export default function MyComponent() {
  return (
    <Container maxWidth={"1380px"}>
      <div className="m-auto my-[7rem] flex w-full max-w-[70rem] flex-col gap-[2.5rem] bg-transparent p-6 shadow-lg sm:flex-row sm:gap-[1.5rem] md:gap-[3rem]">
        {/* First Child Div */}
        <div className="md:[50%] sm: flex w-full flex-col gap-2 sm:w-[40%]">
          <h1 className="text-2xl font-bold"> We’d love to host your event!</h1>
          <p className="text-gray-700">
            At Soiree, your events becomes our top priority after booking us.
          </p>
          <p className="text-[12px] font-bold">+234 81234570</p>
        </div>

        {/* Second Child Div */}

        <form className="flex flex-1 flex-col gap-4 lg:max-w-4xl">
          <h1 className="text-2xl font-bold">Say Hello!</h1>
          {/* Input Field 1 */}
          <div className="flex flex-col gap-[3px] text-[14px]">
            <label htmlFor="name" className="font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-md border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Input Field 3 */}
          <div className="flex flex-col gap-[3px] text-[14px]">
            <label htmlFor="tel" className="font-medium text-gray-600">
              Contact Number{" "}
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              className="rounded-md border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Contact Number"
            />
          </div>

          {/* Input Field 2 */}
          <div className="flex flex-col gap-[3px] text-[14px]">
            <label htmlFor="email" className="font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-md border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your email"
            />
          </div>

          {/* flexed buttons */}
          <div className="flex flex-col gap-[3px]">
            <label
              htmlFor="role"
              className="text-[14px] font-medium text-gray-600"
            >
              Select role
            </label>
            <div className="flex gap-[3px]">
              <button
                type="button"
                id="role"
                className="rounded-md bg-[#424242] px-5 py-1 text-[11px] font-medium text-white hover:bg-[#c1121ed0] focus:outline-none focus:ring-2 focus:ring-brown"
              >
                Vendor
              </button>
              <button
                type="button"
                id="role"
                className="rounded-md bg-[#424242] px-5 py-1 text-[11px] font-medium text-white hover:bg-[#c1121ed0] focus:outline-none focus:ring-2 focus:ring-brown"
              >
                Event Organizer
              </button>
            </div>
          </div>

          {/* Text Area */}
          <div className="flex flex-col gap-[3px] text-[14px]">
            <label htmlFor="message" className="font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="rounded-md border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Type your message here"
              rows={6}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-md bg-brown p-2 font-medium text-white hover:bg-[#c1121ed0] focus:outline-none focus:ring-2 focus:ring-brown"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="justify-center text-center">
        <h2 className="mb-[2rem] text-[2rem] font-bold">Latest Insights</h2>

        <div className="mb-bom flex h-fit flex-wrap justify-center gap-6">
          <Card num={3} selectedFilter="All" />
        </div>
      </div>
    </Container>
  );
}
