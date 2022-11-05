import { HStack, Heading } from "@chakra-ui/react";

import { useEffect } from "react";

import gsap from "gsap";

const Details = () => {
  useEffect(() => {
    gsap.from(".details", { x: 50, opacity: 0, ease: "power4", duration: 2 });
  });

  return (
    <div className="details">
      <HStack
        alignItems="center"
        justifyContent="space-evenly"
        mt="8"
        w="full"
        spacing={{ sm: "2" }}
      >
        <Heading fontSize={{ base: "0.5rem", sm: "xs", lg: "xl" }}>
          In Person Hackathon
        </Heading>
        <Heading
          fontSize={{ base: "0.5rem", sm: "xs", lg: "xl" }}
          pl={{ base: "6", sm: "4", md: "0" }}
          pr={{ base: "6", sm: "4", md: "0" }}
        >
          /
        </Heading>
        <Heading fontSize={{ base: "0.5rem", sm: "xs", lg: "xl" }}>
          December 10th, 2022
        </Heading>
        <Heading
          fontSize={{ base: "0.5rem", sm: "xs", lg: "xl" }}
          pl={{ base: "6", sm: "4", md: "0" }}
          pr={{ base: "6", sm: "4", md: "0" }}
        >
          /
        </Heading>
        <Heading fontSize={{ base: "0.5rem", sm: "xs", lg: "xl" }}>
          12 Hour Event
        </Heading>
      </HStack>
    </div>
  );
};

export default Details;
