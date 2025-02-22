import { Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { ClashDisplay, Poppins } from "./styles/fonts";
import HeroSection from "~/components/HomeHeroSection";
import ReusableButton from "../components/Button";

const CustomerSatifaction = [
  {
    icon: "/icons/Home/icon-1.svg",
    title: "Best Chef",
    texts:
      " Our Best Chef brings years of culinary experience to the table, ensuring every dish is a masterpiece. Trust us to deliver meals that are as artful as they are delicious.",
  },

  {
    icon: "/icons/Home/icon-2.svg",
    title: "Delicious Meal",
    texts:
      " Every delicious meal is prepared with fresh, high-quality ingredients to satisfy your cravings. We guarantee a flavorful dining experience that will leave you coming back for more.",
  },
  {
    icon: "/icons/Home/icon-3.svg",
    title: "Seasonal Menus",
    texts:
      " Our seasonal menus are thoughtfully curated to showcase the freshest flavors of each season. Experience a variety of dishes tailored to bring out the best in every ingredient.",
  },
  {
    icon: "/icons/Home/icon-4.svg",
    title: "High Quality Services",
    texts:
      " We pride ourselves on delivering high-quality services to every guest, ensuring an exceptional dining experience. From preparation to presentation, our team goes above and beyond to meet your expectations.",
  },
  {
    icon: "/icons/Home/icon-5A.svg",
    title: "Local Sourced Ingredients",
    texts: " We provide specialized services to enhance and support events.",
  },
  {
    icon: "/icons/Home/icon-6.svg",
    title: "Fits Your Budget",
    texts:
      "Enjoy fine dining that fits your budget without sacrificing taste or quality. We believe great food should be accessible to everyone at an affordable price.",
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
    num: "200",
    doings: "Wedding Vendors",
  },
  {
    num: "100+",
    doings: "Annual Weddings",
  },
  {
    num: "50+",
    doings: "Wedding Venues",
  },
  {
    num: "100+",
    doings: "Full-time Employees",
  },
];

export default async function Home() {
  return (
    <Box as="div" className={`${Poppins.className}`}>
      {/* Hero */}

      <HeroSection />

      <Container maxWidth={"1380px"}>
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
                  sizes="100%"
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
                  sizes="100%"
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
                className="relative col-span-1 row-span-1 pr-1"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Image
                  src={"/images/Home/parties.png"}
                  alt="Image 1"
                  className="-ml-1 object-cover"
                  sizes="100%"
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
                  className="-ml-1 object-cover"
                  sizes="100%"
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
                className="md:text-[23px]"
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
              <ReusableButton className="rounded-full border bg-white px-[2.5rem] py-[.5rem] text-[16px] font-medium text-brown transition-all hover:border-white hover:bg-brown hover:text-white md:px-[4rem] md:py-[.7rem]">
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
              Satisfaction <br />{" "}
              <span className="text-brown"> Guaranteed</span>
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
                    <p className="text-[16px] font-bold">{data.title}</p>
                    <p className="text-[13px] text-gray-400">{data.texts}</p>
                  </div>
                );
              })}
            </div>
            <Text as={"p"} weight={"bold"} my={"1rem"}>
              Call us now +234-5678-789-90 Or request for a quote
            </Text>
            <ReusableButton className="rounded-full border bg-brown px-[2.5rem] py-[.5rem] text-[16px] font-medium text-white transition-all hover:border-brown hover:bg-white hover:text-brown md:px-[4rem] md:py-[.7rem]">
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
            <ReusableButton className="rounded-full border bg-brown px-[2.5rem] py-[.5rem] text-[16px] font-medium text-white transition-all hover:border-brown hover:bg-white hover:text-brown md:px-[4rem] md:py-[.7rem]">
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
                    Events Planning Pitfalls to Avoid: Planning an event......
                  </p>
                  <p className="text-[15px] text-gray-400">
                    Culinary creativity : The Signature dishes for soiree has
                    been labelled by public as best.
                  </p>
                </div>
                <div className="flex flex-col text-start">
                  <div className="mb-[1rem] w-full border-b-2 border-gray-400"></div>
                  <p className="text-[16px] font-bold">
                    Soiree is the best and most most affordable vendor......
                  </p>
                  <p className="text-[15px] text-gray-400">
                    Culinary creativity : The Signature dishes for soiree has
                    been labelled by public as .
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
