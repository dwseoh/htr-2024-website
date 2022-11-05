import {
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Container,
  Divider,
} from "@chakra-ui/layout";
import Thin from "./helpers";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StreamText = (args) => {
  args = args.children;
  const textAlign = args.right ? "right" : "left";
  const padding = args.right ? { pl: "16" } : { pr: "16" };

  return (
    <Container>
      <Heading
        mt={{ base: "5", md: "0" }}
        fontSize={{ base: "0.75rem", lg: "2rem" }}
        textAlign={textAlign}
      >
        {args.header}
      </Heading>
      <Thin
        {...padding}
        mt={{ base: "6", lg: "12" }}
        textAlign={textAlign}
        lineHeight={{ base: "1.5rem", lg: "2rem" }}
        fontSize={{ base: "0.75rem", lg: "0.9rem" }}
      >
        {args.content}
      </Thin>
    </Container>
  );
};

const Streams = (args) => {
  useEffect(() => {
    gsap.from(".streamsHeading", {
      scrollTrigger: {
        trigger: ".streamsHeading",
        start: "bottom bottom",
      },
      y: -50,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".streamsTextOne", {
      scrollTrigger: {
        trigger: ".streamsHeading",
        start: "bottom bottom",
      },
      y: -100,
      opacity: 0,
      duration: 2,
    });

    gsap.from(".streamsTextTwo", {
      scrollTrigger: {
        trigger: ".streamsHeading",
        start: "bottom bottom",
      },
      y: -100,
      opacity: 0,
      duration: 2,
    });
  });

  return (
    <VStack
      id={args.id}
      w="full"
      align="center"
      h="auto"
      mt={{ base: "50", lg: "24" }}
    >
      <div className="streamsHeading">
        <Heading
          fontSize={{ base: "1.25rem", lg: "3rem" }}
          mb={{ base: "4", lg: "6" }}
        >
          Streams
        </Heading>
        <Thin fontSize={{ base: "0.75rem", lg: "1rem" }}>
          the competitions you can join
        </Thin>
      </div>
      <SimpleGrid
        columns={{ base: "1", lg: "2" }}
        w="100%"
        pt={{ base: "4", lg: "70" }}
      >
        <div className="streamsTextOne">
          <StreamText>
            {{
              header: "Coding Stream",
              content:
                "For the curious programmer to the passionate developer seeking to make change. While competing in the coding stream, you'll be heavily focused on tech based solutions to any problem or inconvenience you can think of. In the end, you'll present your project to a panel of judges for critique. A coding submission is required.",
              right: false,
            }}
          </StreamText>
        </div>
        <div className="streamsTextTwo">
          <StreamText>
            {{
              header: "Business Stream",
              content:
                "For the entrepreneurially driven students willing to pursue their newfound\nideas and interests. If you have a business concept in mind and want to see how it might fare in the real world, you're in the right place. Pitch your idea with or without deliverables, no coding required.",
              right: true,
            }}
          </StreamText>
        </div>
      </SimpleGrid>
    </VStack>
  );
};

export default Streams;
