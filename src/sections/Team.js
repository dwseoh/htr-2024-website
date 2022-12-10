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
    name="Max Childerhose"
    icon="https://cdn.discordapp.com/avatars/413346829632274438/b997fe04f1e8b8137954e698278a15bd.webp"
  />,
  <Member
    name="Vincent Sun"
    icon="https://cdn.discordapp.com/avatars/489981670276202497/be614f3766f0aa4b934bb9807b3fceff.webp"
  />,
  <Member
    name="Angela Tang"
    icon="https://cdn.discordapp.com/attachments/1005951424879931407/1040482326188146748/fat_cat.jpg"
  />,
  <Member
    name="Steven Rowe"
    icon="https://cdn.discordapp.com/attachments/1005951424879931407/1039158102441861140/Bismuth_Crystal.PNG"
  />,
  <Member
  name="Aditya Sen"
  icon="https://animecorner.me/wp-content/uploads/2022/09/demon-slayer-zenitsu.jpg"
  />,
  <Member
    name="Sebastian Sperneac"
    icon="https://qph.cf2.quoracdn.net/main-qimg-eae9ace85503930493783979172c8cb8-lq"
  />,
  <Member
    name="Raweeha Raza"
    icon="https://demonslayer.fr/wp-content/uploads/2021/09/Tanjiro.jpeg"
  />,
  <Member
    name="Vivaan Chugh"
    icon="https://cdn.discordapp.com/avatars/444566969081921536/68bd25267bb586dac83a3f40a9e16013.webp"
  />,
  <Member
    name="Garrett Liu"
    icon="https://cdn.discordapp.com/avatars/250661040130490378/64a0762e9db754ec1958fead412b84cf.webp"
  />,
  <Member
    name="Aidan Huang"
    icon="https://cdn.discordapp.com/avatars/236091348304920576/8ca0c20bb359412681dd16d06b317436.webp"
  />,
  <Member
    name="Winston Zhang"
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
