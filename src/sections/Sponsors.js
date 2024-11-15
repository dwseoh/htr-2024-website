import {
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Button,
  Image,
  Badge,
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
import gotcha from "./img/gotcha.png";
import onepass from "./img/onepass.png";
import queens from "./img/queens.png";
import dominos from "./img/dominos.png";
import coddy from "./img/coddy.png";
import vueschool from "./img/vueschool.png";
import metro from "./img/metro.png";
import townofoakville from "./img/townofoakville.png"


gsap.registerPlugin(ScrollTrigger);

function Sponsor({ name, icon, link, level, className }) {
  const borderColors = {
    Diamond: "blue.500",
    Gold: "yellow.500",
    Silver: "gray.500",
    Bronze: "orange.800",
  };

  const borderColor = borderColors[level] || "gray.200";
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const hoverBgColor = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex
      as="a"
      href={link}
      className={className}
      boxShadow="lg"
      role="group"
      _hover={{
        boxShadow: "2xl",
        transform: "translateY(-10px)",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      backgroundColor={bgColor}
      borderRadius="15px"
      padding="8"
      height="280px"
      borderWidth="3px"
      borderColor={borderColor}
      position="relative"
      aria-label={name}
      overflow="hidden"
      transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      style={{
        opacity: 0,
        transform: "translateY(20px) translateX(-20px)",
      }}
    >
      <Badge
        position="absolute"
        top="2"
        right="2"
        colorScheme={
          level === "Diamond"
            ? "blue"
            : level === "Gold"
            ? "yellow"
            : level === "Silver"
            ? "gray"
            : "orange"
        }
        borderRadius="md"
        px="2"
        py="1"
        fontSize="0.8em"
        textTransform="uppercase"
        zIndex="2"
      >
        {level}
      </Badge>

      {/* Main content container */}
      <Flex
        direction="column"
        w="full"
        h="full"
        justify="center"
        align="center"
        position="relative"
      >
        {/* Image container with dimming effect */}
        <Flex
          justify="center"
          align="center"
          mb="auto"
          mt="auto"
          flex="1"
          transition="all 0.3s ease-in-out"
          _groupHover={{
            opacity: 0.15
          }}
        >
          <Image 
            src={icon} 
            alt={name} 
            maxH="250px"
            maxW="80%"
            objectFit="contain"
          />
        </Flex>

        {/* Hover overlay with centered text */}
        <Flex
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          justify="center"
          align="center"
          opacity="0"
          transition="all 0.3s ease-in-out"
          _groupHover={{
            opacity: 1,
          }}
          zIndex="1"
        >
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            color={textColor}
            px="4"
          >
            {name}
          </Heading>
        </Flex>
      </Flex>
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
    name: "Queen's University",
    icon: queens.src,
    link: "https://www.queensu.ca/",
    level: "Diamond",
  },
  {
    name: "Domino's Pizza",
    icon: dominos.src,
    link: "https://www.dominos.ca/",
    level: "Diamond",
  },
  {
    name: "Hatch",
    icon: "https://cna.ca/wp-content/uploads/2018/11/Hatch_Logo_Colour_RGB.png",
    link: "https://www.hatch.com/",
    level: "Diamond",
  },
  {
    name: "Deloitte",
    icon: "https://energycouncil.com/wp-content/uploads/Deloitte.png",
    link: "https://www2.deloitte.com",
    level: "Diamond",
  },
  {
    name: "University of Waterloo",
    icon: "https://www.ouinfo.ca/assets/files/images/universityLogoNew_logo.png",
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
    icon: "https://cms.education.macleans.ca/wp-content/uploads/2022/10/toronto-metropolitan.png",
    link: "https://www.torontomu.ca/",
    level: "Gold",
  },
  {
    name: "CodeCrafters",
    icon: "https://mintlify.s3-us-west-1.amazonaws.com/codecrafters/logo/light.svg",
    link: "https://codecrafters.io/",
    level: "Gold",
  },
  {
    name: "1Password",
    icon: onepass.src,
    link: "https://1password.com",
    level: "Gold",
  },
  {
    name: "Coddy",
    icon: coddy.src,
    link: "https://coddy.tech/",
    level: "Gold",
  },
  {
    name: "Town of Oakville",
    icon:townofoakville.src,
    link: "https://www.oakville.ca/",
    level: "Gold",
  },
  {
    name: "Brock University",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Brock_University_Logo_2022.svg/2560px-Brock_University_Logo_2022.svg.png",
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
    name: "Vue School",
    icon: vueschool.src,
    link: "https://vueschool.io/",
    level: "Silver",
  },
  {
    name: "Forest of Flowers",
    icon: "https://cfa.ca/lookforafranchise/wp-content/uploads/sites/17/2021/01/ForestOfFlowers_stacked.png",
    link: "https://www.forestofflowers.com/",
    level: "Bronze",
  },
  {
    name: "Art of Problem Solving",
    icon: "https://assets.artofproblemsolving.com/images/aops-logo.svg",
    link: "https://artofproblemsolving.com/",
    level: "Bronze",
  },
  {
    name: "Metro",
    icon: metro.src,
    link: "https://metro.ca/",
    level: "Bronze",
  },
  {
    name: "Gotcha Bubble Tea",
    icon: gotcha.src,
    link: "https://www.instagram.com/gotchabubbletea_oakville",
    level: "Bronze",
  },
];

const Sponsors = (args) => {
  useEffect(() => {
    // Heading animation
    gsap.from(".sponsorsHeading", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".sponsorsHeading",
        start: "top 80%",
      },
    });

    // Initialize intersection observer for sponsor cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add stagger effect based on index
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0) translateX(0)";
            }, index * 100);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    // Observe all sponsor cards
    document.querySelectorAll(".sponsorCard").forEach((card) => {
      observer.observe(card);
    });

    // Button animation
    gsap.from(".sponsorButton", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".sponsorButton",
        start: "top 90%",
      },
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container
      mt={{ base: "50px", lg: "24" }}
      minW="full"
      textAlign="center"
      id={args.id}
    >
      <div className="sponsorsHeading">
        <Heading fontSize={{ base: "1.5rem", lg: "3rem" }} mb="4">
          Our Sponsors
        </Heading>
        <Thin fontSize={{ base: "0.9rem", lg: "1.2rem" }}>
          Thank you to all our sponsors supporting us for 2024 - 2025!
        </Thin>
      </div>
      <Button
        leftIcon={<EmailIcon />}
        className="sponsorButton"
        mt="8"
        size="lg"
        as="a"
        href="mailto:hacktheridge24@gmail.com"
        _hover={{
          transform: "translateY(-5px)",
          boxShadow: "lg",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        Become a Sponsor
      </Button>
      <div className="sponsorsStack">
        <SimpleGrid
          p="8"
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          spacing="6"
        >
          {sponsorData.map((sponsor, i) => (
            <Sponsor key={i} {...sponsor} className="sponsorCard" />
          ))}
        </SimpleGrid>
      </div>
    </Container>
  );
};

export default Sponsors;