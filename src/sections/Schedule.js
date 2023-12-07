/* eslint-disable react/jsx-key */
import { Container, Flex, Heading, VStack, Text } from "@chakra-ui/layout";
import Thin from "./helpers";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Time = ({ time, name }) => {
  /*Force time to 20 characters long, force name to like 40 characters long or something
  If that doesn't work I forfeit my will to persist
  "⠀" <- Blank space character to use
  */
  return (
    <Flex justify="space-between" w={{ base: "90vw", lg: "75vw" }} p="7">
      <Heading fontSize={{ base: "md", lg: "2xl" }}>{time}</Heading>
      <Text alignSelf="center" ml="2" mr="2">  |  </Text>
      <Thin fontSize={{ base: "base", lg: "2xl" }}>{name}</Thin>
    </Flex>
  );
};
const Times = [
  <Time time="8:30AM - 9:00AM" name="Registration"/>,
  <Time time="9:00AM - 9:15AM" name="Opening Ceremony (Theatre)"/>,
  <Time time="9:15AM - 9:30AM" name="Team Finding Session (Theatre)"/>,
  <Time time="10:00AM - 11:00AM" name='“Introduction to Python” Workshop (Theatre)'/>,
  <Time time="10:30AM - 11:30AM" name='“Introduction to C” Workshop (Room TBD)'/>,
  <Time time="11:00AM - 12:00PM" name='“Navigating University and Beyond” Workshop (Theatre)'/>,
  <Time time="12:00PM" name="Lunch Served in the Cafeteria"/>,
  <Time time="12:30PM - 1:30PM" name="League 1v1 Tourney (Room TBD)"/>,
  <Time time="1:00PM - 2:00PM" name="Karaoke (Theatre)"/>,
  <Time time="2:00PM - 3:00PM" name='"The Future Of Work” Workshop (Theatre)'/>,
  <Time time="2:30PM - 3:00PM" name="Chess Tournament (Room TBD)"/>,
  <Time time="3:00PM - 4:00PM" name='“A Shallow Dive Into Machine Learning” Workshop (Theatre)'/>,
  <Time time="3:45PM - 4:00PM" name="Bubble Tea Draw (Cafeteria)"/>,
  <Time time="4:00PM - 5:00PM" name="Figma Workshop (Theatre)"/>,
  <Time time="4:30PM - 5:00PM" name="Fitness Challenge (Gym)"/>,
  <Time time="5:00PM - 5:30PM" name="Math Contest (Room TBD)"/>,
  <Time time="5:30PM" name="Dinner Served in the Cafeteria"/>,
  <Time time="7:00PM" name="Deadline for Submissions"/>,
  <Time time="7:00PM - 8:30PM" name="Judging (Rooms TBD)"/>,
  <Time time="8:30PM - 9:00PM" name="Deliberation"/>,
  <Time time="9:00PM" name="Closing Ceremony & Awards"/>
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
