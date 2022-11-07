import {
  SimpleGrid,
  GridItem,
  Text,
  Heading,
  HStack,
  VStack,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { OrthographicCamera } from "three";
gsap.registerPlugin(ScrollTrigger);

const Question = (args) => {
  args = args.children;

  return (
    <AccordionItem>
      <AccordionButton
        _focus={{
          border: "none",
        }}
        justifyContent="space-between"
      >
        <Flex pt="5" pb="5">
          <Heading fontSize={{base: '1rem', lg: "1.5rem"}}>{args.question}</Heading>
        </Flex>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pt="5" pb="5">
        <Text fontSize={{base: '0.85rem', lg: "1rem"}}>{args.answer}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

const FAQ = () => {
  useEffect(() => {
    gsap.from(".faqHeading", {
      scrollTrigger: {
        trigger: ".faqHeading",
        start: "bottom bottom",
      },
      x: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power4",
    });

    gsap.from(".faqInfo", {
      scrollTrigger: {
        trigger: ".faqHeading",
        start: "bottom bottom",
      },
      x: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power4",
      delay: 0.3,
    });
  });

  return (
    <SimpleGrid
      mt={{base: '50', lg: "24"}}
      w="full"
      templateColumns={{ sm: "1fr", lg: "1fr 10fr", "2xl": "2fr 3fr" }}
      spacing={20}
    >
      <VStack alignSelf="center">
        <Heading fontSize={{base: '4rem', lg: "10rem"}} mb={{lg: "5"}} className="faqHeading">
          FAQ
        </Heading>
      </VStack>
      <div alignSelf="center" className="faqInfo">
        <Accordion allowToggle allowMultiple mb={{base: '5', sm: '0'}}>
          <Question>
            {{
              question: "Do I need prior coding experience to participate?",
              answer:
                "There is no experience required to participate! You will have the opportunity to learn through our workshops or participate in our business stream.",
            }}
          </Question>
          <Question>
            {{
              question: "How are the teams going to work?",
              answer:
                "Teams can be made with one to four people. You can also compete solo. If you don't think you can find a team before HTR starts, there will be a team finder session during the event where you can find other members to work with.",
            }}
          </Question>
          <Question>
            {{
              question: "What are the prizes for winning?",
              answer:
                "Our current prize pool is worth $200+, and is expected to grow. Winnings will be distributed through gift cards and swag. There will be two winners per stream: first place winner and runner up.",
            }}
          </Question>
          <Question>
            {{
              question: "Who can register?",
              answer:
                "Our hackathon intended for students no matter what grade or school!!",
            }}
          </Question>
          <Question>
            {{
              question: "What's the theme for Hack The Ridge?",
              answer:
                "The theme will be relased the day of the hacaton",
            }}
          </Question>
        </Accordion>
      </div>
    </SimpleGrid>
  );
};

export default FAQ;
