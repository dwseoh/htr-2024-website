// Home.js

/**
 * EXTERNAL IMPORTS
 */
import { Container, Divider } from "@chakra-ui/react";

/**
 * COMPONENTS
 */
import Navigation from "../src/sections/Navigation";
import Title from "../src/sections/Title";
import Description from "../src/sections/Description";
import Details from "../src/sections/Details";
import Canvas from "../src/sections/Canvas";
import About from "../src/sections/About";
import Streams from "../src/sections/Streams";
import Schedule from "../src/sections/Schedule";
import Sponsors from "../src/sections/Sponsors";
import Team from "../src/sections/Team";
import RegisterContact from "../src/sections/RegisterContact";
import FAQ from "../src/sections/FAQ";
import Footer from "../src/sections/Footer";

const Divide = () => {
  return <Divider mt={{ base: "50px", lg: "100px" }}></Divider>;
};

const Home = () => {
  return (
    <Container
      maxW={{ base: "95vw", lg: "full" }}
      p="0"
      h="auto"
      alignItems="center"
      overflowX="clip"
    >
      <Navigation />

      {/* Added top margin to prevent content overlap with the fixed navbar */}
      <Container
        maxW={{ base: "85vw", md: "80vw", lg: "75vw" }}
        p="0"
        mt="80px" // Adjusted margin-top to match the navbar height
        h="auto"
      >
        <Title />
        <Description />
        <Details />
        <Canvas />
        <Divide />
        <About id="about" />
        <Divide />
        <Schedule id="schedule" />
        <Divide />
        <FAQ />
        <Divide />
        <Sponsors id="sponsors" />
        <Divide />
        <Team id="team" />
        <Divide />
        <RegisterContact id="register" />
      </Container>
    </Container>
  );
};

export default Home;