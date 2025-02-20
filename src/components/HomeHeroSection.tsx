"use client";

import { Button, Text } from "@radix-ui/themes";
import React from "react";
//
const HeroSection = () => {
  return (
    <div className="h-[90vh] bg-hero-image bg-cover bg-center bg-no-repeat">
      <div className="flex h-full flex-col justify-center bg-brown bg-opacity-10 pt-16">
        <div className="flex h-[60%] flex-col items-center justify-evenly">
          <Text
            size={"8"}
            weight={"bold"}
            style={{
              textAlign: "center",
              color: "white",
              wordSpacing: "5px",
              letterSpacing: "2px",
            }}
            className="font-poppin"
          >
            Let&apos;s plan your next event together
          </Text>
          <hr color="white" className="w-2/6" />
          <Button radius="medium" size={"3"} style={{ padding: "15px 70px" }}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
