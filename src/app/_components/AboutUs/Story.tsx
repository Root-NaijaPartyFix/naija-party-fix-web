import Image from "next/image";

const OurStory = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Title and Intro Text */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">Our Story</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          In the vibrant city of Lagos, Nigeria. Where music pulses through the
          streets and laughter echoes through the night. A vision was born
          NaijaPartyFix, the ultimate party events enthusiasts who sought to
          revolutionize the way Nigerians celebrate life’s special moments.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* Image Grid */}
        <div className="grid grid-cols-4 grid-rows-3 gap-2">
          <Image
            src="https://images.unsplash.com/photo-1488846156747-f17f59c58e70?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDYwfHx3ZWRkaW5nJTIwaGFsbHxlbnwwfHx8fDE3NDEwMTUwNjZ8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
            alt="Story 1"
            width={300}
            height={200}
            className="col-span-2 row-span-2 rounded-lg object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1534823002137-89548ca6bfb1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDk5fHx3ZWRkaW5nJTIwaGFsbHxlbnwwfHx8fDE3NDEwNjAzNTl8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
            alt="Story 2"
            width={150}
            height={150}
            className="col-span-1 row-span-1 rounded-lg object-cover"
          />
          <Image
            // src="/images/story3.jpg"
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDI0fHxjb29wZXJhdGUlMjBldmVudHxlbnwwfHx8fDE3NDEwNjEzMTV8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
            alt="Story 3"
            width={150}
            height={150}
            className="col-span-1 row-span-2 rounded-lg object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDMwfHxjb29wZXJhdGUlMjBldmVudHxlbnwwfHx8fDE3NDEwNjEzMTV8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
            alt="Story 4"
            width={150}
            height={150}
            className="col-span-1 row-span-1 rounded-lg object-cover"
          />
          <Image
            src="https://tinyurl.com/26rhdm39"
            alt="Story 5"
            width={150}
            height={150}
            className="col-span-2 row-span-1 rounded-lg object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDExfHxmZXN0aXZhbHxlbnwwfHx8fDE3NDEwMDY1NTl8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
            alt="Story 6"
            width={150}
            height={150}
            className="col-span-1 row-span-1 rounded-lg object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1595037935521-15ce2282a03e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDY0fHxwaWNuaWN8ZW58MHx8fHwxNzQxMDYyMzcyfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
            alt="Story 7"
            width={150}
            height={150}
            className="col-span-1 row-span-1 rounded-lg object-cover"
          />
          <Image
            // src="/images/story8.jpg"
            src="https://images.unsplash.com/photo-1595037935521-15ce2282a03e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDY0fHxwaWNuaWN8ZW58MHx8fHwxNzQxMDYyMzcyfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
            alt="Story 8"
            width={300}
            height={200}
            className="col-span-2 row-span-2 rounded-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            Our Organization is driven by the love for music, dance, and good
            company, brainstorming ideas for an event that will bring people
            together. We envisioned a platform that would provide unparalleled
            entertainment for party goers.
          </p>
          <p>
            With clear vision and unwavering determination, our team embarked on
            a journey to create an unforgettable experience. We scouted the best
            venues, provide the best chef’s, curated a talented lineup of
            performers, and assembled a team of expert event planners to ensure
            every detail was excellently executed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
