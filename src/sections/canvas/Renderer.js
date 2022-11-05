/**
 * THREE.JS IMPORTS
 */
import * as THREE from "three";
import Anim from "./Anim";

import {
  SMAAEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  GlitchEffect,
} from "postprocessing";

export default class Renderer {
  constructor() {
    // Global access
    this.anim = new Anim();

    // Main properties
    this.canvas = this.anim.canvas;
    this.camera = this.anim.camera;
    this.scene = this.anim.scene;
    this.sizes = this.anim.sizes;

    // Setup
    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      depth: true,
      alpha: true,
    });

    this.instance.physicallyCorrectLights = true;
    this.instance.outputEncoding = THREE.sRGBEncoding;
    this.instance.toneMapping = THREE.CineonToneMapping;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setClearColor("#000000", 0);
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
    this.instance.set;
  }

  setPost() {
    this.composer = new EffectComposer(this.instance, {
      frameBufferType: THREE.HalfFloatType,
    });

    this.renderPass = new RenderPass(this.scene, this.camera.instance);
    this.composer.addPass(this.renderPass);

    this.glitchPass = new EffectPass(this.scene, new GlitchEffect());
    this.glitchPass.mode = 3;
    this.composer.addPass(this.glitchPass);

    this.smaaPass = new EffectPass(this.scene, new SMAAEffect());
    this.composer.addPass(this.smaaPass);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }
}
