import Carousel from "@/components/Carousel";
import Devices from "@/components/Devices";
import Feedback from "@/components/Feedback";
import Frequently from "@/components/Frequently";
import Hero from "@/components/Hero";
import Repair from "@/components/Repair";
import WhyiFixHere from "@/components/WhyiFixHere";
import React from "react";
const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <Devices /> */}
      <Carousel />
      {/* <Repair /> */}
      {/* <WhyiFixHere /> */}
      {/* <Frequently /> */}
      <Feedback />
    </>
  );
};

export default HomePage;
