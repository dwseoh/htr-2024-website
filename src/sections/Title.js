import { VStack, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import gsap from "gsap";

const Title = () => {
  useEffect(() => {
    gsap.from(".title", { x: -50, opacity: 0, duration: 2, ease: "power4" });
  }, []);

  return (
    <VStack alignItems="center" w="full" pt={{ base: "30px", md: "50px" }}>
      <div className="title">
        <Heading 
          fontSize={{ base: "5xl", sm: "7xl", md: "8xl", lg: "9xl" }} 
          textAlign="center"
          lineHeight={{ base: "1.1", sm: "1" }}
        >
          Hack The Ridge
        </Heading>
      </div>
    </VStack>
  );
};

export default Title;