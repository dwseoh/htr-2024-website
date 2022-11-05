/**
 * EXTERNAL
 */

import { useEffect } from "react";

import { VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";

import gsap from "gsap";

/**
 * THREE.JS IMPORTS
 */
import Anim from "./canvas/Anim";

let instance = null;

const Canvas = () => {
  useEffect(() => {
    const anim = new Anim(document.querySelector("canvas.webgl"));
    window.anim = anim;
    gsap.fromTo(
      ".canvas",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 6,
      }
    );
  });

  return (
    <VStack w="full" mt={{ base: "26", sm: "50", md: "100" }}>
      <div className="canvas" style={{ position: "relative" }}>
        <canvas className="webgl"></canvas>
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
    </VStack>
  );
};

export default Canvas;
