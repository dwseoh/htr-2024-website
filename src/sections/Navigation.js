/**
 * EXTERNAL
 */
import { Flex, HStack, Heading, Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "./img/logo.png";
// import {} from "@chakra/icons"
const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex w="full" mt={10} justifyContent="flex-end">     
      <HStack spacing={59} pr={59} display={{ base: "none", lg: "flex" }}>
        <Heading as="a" href="#about" fontSize="lg">
          About
        </Heading>
        <Heading as="a" href="https://hack-the-ridge-2024.devpost.com/?preview_token=82FkBOLes1WKh4QdTFr1oRk8uijbzoHISag9vDciIOw%3D" fontSize="lg">
          Devpost
        </Heading>
        <Heading as="a" href="#schedule" fontSize="lg">
          Schedule
        </Heading>
        <Heading as="a" href="#sponsors" fontSize="lg">
          Sponsors
        </Heading>
        <Heading as="a" href="#team" fontSize="lg">
          Team
        </Heading>
        <Heading as="a" href="https://my.mlh.io/oauth/authorize?client_id=rvBQdXCDB9bGD1G0TlVwSwIRiG5_0oRjr8Zb4iIRd6o&redirect_uri=https%3A%2F%2Fhacktheridge.ca%2F&response_type=token" fontSize="lg">
          Register
        </Heading>
        <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </HStack>
    </Flex>
  );
};

export default Navigation;
