/* eslint-disable react/jsx-key */
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image, Img } from "@chakra-ui/image";
import { Box, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/layout";
import Thin from "./helpers";
import shayaan from "./img/shayaan.jpg";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Member({ name, icon }) {
  return (
    <Flex
      boxShadow="md"
      _hover={{ boxShadow: "outline" }}
      backgroundColor={useColorModeValue("gray.200", "gray.700")}
      borderRadius="20px"
      padding="5"
      boxSize="30vh"
      direction="column"
      justify="space-evenly"
      align="center"
    >
      <Heading textAlign="center" fontSize="1.5rem" pb="6">
        {name}
      </Heading>
      <Box boxSize="100px">
        {console.log(icon)}
        <Image
          src={icon}
          w="100px"
          h="100px"
          fit="cover"
          alt="Img Not Found"
          borderRadius="full"
        />
      </Box>
    </Flex>
  );
}

const Members = [
  <Member
    name="Jamie Seoh"
    icon=""
  />,
  <Member
    name="Eric Yang"
    icon=""
  />,
  <Member
    name="Sebastian Barsan"
    icon=""
  />,
  <Member
    name="Matthew Yang"
    icon=""
  />,
  <Member
    name="Michelle Wang"
    icon=""
  />,
  <Member
    name="Mythili Panicker"
    icon=""
  />,
  <Member
    name="Aahan Ghode"
    icon=""
  />,
  <Member
    name="Luqman Bhatti"
    icon=""
  />,
  <Member
    name="Joshua Zhang"
    icon=""
  />,
  <Member
    name="Gavin You"
    icon=""
  />,
  <Member
    name="Sid Donaldson"
    icon="https://cdn.discordapp.com/avatars/506988084894892037/1e2069b60914b190d15278d64995c0a5.webp"
  />,
].map((member, i) => {
  return (
    <div className={`member${i}`}>
      <Member name={member.props.name} icon={member.props.icon}></Member>
    </div>
  );
});

const Team = (args) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".memberGrid",
        start: "top top",
      },
      delay: 0,
    });

    for (let i = 0; i < Members.length; i++) {
      const r = Math.floor(i / 4);
      const c = i % 4;

      if (r % 2 == 0) {
        tl.from(`.member${i}`, {
          x: -50 + -50 * c,
          opacity: 0,
        });
      } else {
        tl.from(`.member${i}`, {
          x: 50 + 50 * c,
          opacity: 0,
        });
      }
    }
  });

  return (
    <VStack id={args.id} mt={{ base: "50", lg: "100" }}>
      <Heading mb="6">Meet The Team</Heading>
      <Thin fontSize={{ base: "0.75rem", lg: "1rem" }}>
        the people that made Hack The Ridge possible!
      </Thin>
      <div className="memberGrid">
        <SimpleGrid
          columns={{ sm: 1, md: 2, xl: 3, "2xl": 4 }}
          pt="50"
          gap={10}
          placeItems="center"
        >
          {[...Members]}
        </SimpleGrid>
      </div>
    </VStack>
  );
};
export default Team;
