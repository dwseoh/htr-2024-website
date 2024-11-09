/**
 * EXTERNAL EXPORTS
 */
import { HStack, Text, Box } from "@chakra-ui/react";

import { useEffect } from "react";

import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
gsap.registerPlugin(TextPlugin);

const Description = () => {
  useEffect(() => {
    animateText(1);
    gsap.from("#desc", { opacity: 0, duration: 2 });
  });

  return (
    <HStack alignItems="center" justifyContent="center" mt="8" w="full">
      <Box mt="3" textStyle="thin" h="12" fontSize={{ base:'md', sm: "xl", lg: "2xl" }}>
        <p id="desc"></p>
      </Box>
    </HStack>
  );
};
const phrases = ["Innovate to solve real-world problems.", "Design to make it pretty.", "Collaborate to make it better.", "Develop to make it work."]; // Come on thomas
const animateText = (phrase) => {
  let text = "";
  phrase %= phrases.length;
  text = phrases[phrase];

  const tl = gsap.timeline({
    repeat: 1,
    repeatDelay: 2,
    yoyo: true,
    onComplete: () => {
      animateText(phrase + 1);
    },
  });

  tl.to("#desc", {
    text: {
      value: text,
    },
    duration: 0.5,
    ease: "none",
  });
};

export default Description;
