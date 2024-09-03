/* eslint-disable react/jsx-key */
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image, Img } from "@chakra-ui/image";
import { Box, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/layout";
import Thin from "./helpers";

import jamie from "./img/jamie.webp";
import eric from "./img/eric.webp";
import sebastian from "./img/sebastian.webp";
import matthew from "./img/matthew.webp";
import michelle from "./img/michelle.webp";
import mythili from "./img/mythili.webp";
import aahan from "./img/aahan.webp";
import luqman from "./img/luqman.webp";
import joshua from "./img/joshua.webp";
import gavin from "./img/gavin.webp";
import sid from "./img/sid.webp";

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
    icon={jamie.src}
  />,
  <Member
    name="Eric Yang"
    icon={eric.src}
  />,
  <Member
    name="Sebastian Barsan"
    icon={sebastian.src}
  />,
  <Member
    name="Matthew Yang"
    icon={matthew.src}
  />,
  <Member
    name="Michelle Wang"
    icon={michelle.src}
  />,
  <Member
    name="Mythili Panicker"
    icon={mythili.src}
  />,
  <Member
    name="Aahan Ghode"
    icon={aahan.src}
  />,
  <Member
    name="Luqman Bhatti"
    icon={luqman.src}
  />,
  <Member
    name="Joshua Zhang"
    icon={joshua.src}
  />,
  <Member
    name="Gavin You"
    icon={gavin.src}
  />,
  <Member
    name="Sid Donaldson"
    icon={sid.src}
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
        start: "top bottom",
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
        }, i * 0.2);
      } else {
        tl.from(`.member${i}`, {
          x: 50 + 50 * c,
          opacity: 0,
        }, i * 0.2);
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
