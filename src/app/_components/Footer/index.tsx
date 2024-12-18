"use client";

import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Button, Flex, Link, Text, TextField } from "@radix-ui/themes";
import { ClashDisplay } from "~/app/styles/fonts";
import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";

// import { colors } from "~/app/utils/colors";

type Link = {
  label: string;
  path: string;
};

const linkGroup1: Link[] = [
  { label: "Products", path: "/products" },
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const linkGroup2: Link[] = [
  { label: "Support", path: "#" },
  { label: "Live Chat", path: "#" },
];

const linkGroup3: Link[] = [
  { label: "Jobs", path: "#" },
  { label: "Our Team", path: "#" },
  { label: "Leadership", path: "#" },
  { label: "Privacy Policy", path: "#" },
];

const Footer: React.FC = () => {
  return (
    <div className="bg-deepBlue flex w-full flex-col-reverse items-center justify-between gap-8 p-8 text-white md:flex-row md:p-20">
      {/* Left section */}
      <div className="flex flex-col gap-8 md:w-[45%]">
        {/* Newsletter */}
        <div>
          <Text as="p" align={{ initial: "center", sm: "left" }}>
            Subscribe to our Newsletter
          </Text>
          <div className="flex flex-col gap-4 md:flex-row">
            <TextField.Root
              placeholder="you@mail.com"
              className="md:w-80"
            ></TextField.Root>
            <Button>Subscribe Now</Button>
          </div>
        </div>
        {/* About */}
        <div>
          <Text
            weight={"bold"}
            className={`text-2xl ${ClashDisplay.className}`}
            as="p"
          >
            Soiree
          </Text>
          <Text as="p">
            Culinary creativity : The Signature dishes for soiree has been
            labelled. Culinary creativity : The Signature dishes for soiree has
            been labelled.
          </Text>
        </div>
        {/* Social media links */}
        <div>
          <Text as="p">Connect with us</Text>
          <Flex gap={"6"} className="">
            <Link href="#" className="w-fit">
              <div className="hover:text-deepBlue flex h-9 w-9 items-center justify-center bg-gray-400 text-white">
                <FaSquareFacebook className="h-4/5 w-4/5" />
              </div>
            </Link>{" "}
            <Link href="#" className="w-fit">
              <div className="hover:text-deepBlue flex h-9 w-9 items-center justify-center bg-gray-400 text-white">
                <FaTwitter className="h-4/5 w-4/5" />
              </div>
            </Link>{" "}
            <Link href="#" className="w-fit">
              <div className="hover:text-deepBlue flex h-9 w-9 items-center justify-center bg-gray-400 text-white">
                <InstagramLogoIcon className="h-4/5 w-4/5" />
              </div>
            </Link>{" "}
          </Flex>
        </div>
      </div>
      {/* --------------------------Right Section---------------------------- */}
      <div className="w-full md:w-[45%]">
        <Flex align={"start"} justify={"between"}>
          <Flex direction={"column"} gap={"4"}>
            {linkGroup1.map((l, idx) => {
              return (
                <Link key={idx} href={l.path} underline="hover">
                  <Text className="hover:text-brown text-white">{l.label}</Text>
                </Link>
              );
            })}
          </Flex>
          <Flex direction={"column"} gap={"4"}>
            {linkGroup2.map((l, idx) => {
              return (
                <Link key={idx} href={l.path} underline="hover">
                  <Text className="hover:text-brown text-white">{l.label}</Text>
                </Link>
              );
            })}
          </Flex>
          <Flex direction={"column"} gap={"4"}>
            {linkGroup3.map((l, idx) => {
              return (
                <Link key={idx} href={l.path} underline="hover">
                  <Text className="hover:text-brown text-white">{l.label}</Text>
                </Link>
              );
            })}
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Footer;
