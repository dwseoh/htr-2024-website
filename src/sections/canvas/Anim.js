/**
 * IMPORTS
 */
import * as THREE from "three";

import Resources from "./utils/Resources";
import Sizes from "./utils/Sizes";
import Time from "./utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";

import sources from "./sources";

import World from "./World";

/**
 * Singleton class
 */

let instance = null;

class Anim {
  constructor(canvas) {
    // Singleton setup
    if (instance) {
      return instance;
    }
    instance = this;

    // Main properties
    this.canvas = canvas;

    this.sizes = new Sizes();
    this.time = new Time();

    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.resources = new Resources(sources);

    // The actual scene
    this.world = new World();

    // Event listeners
    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.renderer.resize();
    this.camera.resize();
  }

  update() {
    this.world.update();
    this.camera.update();
  }
}

export default Anim;
