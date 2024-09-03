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
  <Sponsor
    key="a"
    name="Toronto Metropolitan University"
    icon="https://cms.education.macleans.ca/wp-content/uploads/2022/10/toronto-metropolitan.png"
    link="https://www.torontomu.ca/"
  />,   
  <Sponsor
    key="a"
    name="Ontario Tech University"
    icon="https://files.catbox.moe/ofd9zg.png"
    link="https://ontariotechu.ca/"
  />,
  <Sponsor
    key="a"
    name="Bruce Power"
    icon="https://files.catbox.moe/iz51ys.png"
    link="http://www.brucepower.com/"
  />,
  <Sponsor
    key="a"
    name="Siemens"
    icon="https://files.catbox.moe/des2np.png"
    link="https://www.siemens.com/"
  />,
  <Sponsor
    key="a"
    name="The University of Waterloo"
    icon="https://files.catbox.moe/pnmpv4.png"
    link="https://uwaterloo.ca/"
  />,
  <Sponsor
    key="a"
    name="Evertz Microsystems"
    icon="https://evertz.com/img/evertz/evertz.logo.svg"
    link="https://evertz.com/"
  />,
  <Sponsor
    key="a"
    name="Deloitte"
    icon="https://www2.deloitte.com/content/dam/assets/logos/deloitte.svg"
    link="https://www2.deloitte.com/ca/en/pages/about-deloitte/articles/home.html"
  />,
  <Sponsor
    key="a"
    name="Interview Cake"
    icon="https://assets-global.website-files.com/62e051559bac913234470995/63da686f8720100e177b4f40_Interview%20Cake%20main-p-800.webp"
    link="https://www.interviewcake.com/"
  />,
  <Sponsor
    key="a"
    name="McMaster University"
    icon="https://files.catbox.moe/1p76xa.png"
    link="https://www.mcmaster.ca/"
  />,
  <Sponsor
    key="a"
    name="Weever Apps"
    icon="https://files.catbox.moe/70lru2.png"
    link="https://weeverapps.com/"
  />,  
  <Sponsor
    key="a"
    name="Adapsyn"
    icon="https://innovationfactory.ca/wp-content/uploads/2022/10/Adapsyn-Bioscience.jpg"
    link="https://www.adapsyn.com/"
  />,  
  <Sponsor
    key="a"
    name="Sheridan College"
    icon="https://media-www.sheridancollege.ca/-/media/project/sheridan/shared/images/logos/sheridan-logo-header.svg?iar=0&rev=9aef8a944ba94fda83019bff6b668519&hash=CB36F99641395D235635808BC254DE63"
    link="https://www.sheridancollege.ca/"
  />,
  <Sponsor
    key="a"
    name="Brock University"
    icon="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Brock_University_Logo_2022.svg/2560px-Brock_University_Logo_2022.svg.png"
    link="https://brocku.ca/"
  />
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
