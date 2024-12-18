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
        spacing={{ base: "2", sm: "2" }}
      >
        <Heading fontSize={{ base: "xs", sm: "sm", lg: "xl" }}>
          Iroquois Ridge High School
        </Heading>
        <Heading
          fontSize={{ base: "xs", sm: "sm", lg: "xl" }}
          pl={{ base: "2", sm: "4", md: "0" }}
          pr={{ base: "2", sm: "4", md: "0" }}
        >
          /
        </Heading>
        <Heading fontSize={{ base: "xs", sm: "sm", lg: "xl" }}>
          December 14, 2024
        </Heading>
        <Heading
          fontSize={{ base: "xs", sm: "sm", lg: "xl" }}
          pl={{ base: "2", sm: "4", md: "0" }}
          pr={{ base: "2", sm: "4", md: "0" }}
        >
          /
        </Heading>
        <Heading fontSize={{ base: "xs", sm: "sm", lg: "xl" }}>
          Largest Highschool Hackathon in Canada
        </Heading>
      </HStack>
    </div>
  );
};

export default Details;