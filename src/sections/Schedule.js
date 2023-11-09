/* eslint-disable react/jsx-key */
import { Container, Flex, Heading, VStack, Text } from "@chakra-ui/layout";
import Thin from "./helpers";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Time = ({ time, name }) => {
  while (time.length < 20) { time += "⠀"; }; //Trying to format it so the slashes that cut between time & name align in the centre
  return (
    <Flex justify="space-between" w={{ base: "90vw", lg: "75vw" }} p="7">
      <Heading fontSize={{ base: "md", lg: "2xl" }}>{time}</Heading>
      <Text alignSelf="center" ml="2" mr="2">
        /
      </Text>
      <Thin fontSize={{ base: "base", lg: "2xl" }}>{name}</Thin>
    </Flex>
  );
};
const Times = [
  <Time time="9:00 AM - 9:00 PM" name="Start to end of the event"/>,
  <Time time="TBD" name="Various workshops & activities"/>,
  <Time time="12:00 PM - 1:30 PM" name="Lunch prepared"/>,
  <Time time="7:00 PM" name="Dinner served"/>,
  <Time time="7:00 PM" name="Deadline for projects"/>,
  <Time time="7:00 PM - 8:45 PM" name="Presenting & Judging"/>,
  <Time time="9:00 - 9:30" name="Awards & Closing ceremony"/>
];

const Schedule = (args) => {
  useEffect(() => {
    gsap.from(".scheduleHeading", {
      scrollTrigger: {
        trigger: ".scheduleHeading",
        start: "bottom bottom",
      },
      x: -50,
      opacity: 0,
    });

    for (let i = 0; i < Times.length; i++) {
      gsap.from(`.schedule${i}`, {
        scrollTrigger: {
          trigger: `.schedule${i}`,
          start: "bottom bottom",
        },
        x: -50 + -50 * i,
        opacity: 0,
        duration: 2,
      });
    }
  });

  return (
    <Container textAlign="center" mt={{ base: "50", lg: "24" }} id={args.id}>
      <div className="scheduleHeading">
        <Heading fontSize={{ base: "1.25rem", lg: "3rem" }} mb="5" mt="5">
          Schedule
        </Heading>
        <Thin fontSize={{ base: "0.75rem", lg: "1rem" }}>
          Schedule to be finalized
        </Thin>
      </div>
      <VStack mt="8">
        {Times.map((time, index) => {
          return <div className={`schedule${index}`}>{time}</div>;
        })}
      </VStack>
    </Container>
  );
};

export default Schedule;
