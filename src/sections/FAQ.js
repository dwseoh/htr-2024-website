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
              question:
                "Can you tell me more about Hack the Ridge's virtual approach?",
              answer:
                "HTR will be operating 100% virtually this year, meaning all video communication between the staff and members will be done through Google Meet. Workshops hosted by our volunteers and sponsors will be held virtually through Google Meet or Zoom. During the hackathon, you must find a way to communicate and collaborate with your team: you could choose to meet up in person to work, or meet virtually.",
            }}
          </Question>
          <Question>
            {{
              question: "What are the prizes for winning?",
              answer:
                "Our current prize pool is worth $1000+, and is expected to grow. Winnings will be distributed through gift cards and swag. There will be two winners per stream: first place winner and runner up.",
            }}
          </Question>
          <Question>
            {{
              question: "Who can register?",
              answer:
                "Our hackathon intended for students in HDSB, however you can join if you're outside of Halton. Must be a high school student!",
            }}
          </Question>
          <Question>
            {{
              question: "What's the theme for Hack The Ridge?",
              answer:
                "This year, there is no set theme or sector. What you decide to focus your efforts on is completely up to you (as long as it's appropriate of course).",
            }}
          </Question>
        </Accordion>
      </div>
    </SimpleGrid>
  );
};

export default FAQ;
