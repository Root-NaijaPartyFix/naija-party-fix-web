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
import parties from "~/images/parties.png";
import socialEvents from "~/images/social-event.png";

// const images = [wedding, coporate, parties, socialEvents];

export default async function Home() {
  return (
    <Box as="div" className={`${Poppins.className}`}>
      {/* Hero */}
      <div className="h-[100vh] bg-hero-image bg-cover bg-center bg-no-repeat">
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
            <Button radius="medium" style={{ padding: "0 40px" }}>
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
            style={{ fontFamily: ClashDisplay.style.fontFamily }}
            align={"center"}
            size={"8"}
            my={"32px"}
          >
            Events we cater
          </Heading>

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
          <Flex
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
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
