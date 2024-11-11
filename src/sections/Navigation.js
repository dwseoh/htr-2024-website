import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, HStack, VStack, Heading, Image, Box, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, Spacer } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import logoLight from "./img/logo-light.png";
import logoDark from "./img/logo-dark.png";

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <Flex
        position="fixed"
        top="0"
        width="100%"
        bg={colorMode === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(26, 32, 44, 0.8)"}
        backdropFilter="blur(10px)"
        zIndex="1000"
        px={{ base: 4, md: 59 }}
        py={4}
        transition="transform 0.3s ease-in-out, background-color 0.3s ease-in-out"
        transform={show ? "translateY(0)" : "translateY(-100%)"}
        align="center"
      >
        {/* Logo and name aligned to the left */}
        <Flex align="center">
          <Image
            src={colorMode === "light" ? logoDark.src : logoLight.src}
            alt="Logo"
            h="48px"
            cursor="pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            transition="opacity 0.2s ease-in-out"
            _hover={{ opacity: 0.9 }}
          />
          <Heading
            as="h1"
            size="lg"
            ml={4}
            fontSize={{ base: "lg", md: "lg" }}
            color={colorMode === "light" ? "gray.800" : "white"}
          >
            Hack the Ridge
          </Heading>
        </Flex>

        {/* Spacer to push the navigation links to the right */}
        <Spacer />

        {/* Desktop Navigation Links */}
        <HStack spacing={8} align="center" display={{ base: "none", md: "flex" }}>
          <Heading 
            as="a" 
            href="#about" 
            fontSize="lg"
            transition="color 0.2s"
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
          >
            About
          </Heading>
          <Heading 
            as="a" 
            href="https://hack-the-ridge-2024.devpost.com/" 
            fontSize="lg"
            transition="color 0.2s"
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
          >
            Devpost
          </Heading>
          <Heading 
            as="a" 
            href="#schedule" 
            fontSize="lg"
            transition="color 0.2s"
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
          >
            Schedule
          </Heading>
          <Heading 
            as="a" 
            href="#sponsors" 
            fontSize="lg"
            transition="color 0.2s"
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
          >
            Sponsors
          </Heading>
          <Heading 
            as="a" 
            href="#team" 
            fontSize="lg"
            transition="color 0.2s"
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
          >
            Team
          </Heading>
          <Heading 
            as="a" 
            href="https://forms.gle/sEGW2djeqhXsmd9J8" 
            fontSize="lg"
            transition="color 0.2s"
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
          >
            Register
          </Heading>
          <IconButton
            aria-label="Toggle Mode"
            onClick={toggleColorMode}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.1)' }}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </HStack>

        {/* Mobile Hamburger Menu */}
        <IconButton
          aria-label="Open Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg={colorMode === "light" ? "white" : "gray.800"}
          backdropFilter="blur(10px)"
        >
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={6} mt={12}>
              <Heading 
                as="a" 
                href="#about" 
                fontSize="lg"
                onClick={onClose}
                _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
              >
                About
              </Heading>
              <Heading 
                as="a" 
                href="https://hack-the-ridge-2024.devpost.com/" 
                fontSize="lg"
                onClick={onClose}
                _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
              >
                Devpost
              </Heading>
              <Heading 
                as="a" 
                href="#schedule" 
                fontSize="lg"
                onClick={onClose}
                _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
              >
                Schedule
              </Heading>
              <Heading 
                as="a" 
                href="#sponsors" 
                fontSize="lg"
                onClick={onClose}
                _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
              >
                Sponsors
              </Heading>
              <Heading 
                as="a" 
                href="#team" 
                fontSize="lg"
                onClick={onClose}
                _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
              >
                Team
              </Heading>
              <Heading 
                as="a" 
                href="https://forms.gle/sEGW2djeqhXsmd9J8" 
                fontSize="lg"
                onClick={onClose}
                _hover={{ color: colorMode === "light" ? "gray.600" : "gray.300" }}
              >
                Register
              </Heading>
              <IconButton
                aria-label="Toggle Mode"
                onClick={toggleColorMode}
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.1)' }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navigation;