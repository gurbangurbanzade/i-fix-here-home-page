import Blogs from "@/components/Blogs";
import Carousel from "@/components/Carousel";
import ContactUs from "@/components/ContactUs";
import Devices from "@/components/Devices";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Frequently from "@/components/Frequently";
import Hero from "@/components/Hero";
import JoinOur from "@/components/JoinOur";
import Repair from "@/components/Repair";
import WhyiFixHere from "@/components/WhyiFixHere";
import React from "react";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Carousel />
      {/* Bu komponent responsiv deyil */}
      {/* <Repair /> */}
      <WhyiFixHere />
      <Feedback />
      <Frequently />
      <Blogs />
      <ContactUs />
      <JoinOur />
      <Footer />
    </>
  );
};

export default HomePage;
