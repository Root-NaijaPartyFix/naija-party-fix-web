import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";
import { ClashDisplay, Poppins } from "./styles/fonts";
import Image from "next/image";
import wedding from "~/images/wedding.png";
import coporate from "~/images/coperate.png";
// import corperate from  '../'
import parties from "~/images/parties.png";
import socialEvents from "~/images/social-event.png";
import Chef from "/icons/Home/icon-1.svg";
import Menu from "/icons/Home/icon-2.svg";
import Meal from "/icons/Home/icon-3.svg";
import Service from "/icons/Home/icon-4.svg";
import Ingredients from "/icons/Home/icon-5A.svg";
import Budget from "/icons/Home/icon-6.svg";
import ReusableButton from "./utils/Button";

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
// const images = [wedding, coporate, parties, socialEvents];

export default async function Home() {
  return (
    <Box as="div" className={`${Poppins.className}`}>
      {/* Hero */}
      <div className="h-[90vh] bg-hero-image bg-cover bg-center bg-no-repeat">
        <div className="flex h-full flex-col justify-center bg-brown bg-opacity-10 pt-16">
          <div className="flex h-[60%] flex-col items-center justify-evenly">
            <Text
              size={"8"}
              weight={"bold"}
              style={{ textAlign: "center", color: "white" }}
            >
              Let&apos;s plan your next event together
            </Text>
            <hr color="white" className="w-2/6" />
            <Button radius="medium" style={{ padding: "15px 70px" }}>
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* <Box className="px-16">
        <Box></Box>
      </Box> */}
      <Container maxWidth={"1380px"}>
        {/* This is the homepage. */}
        <Box>
          <Heading
            as="h2"
            style={{
              fontFamily: ClashDisplay.style.fontFamily,
              letterSpacing: "2px",
            }}
            align={"center"}
            size={"8"}
            my={"32px"}
          >
            Events we cater
          </Heading>

          {/* Four images */}
          <Grid
            className="mb-10 w-auto gap-3"
            style={{
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            {/* Images */}
            <div
              className="relative col-span-1 row-span-2 bg-gray-200"
              // style={{ aspectRatio: "2 / 1" }}
            >
              <Image
                src={coporate}
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
              className="relative col-span-2 row-span-1 bg-gray-200"
              style={{ aspectRatio: "2 / 1" }}
            >
              <Image
                src={coporate}
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
              className="relative col-span-1 row-span-1 bg-gray-200"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={coporate}
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
              className="relative col-span-1 row-span-1 bg-gray-200"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={coporate}
                alt="Image 1"
                className="object-cover"
                fill
              />
              {/* <p className="center absolute bottom-2 text-center text-white">
                
              </p> */}
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

          <div className="my-[32px] w-full bg-[#C1121F] px-3 py-[32px] md:my-10 md:px-12 md:py-[60px]">
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
              <Button
                className="px-[2.5rem] py-[1rem] text-[17px] md:px-[4rem] md:py-[1.5rem] md:text-[20px]"
                radius="large"
                style={{
                  backgroundColor: "white",
                  fontWeight: "bold",
                  color: "#C1121F",
                }}
              >
                BOOK YOUR DATE
              </Button>
            </Flex>
          </div>

          {/* Satisfaction guarantee */}
          <section>
            <Flex
              className="border-2 border-blue-700 p-10 text-center"
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
              <ReusableButton className="rounded-full bg-brown text-[16px] font-medium text-white">
                REQUEST A QUOTE
              </ReusableButton>
            </Flex>
          </section>

          <section>
            <Flex
              className="border-2 border-blue-700 p-10 text-center"
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
                  console.log(i);
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
              <ReusableButton className="rounded-full bg-brown text-[16px] font-medium text-white">
                REQUEST A QUOTE
              </ReusableButton>
            </Flex>
          </section>

          <div className="py py text grid w-full grid-cols-2 items-center gap-4 bg-brown p-4 text-center text-white sm:grid-cols-4">
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

          {/* Mobile images > Not visble in mobile */}
          {/* <Box
            position={"relative"}
            width={"80%"}
            height={"25em"}
            style={{ borderRadius: "2rem", margin: "auto" }}
          >
            <Image
              src={coporate}
              alt="wedding"
              style={{ borderRadius: "2rem" }}
              fill={true}
            />
          </Box> */}
          {/* <Grid
            rows={"au"}
            columns={"repeat(4, 25%)"}
            gap={"10px"}
            className="items-center text-center"
          >
            <Box gridColumn={"1/3"} gridRow={"1/5"}>
              <Image alt="wedding" src={wedding} width={510} height={579} />
              <Text
                className="relative bottom-[10%] font-bold text-white"
                size={"6"}
              >
                Weddings
              </Text>
            </Box>
            <Box gridColumn={"3/5"} gridRow={"1/3"}>
              <Image src={coporate} alt={"coporate"} width={683} height={294} />
              <Text
                className="relative bottom-[10%] font-bold text-white"
                size={"6"}
              >
                Cooperate
              </Text>
            </Box>
            <Box gridColumn={"3/4"} gridRow={"3/5"}>
              <Image src={parties} alt={"parties"} width={342} height={294} />
              <Text
                className="relative bottom-[10%] left-[40%] font-bold text-white"
                size={"6"}
              >
                Parties
              </Text>
            </Box>
            <Box gridColumn={"4/5"} gridRow={"3/5"}>
              <Image
                src={socialEvents}
                alt={"social"}
                width={342}
                height={294}
              />
              <Text
                className="relative bottom-[10%] left-[40%] font-bold text-white"
                size={"6"}
              >
                Social Events
              </Text>
            </Box>
          </Grid> */}
          {/* <Flex
            direction={"row"}
            align={"center"}
            // justify={}
            // className="flex w-full flex-row flex-nowrap items-center"
          >
            <Box className="relative inline-block w-[45%]">
              <Image
                src={wedding}
                alt="Wedding"
                width={510}
                height={579}
                // fill={true}
              />
            </Box>
            <Flex direction={"column"} justify={"between"} className="w-[45%]">
              <Box className="relative inline-block">
                <Image
                  src={coporate}
                  alt="Cooperate"
                  width={683}
                  height={263}
                  // fill={true}
                />
              </Box>
              <Flex className="flex flex-row items-center justify-evenly">
                <Box>
                  <Image src={parties} alt="Parties" width={342} height={294} />
                </Box>
                <Box>
                  <Image
                    src={socialEvents}
                    alt="Social Events"
                    width={342}
                    height={294}
                  />
                </Box>
              </Flex>
            </Flex> */}
          {/* </Flex> */}
        </Box>
      </Container>
    </Box>
  );
}
