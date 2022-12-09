/* eslint-disable react/jsx-key */
import { Container, Flex, Heading, VStack, Text } from "@chakra-ui/layout";
import Thin from "./helpers";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Time = ({ time, name }) => {
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
  <Time time="9:00 - 9:30" name="Opening Ceremony" />,
  <Time time="9:30 - 10:00" name="Team Finder Session" />,
  <Time time="10:00 - 11:00" name="Workshop #1 - Introduction to Python" />,
  <Time time="11:00 - 12:00" name="Workshop #2 - Postman" />,
  <Time time="12:00 - 1:00" name="Lunch Break" />,
  <Time time="1:00 - 2:00" name="Workshop #3 - Into to HTML" />,
  <Time time="2:00 - 3:00" name="Fun Event - Paper Airplane Contest" />,
  <Time time="2:15 - 3:00" name="Fun Event - Among Us/Mafia Game" />,
  <Time time="3:00 - 4:00" name="Workshop #4 - Rest Api and Node.js" />,
  <Time time="4:00 - 5:00" name="Workshop #5 - Microbits Workshop" />,
  <Time time="5:00 - 5:55" name="Fun Event - Costume Making" />,
  <Time time="6:00" name="Fun Event - Budget costplay contest" />,
  <Time time="6:00 - 7:45" name="No activities planned - wrap up coding!" />,
  <Time time="7:45" name="Project Deadline" />,
  <Time time="7:45 - 8:45" name="Judging" />,
  <Time time="8:45 - 9:15" name="Judge Deliberation" />,
  <Time time="9:15 - 9:30" name="Results & Closing Ceremony" />,
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
          event activities, hour by hour
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
