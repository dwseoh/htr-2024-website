import {
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Button,
  Image,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Thin from "./helpers";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Import your images
import siemens from "./img/siemens.png";
import xyz from "./img/xyz.png";
import cleanshot from "./img/cleanshot.png";

gsap.registerPlugin(ScrollTrigger);

function Sponsor({ name, icon, link, level, className }) {
  // Define a color mapping for the sponsorship levels
  const borderColors = {
    Diamond: "blue.500",
    Gold: "yellow.500",
    Silver: "gray.500",
    Bronze: "orange.800",
  };

  const borderColor = borderColors[level] || "gray.200";

  return (
    <Flex
      as="a"
      href={link}
      className={className}
      direction="column"
      boxShadow="md"
      _hover={{
        boxShadow: "outline",
        transform: "scale(1.05)",
        transition: "transform 0.2s",
      }}
      backgroundColor={useColorModeValue("gray.200", "gray.700")}
      borderRadius="20px"
      alignItems="center"
      justifyContent="center"
      padding="10"
      h="300px"
      borderWidth="4px"
      borderColor={borderColor}
      aria-label={name}
      transition="transform 0.2s"
    >
      <Image src={icon} alt={name} maxH="150px" />
    </Flex>
  );
}

const sponsorData = [
  {
    name: "Siemens",
    icon: siemens.src,
    link: "https://www.siemens.com/global/en.html",
    level: "Diamond",
  },
  {
    name: "University of Waterloo",
    icon: "https://files.catbox.moe/pnmpv4.png",
    link: "https://uwaterloo.ca",
    level: "Gold",
  },
  {
    name: "Generation XYZ",
    icon: xyz.src,
    link: "https://gen.xyz/",
    level: "Gold",
  },
  {
    name: "Toronto Metropolitan University",
    icon:
      "https://cms.education.macleans.ca/wp-content/uploads/2022/10/toronto-metropolitan.png",
    link: "https://www.torontomu.ca/",
    level: "Gold",
  },
  {
    name: "CodeCrafters",
    icon:
      "https://mintlify.s3-us-west-1.amazonaws.com/codecrafters/logo/light.svg",
    link: "https://codecrafters.io/",
    level: "Gold",
  },
  {
    name: "Brock University",
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Brock_University_Logo_2022.svg/2560px-Brock_University_Logo_2022.svg.png",
    link: "https://brocku.ca/",
    level: "Silver",
  },

  {
    name: "CleanShot",
    icon: cleanshot.src,
    link: "https://cleanshot.com/",
    level: "Silver",
  },
  
  {
    name: "Forest of Flowers",
    icon:
      "https://cfa.ca/lookforafranchise/wp-content/uploads/sites/17/2021/01/ForestOfFlowers_stacked.png",
    link: "https://www.forestofflowers.com/",
    level: "Bronze",
  },
];

const Sponsors = (args) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sponsorsHeading",
        start: "top bottom",
      },
      delay: 0.2,
    });

    sponsorData.forEach((_, i) => {
      tl.from(`.sponsor${i}`, { x: -50 - 50 * i, opacity: 0 }, i * 0.2);
    });
  }, []);

  return (
    <Container
      mt={{ base: "50", lg: "24" }}
      minW="full"
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
      <Button
        leftIcon={<EmailIcon />}
        className="sponsorButton"
        mt="10"
        size="lg"
        as="a"
        href="mailto:hacktheridge24@gmail.com"
        _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}
      >
        Become a Sponsor
      </Button>
      <div className="sponsorsStack">
        <SimpleGrid
          p="10"
          columns={{ sm: 1, md: 2, lg: 3 }}
          rowGap="10"
          columnGap="5"
        >
          {sponsorData.map((sponsor, i) => (
            <Sponsor key={i} {...sponsor} className={`sponsor${i}`} />
          ))}
        </SimpleGrid>
      </div>
    </Container>
  );
};

export default Sponsors;