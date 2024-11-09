/**
 * EXTERNAL
 */
import { Flex, HStack, VStack, Heading } from "@chakra-ui/react";
import Thin from "./helpers";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutText = () => {
  return (
    <Thin
      pl={{ sm: "4", lg: "24" }}
      lineHeight={{ sm: "3rem", lg: "4rem" }}
      fontSize={{ sm: "1rem", lg: "1.25rem" }}
    >
        <b>Hack The Ridge</b> is a 12-hour innovation challenge at Iroquois Ridge High School
        where students tackle real-world problems through technology. Join us on{" "}
        <b>December 14th, 2024, 8 AM to 8 PM</b> for hands-on workshops, inspiring speakers,
        and collaborative problem-solving. Work solo or in teams of up to four to{" "}
        <b>build creative solutions aligned with our theme</b>.
      
    </Thin>
  );
};
const About = (args) => {
  useEffect(() => {
    gsap.from(".aboutHeading", {
      scrollTrigger: {
        trigger: ".aboutHeading",
        start: "bottom bottom",
      },
      x: -50,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".aboutText", {
      scrollTrigger: {
        trigger: ".aboutText",
        start: "center bottom",
      },
      x: 50,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <VStack
      mt={{ base: "50", lg: "100" }}
      w="full"
      alignItems="flex-start"
      id={args.id}
    >
      <div className="aboutHeading">
        <Heading
          fontSize={{ base: "1.25rem", lg: "3rem" }}
          mb={{ base: "8", lg: "16" }}
        >
          Iroquois Ridge High School{"'"} Annual Hackathon
        </Heading>
      </div>
      <div className="aboutText">
        <AboutText />
      </div>
    </VStack>
  );
};

export default About;
