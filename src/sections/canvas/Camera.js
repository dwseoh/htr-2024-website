/**
 * THREE.JS IMPORTS
 */
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Anim from "./Anim";

export default class Camera {
  constructor() {
    // Global access
    this.anim = new Anim();

    // Main properties
    this.canvas = this.anim.canvas;
    this.sizes = this.anim.sizes;
    this.scene = this.anim.scene;

    // Setup
    this.setInstance();
    this.setOrbitControls();
  }

  setInstance() {
    this.focusPoint = new THREE.Vector3(0, 0, 0);
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      500
    );
    this.instance.position.set(30, 17, -13);
    this.instance.zoom = 1.5;
    this.instance.lookAt(this.focusPoint);
    this.instance.updateProjectionMatrix();
    this.scene.add(this.instance);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
    this.controls.enabled = false;
    this.controls.enableKeys = false;
    this.controls.enablePan = false;
    this.controls.enableRotate = false;
    this.controls.enableZoom = false;
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}
