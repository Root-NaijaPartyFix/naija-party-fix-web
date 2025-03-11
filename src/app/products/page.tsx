import { Box, Container } from "@radix-ui/themes";
import React from "react";
import HeroSection from "~/app/_components/Home/HomeHeroSection";
import { Poppins } from "../styles/fonts";
import Image from "next/image";
import Category from "../_components/Product/Category";
import Service from "../_components/Product/Service";
import TrustIndicator from "../_components/Product/TrustIndicator";
import RecentProject from "../_components/Product/RecentProject";
import PlanForm from "../_components/Product/PlanForm";
import CustomerReview from "../_components/Product/CustomerReview";

function ProductPage() {
  return (
    <div className="-z-50 flex flex-col items-center justify-center gap-[2rem] bg-gradient-to-b from-[#0C2637] via-[#0C2637]/50 to-[#0C2637]/70 py-[7rem]">
      {/* Herosection */}

      <div className={`mx-auto max-w-7xl ${Poppins.className}`}>
        {/* Featured Venture */}

        <Category />

        <Service />

        <TrustIndicator />

        <RecentProject />

        <PlanForm />

        <CustomerReview />
      </div>
    </div>
  );
}

export default ProductPage;
