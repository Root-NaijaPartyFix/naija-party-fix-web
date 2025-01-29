import { Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { ClashDisplay, Poppins } from "./styles/fonts";
import HeroSection from "~/components/HomeHeroSection";
import ReusableButton from "../components/Button";

const CustomerSatifaction = [
  {
    icon: "/icons/Home/icon-1.svg",
    title: "Best   Chef",
    texts:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt consectetur ex iusto maxime libero aliquid quasi non tempore quo.",
  },

  {
    icon: "/icons/Home/icon-2.svg",
    title: "Delicious  Meal",
    texts:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt consectetur ex iusto maxime libero aliquid quasi non tempore quo.",
  },
  {
    icon: "/icons/Home/icon-3.svg",
    title: "Seasonal  Menus",
    texts:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt consectetur ex iusto maxime libero aliquid quasi non tempore quo.",
  },
  {
    icon: "/icons/Home/icon-4.svg",
    title: "Delicious  Meal",
    texts:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt consectetur ex iusto maxime libero aliquid quasi non tempore quo.",
  },
  {
    icon: "/icons/Home/icon-5A.svg",
    title: "Delicious  Meal",
    texts:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt consectetur ex iusto maxime libero aliquid quasi non tempore quo.",
  },
  {
    icon: "/icons/Home/icon-6.svg",
    title: "Delicious  Meal",
    texts:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt consectetur ex iusto maxime libero aliquid quasi non tempore quo.",
  },
];

const Staffs = [
  {
    img: "/images/Home/img-1.jpg",
    position: "Head Chef",
    name: "Datima",
  },
  {
    img: "/images/Home/img-2.jpg",
    position: "Manager",
    name: "Zee Omale",
  },
  {
    img: "/images/Home/img-3.jpg",
    position: "Staff",
    name: "Pelumi Chris",
  },
  {
    img: "/images/Home/img-4.jpg",
    position: "Staff",
    name: "Ola rewanju",
  },
];

const HomeRatings = [
  {
    num: "1000",
    doings: "Wedding Vendeor",
  },
  {
    num: "1000+",
    doings: "Wedding Vendeor",
  },
  {
    num: "1,000",
    doings: "Wedding Vendeor",
  },
  {
    num: "100",
    doings: "Wedding Vendeor",
  },
];

export default async function Home() {
  return (
    <Box as="div" className={`${Poppins.className}`}>
      {/* Hero */}

      <HeroSection />

      <Container maxWidth={"1380px"}>
        {/* Heading */}
        <Box>
          <div className="mx-auto mb-[5rem] mt-[2rem] w-[90%]">
            <Heading
              as="h2"
              style={{
                fontFamily: ClashDisplay.style.fontFamily,
                letterSpacing: "2px",
              }}
              align={"center"}
              size={"7"}
              my={"20px"}
            >
              Events we cater
            </Heading>

            {/* Four images */}
            <Grid
              className="relative -z-10 w-auto gap-3"
              style={{
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gridTemplateRows: "repeat(2, 1fr)",
              }}
            >
              {/* Images */}
              <div
                className="relative col-span-1 row-span-2"
                // style={{ aspectRatio: "2 / 1" }}
              >
                <Image
                  src={"/images/Home/wedding.png"}
                  alt="Image 1"
                  className="object-cover"
                  fill
                />
                <Text
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center text-white"
                  size={"3"}
                  weight={"bold"}
                >
                  Weddings
                </Text>
              </div>
              <div
                className="relative col-span-2 row-span-1"
                style={{ aspectRatio: "2 / 1" }}
              >
                <Image
                  src={"/images/Home/coperate.png"}
                  alt="Image 1"
                  className="object-cover"
                  fill
                />

                <Text
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center text-white"
                  size={"3"}
                  weight={"bold"}
                >
                  Cooperate
                </Text>
              </div>
              <div
                className="relative col-span-1 row-span-1"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Image
                  src={"/images/Home/parties.png"}
                  alt="Image 1"
                  className="object-cover"
                  fill
                />
                <Text
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center text-white"
                  size={"3"}
                  weight={"bold"}
                >
                  Parties
                </Text>{" "}
              </div>
              <div
                className="relative col-span-1 row-span-1"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Image
                  src={"/images/Home/social-event.png"}
                  alt="Image 1"
                  className="object-cover"
                  fill
                />
                <Text
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center text-white"
                  size={"3"}
                  weight={"bold"}
                >
                  Social <br />
                  Events
                </Text>
              </div>
            </Grid>
          </div>

          {/* Book Today section */}
          <div className="mb-[5rem] w-full bg-[#C1121F] px-3 py-[32px] md:px-12">
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              className="m-auto h-auto max-w-full gap-4 text-center sm:gap-3 md:max-w-[456px]"
            >
              <Text
                as="p"
                weight={"medium"}
                style={{ color: "white" }}
                className="md:text-[20px]"
              >
                BOOK TODAY!
              </Text>
              <Text
                as="p"
                weight={"bold"}
                style={{ color: "white" }}
                className="text-[20px] md:text-[2rem]"
              >
                Book Your Tasting session or Discuss Your Project
              </Text>
              <hr color="white" className="w-2/6" />
              <ReusableButton className="rounded-full bg-white px-[2.5rem] py-[.5rem] text-[16px] font-medium text-brown md:px-[4rem] md:py-[.7rem]">
                BOOK YOUR DATE
              </ReusableButton>
            </Flex>
          </div>

          {/* Satisfaction guarantee */}
          <Flex
            className="mb-[5rem] py-7 text-center"
            align={"center"}
            justify={"center"}
            py={"2"}
            px={"3"}
            direction={"column"}
            gapX={"3"}
          >
            <p className="my-2 font-medium md:text-[20px]">Why Soiree</p>
            <h2 className="text-[1.5rem] font-bold sm:text-[1.5rem] md:text-[2rem]">
              {" "}
              Satisfaction <br /> Guaranteed
            </h2>
            <div className="mb-[3rem] mt-7 flex flex-col flex-wrap items-center justify-center gap-7 text-center sm:flex-row md:mb-[4rem]">
              {CustomerSatifaction.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="flex w-full flex-col flex-wrap items-center justify-center gap-y-[0.7rem] sm:w-[30%]"
                  >
                    <Image
                      src={data.icon}
                      className="object-cover"
                      alt={data.texts}
                      height={50}
                      width={50}
                    />
                    <p className="text-[16px] font-bold">Best chef</p>
                    <p className="text-[13px] text-gray-400">{data.texts}</p>
                  </div>
                );
              })}
            </div>
            <Text as={"p"} weight={"bold"} my={"1rem"}>
              Call us now +234-5678-789-90 Or request for a quote
            </Text>
            <ReusableButton className="rounded-full bg-brown px-[2.5rem] py-[.5rem] text-[16px] font-medium text-white md:px-[4rem] md:py-[.7rem]">
              REQUEST A QUOTE
            </ReusableButton>
          </Flex>

          {/* meet our team section */}
          <Flex
            className="mb-[5rem] p-10 text-center"
            align={"center"}
            justify={"center"}
            py={"2"}
            px={"3"}
            direction={"column"}
            gapX={"3"}
          >
            <p className="my-2 font-medium md:text-[20px]">
              Meet Incredible People
            </p>
            <h2 className="text-[1.5rem] font-bold sm:text-[1.5rem] md:text-[2rem]">
              Our Team
            </h2>
            <div className="mb-[3rem] mt-7 flex flex-1 flex-col items-center justify-center gap-7 text-center sm:flex-row md:mb-[4rem]">
              {Staffs.map((data, i) => {
                return (
                  <div
                    key={i}
                    className={`flex w-full flex-col flex-wrap items-center justify-center gap-y-[0.3rem] ${i === 1 || i == 3 ? "mt-[3rem]" : ""} `}
                  >
                    <Image
                      src={data.img}
                      className={`object-cover`}
                      alt={data.name}
                      // layout="responsive"
                      height={200}
                      width={200}
                    />
                    <p className="text-[16px] font-bold">{data.name}</p>
                    <p className="text-[12px] font-light text-gray-400">
                      {data.position}
                    </p>
                  </div>
                );
              })}
            </div>
            <Text as={"p"} weight={"bold"} my={"1rem"}>
              Call us now +234-5678-789-90 Or request for a quote
            </Text>
            <ReusableButton className="rounded-full bg-brown px-[2.5rem] py-[.5rem] text-[16px] font-medium text-white md:px-[4rem] md:py-[.7rem]">
              REQUEST A QUOTE
            </ReusableButton>
          </Flex>

          {/* wecdding vendor ratings */}
          <div className="py py text mb-[5rem] grid w-full grid-cols-2 items-center gap-4 bg-brown p-4 text-center text-white sm:grid-cols-4">
            {HomeRatings.map((data, i) => (
              <div key={i} className="flex flex-col items-center">
                <h3 className="text-[1rem] font-bold sm:text-[1.5rem]">
                  {data.num}
                </h3>
                <p className="text-[.7rem] text-gray-200 sm:text-[1rem]">
                  {data.doings}
                </p>
              </div>
            ))}
          </div>

          {/* Latest News */}
          <div className="bg mb-[5rem] bg-[#0C2637] p-[2.5rem]">
            <div className="flex flex-col items-center justify-center gap-[2rem] text-white">
              <h2 className="text-[1.5rem] font-bold">LATEST NEWS</h2>
              <div className="flex flex-col gap-[1.5rem] sm:flex-row">
                <div className="flex flex-col text-start">
                  <div className="mb-[1rem] w-full border-b-2 border-gray-400"></div>
                  <p className="text-[16px] font-bold">
                    Culinary creativity : The Signature dishes for soiree has
                    been labelled ......
                  </p>
                  <p className="text-[15px] text-gray-400">
                    Culinary creativity : The Signature dishes for soiree has
                    been labelled by public as best.
                  </p>
                </div>
                <div className="flex flex-col text-start">
                  <div className="mb-[1rem] w-full border-b-2 border-gray-400"></div>
                  <p className="text-[16px] font-bold">
                    Culinary creativity : The Signature dishes for soiree has
                    been labelled ......
                  </p>
                  <p className="text-[15px] text-gray-400">
                    Culinary creativity : The Signature dishes for soiree has
                    been labelled by public as best.
                  </p>
                </div>
                <div className="flex flex-col text-start">
                  <div className="mb-[1rem] w-full border-b-2 border-gray-400"></div>
                  <p className="text-[16px] font-bold">
                    Culinary creativity : The Signature dishes for soiree has
                    been labelled ......
                  </p>
                  <p className="text-[15px] text-gray-400">
                    Culinary creativity : The Signature dishes for soiree has
                    been labelled by public as best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
