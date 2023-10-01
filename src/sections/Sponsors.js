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
import Thin from "./helpers";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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

const sponsors = [
  // <Sponsor
  //   key="a"
  //   name="major league hacking"
  //   icon="https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png"
  //   link="https://mlh.io/"
  // />,
  // <Sponsor
  //   key="a"
  //   name="Metro"
  //   icon="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Metro_Inc._logo.svg/2560px-Metro_Inc._logo.svg.png"
  //   link="https://www.metro.ca/en"
  // />,
  // <Sponsor
  //   key="a"
  //   name="replit"
  //   icon="https://blog.replit.com/images/logo.png"
  //   link="https://replit.com/"
  // />,
  // <Sponsor
  //   key="a"
  //   name="DQ"
  //   icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dairy_Queen_logo.svg/1200px-Dairy_Queen_logo.svg.png"
  //   link="https://www.dairyqueen.com/en-ca/"
  // />,
  // <Sponsor
  //   key="a"
  //   name="Marble Slab Creamery"
  //   icon="https://cdn.discordapp.com/attachments/933210665882091553/1046978763285614684/marble_slab_creamery_logo.png"
  //   link="https://www.marbleslab.ca/"
  // />,
  // <Sponsor
  //   key="a"
  //   name="KFC"
  //   icon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/KFC_Logo.svg/2560px-KFC_Logo.svg.png"
  //   link="https://www.kfc.ca/"
  // />,
  // <Sponsor
  //   key="a"
  //   name="Foodies curry & shawarma"
  //   icon="https://i0.wp.com/foodiescns.ca/wp-content/uploads/2022/05/color-1.png?fit=500%2C132&ssl=1"
  //   link="https://foodiescns.ca/"
  // />,
  // <Sponsor
  //   key="a"
  //   name="Harveys"
  //   icon="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Harvey%27s_logo.svg/1200px-Harvey%27s_logo.svg.png"
  //   link="https://www.harveys.ca/en.html"
  // />,
  // <Sponsor
  //   key="a"
  //   name="Gotcha Bubble Tea"
  //   icon="https://www.gotchafreshtea.com/uploads/1/2/3/7/123755766/gotcha-2018-logo-gotcha-eng_1.png"
  //   link="https://gotcha-bubble-tea.business.site/"
  // />,
  // <Sponsor
  //   key="a"
  //   name="Code Club"
  //   icon="https://cdn.discordapp.com/attachments/1005951424879931407/1050449083174764574/unknown-removebg-preview.png"
  //   link="https://codeclub.org/en/"
  // />,
].map((sponsor, i) => {
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
        start: "bottom bottom",
      },
      delay: 0.2,
    });

    for (let i = 0; i < sponsors.length; i++) {
      tl.from(`.sponsor${i}`, { x: -50 - 50 * i, opacity: 0 });
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
         Sponsor list coming soon!
        </Thin>
      </div>
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
