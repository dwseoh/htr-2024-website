import { Flex, Heading, VStack, HStack, Link } from "@chakra-ui/layout";
import { SocialIcon } from "react-social-icons";
import Thin from "./helpers";
import links from './links';

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Icon = ({ text, url, network }) => {
  return (
    <HStack pl={{ sm: 5, md: 20 }} spacing={12} pb="6">
      <SocialIcon target="_blank" network={network} url={url} />
      <Thin fontSize="1rem">
        <Link href={url} isExternal>
          {text}
        </Link>
      </Thin>
    </HStack>
  );
};

const RegisterContact = (args) => {
  useEffect(() => {
    gsap.from(".rcHeading", {
      scrollTrigger: {
        trigger: ".rcHeading",
        start: "bottom bottom",
      },
      x: 50,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(".rcIcons", {
      scrollTrigger: {
        trigger: ".rcIcons",
        start: "bottom bottom",
      },
      x: -50,
      opacity: 0,
      duration: 1.5,
      delay: 0.1,
    });
  });

  return (
    <VStack id={args.id} alignItems="left" mt={{ base: "50", lg: "24" }}>
      <div className="rcHeading">
        <Heading mb="5" fontSize={{ base: "1.25rem", lg: "3rem" }}>
          Register & Contact
        </Heading>
        <Thin fontSize={{ base: "0.75rem", lg: "1rem" }}>
          sign up & get in touch with us!
        </Thin>
      </div>
      <div className="rcIcons">
        <VStack direction="row" w="full" pt="16" alignItems="flex-start">
          <Icon
            text="register here!"
            url=links.registration
            network="sharethis"
          />
          <Icon
            text=links.email
            url=`mailto:${links.email}`
            network="mailto"
          />
          <Icon
            text="@hacktheridge"
            url=links.instagram
            network="instagram"
          />
          <Icon
            text="Join our discord server"
            url=links.discord
            network="discord"
          />
          <Icon
              text="DevPost!"
              url=links.devpost
              network="rss"
          />
        </VStack>
      </div>
    </VStack>
  );
};

export default RegisterContact;
