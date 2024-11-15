/**
 * EXTERNAL
 */
import { Flex, Stack, VStack, Heading, Text } from "@chakra-ui/react";
import Thin from "./helpers";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CounterSection = () => {
  const counterRefs = [useRef(null), useRef(null), useRef(null)];
  
  const counterData = [
    { value: 7000, prefix: "$", suffix: "+", label: "in Prizes" },
    { value: 12, prefix: "", suffix: "", label: "Hours of Hacking" },
    { value: 150, prefix: "", suffix: "+", label: "Hackers" }
  ];

  useEffect(() => {
    counterRefs.forEach((ref, index) => {
      const obj = { value: 0 };
      
      gsap.to(obj, {
        scrollTrigger: {
          trigger: ref.current,
          start: "center bottom",
        },
        value: counterData[index].value,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${counterData[index].prefix}${Math.round(obj.value)}${counterData[index].suffix}`;
          }
        }
      });
    });
  }, []);

  return (
    <Flex 
      w="full" 
      pt={{ base: "8", lg: "12" }}
      className="counterSection"
      justify="center"
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "8", lg: "32" }}
        alignItems="center"
        justify="center"
      >
        {counterData.map((item, index) => (
          <Flex key={index} direction="column" alignItems="center">
            <Text
              ref={counterRefs[index]}
              fontSize={{ base: "2.5rem", lg: "3.5rem" }}
              fontWeight="bold"
              lineHeight="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {counterData[index].prefix}0{counterData[index].suffix}
            </Text>
            <Text
              fontSize={{ sm: "1rem", lg: "1.25rem" }}
              lineHeight={{ sm: "3rem", lg: "4rem" }}
              textAlign="center"
            >
              {item.label}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
};

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

    gsap.from(".counterSection", {
      scrollTrigger: {
        trigger: ".counterSection",
        start: "center bottom",
      },
      y: 30,
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
      <CounterSection />
    </VStack>
  );
};

export default About;