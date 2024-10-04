import {
  Container,
  Heading,
  HStack,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/layout";
import { Flex, Box, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/react";
import Thin from "./helpers";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { EmailIcon } from "@chakra-ui/icons";

function Sponsor({ name, icon, link }) {
  return (
    <Flex
      as="a"
      href={link}
      boxShadow="md"
      _hover={{ boxShadow: "outline" }}
      backgroundColor={useColorModeValue("gray.200", "gray.700")}
      borderRadius="20px"
      alignItems="center"
      justifyContent="center"
      padding="10"
      h="300px"
    >
      <Image src={icon} alt="Image Not Found" />
    </Flex>
  );
}
var sponsors = [
  ["Brock University", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Brock_University_Logo_2022.svg/2560px-Brock_University_Logo_2022.svg.pn", "https://broku.ca"]
]
for (let i = 0; i < sponsors.length; i++) {
  sponsors[i] = <Sponsor
    key="a"
    name=sponsor[0]
    icon=sponsor[1]
    link=sponsor[2]
  />
}
sponsors = sponsors.map((sponsor, i) => {
  return (
    <div className={`sponsor${i}`} key={i}>
      {sponsor}
    </div>
  );
});


const Sponsors = (args) => {
  useEffect(() => {
    const tl = new gsap.timeline({
      scrollTrigger: {
        trigger: ".sponsorsHeading",
        start: "top bottom",
      },
      delay: 0.2,
    });

    for (let i = 0; i < sponsors.length; i++) {
      tl.from(`.sponsor${i}`, { x: -50 - 50 * i, opacity: 0 }, i * 0.2);
    }
  });

  return (
    <Container
      mt={{ base: "50", lg: "24" }}
      minW="full"
      left="0"
      textAlign="center"
      id={args.id}
    >
      <div className="sponsorsHeading">
        <Heading fontSize={{ base: "1.25rem", lg: "3rem" }} mb="6">
          Sponsors
        </Heading>
        <Thin fontSize={{ base: "0.75rem", lg: "1rem" }}>
         Sponsor list coming soon for 2024 - 2025!
        </Thin>
      </div>
      <Button leftIcon={<EmailIcon />} outline className="sponsorButton" mt="10" size="lg">
        <a href="mailto:hacktheridge24@gmail.com">Become a Sponsor</a>
      </Button>
      <div className="sponsorsStack">
        <SimpleGrid
          p="10"
          columns={{ sm: 1, md: 2, lg: 3 }}
          rowGap="10"
          columnGap="5"
        >
          {[...sponsors]}
        </SimpleGrid>
      </div>
    </Container>
  );
};
export default Sponsors;
