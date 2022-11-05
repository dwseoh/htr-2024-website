/**
 * IMPORTS
 */
import { omitThemingProps } from "@chakra-ui/system";
import * as THREE from "three";
import Anim from "./Anim";
import gsap from "gsap";

export default class World {
  constructor() {
    // Global access
    this.anim = new Anim();

    // Main properties
    this.canvas = this.anim.canvas;
    this.scene = this.anim.scene;
    this.sizes = this.anim.sizes;
    this.camera = this.anim.camera.instance;
    this.renderer = this.anim.renderer;
    this.resources = this.anim.resources;
    this.cursor = {
      x: 0,
      y: 0,
    };

    // Useful variables
    this.ready = false;
    this.cameraDistance = 0;
    this.cameraAngle = 0;
    this.currAnim = false;
    this.mouseOver = false;

    this.lightDistance = 0;
    this.lightAngle = 0;

    // Event listeners
    this.canvas.addEventListener("mouseenter", (client) => {
      this.mouseOver = true;
      if (!this.currAnim) {
        this.currAnim = true;
        this.updateCameraZoom();
      }
    });

    this.canvas.addEventListener("mouseleave", (client) => {
      this.mouseOver = false;
      if (!this.currAnim) {
        this.currAnim = true;
        this.updateCameraZoomExit();
      }
    });

    // Setup
    this.resources.on("ready", () => {
      this.setFloor();
      this.setModels();
      this.setLights();
      // this.setHelpers()
      this.setCameraDistance();
      this.setLightDistance();
      this.updateMaterial();

      this.ready = true;
      this.renderer.setPost();
    });
  }

  setTest() {
    this.testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1, 10, 10),
      new THREE.MeshStandardMaterial({ wireframe: true })
    );

    this.scene.add(this.testMesh);
  }

  setFloor() {
    this.winterFloor = new THREE.Mesh(
      new THREE.CircleGeometry(25, 25),
      new THREE.MeshStandardMaterial({
        color: "#9196a8",
      })
    );
    this.winterFloor.position.y = -0.3;
    this.winterFloor.position.x = -2;
    this.winterFloorQuaternion = new THREE.Quaternion();
    this.winterFloorQuaternion.setFromAxisAngle(
      new THREE.Vector3(1, 0, 0),
      -Math.PI * 0.5
    );
    this.winterFloor.applyQuaternion(this.winterFloorQuaternion);
    this.winterFloor.receiveShadow = true;

    this.scene.add(this.winterFloor);
  }

  setModels() {
    this.winterModel = this.resources.items.winterScene.scene;
    this.winterModel.position.set(-2, -2.8, 1);
    this.scene.add(this.winterModel);
  }

  setLights() {
    this.ambientLight = new THREE.AmbientLight("#ffffff", 0.25);
    this.directionalLight = new THREE.DirectionalLight("#c0caed", 2);
    this.directionalLight.position.set(15, 20, 30);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.set(2048, 2048);
    this.directionalLight.shadow.normalBias = 0.05;

    this.directionalLight.shadow.camera.left = -20;
    this.directionalLight.shadow.camera.right = 20;
    this.directionalLight.shadow.camera.bottom = -15;
    this.directionalLight.shadow.camera.top = 20;
    this.directionalLight.shadow.camera.far = 60;

    this.scene.add(this.directionalLight, this.ambientLight);
  }

  setHelpers() {
    this.axesHelper = new THREE.AxesHelper(10);
    this.shadowCameraHelper = new THREE.CameraHelper(
      this.directionalLight.shadow.camera
    );
    this.scene.add(this.axesHelper, this.shadowCameraHelper);
  }

  setCameraDistance() {
    this.cameraDistance = this.camera.position.distanceTo(new THREE.Vector3(0));
  }

  setLightDistance() {
    this.lightDistance = this.directionalLight.position.distanceTo(
      new THREE.Vector3(0)
    );
  }

  updateMaterial() {
    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });
  }

  updateCameraRotation() {
    this.cameraAngle -= Math.PI * 0.0003;
    this.camera.position.x = this.cameraDistance * Math.cos(this.cameraAngle);
    this.camera.position.z = this.cameraDistance * Math.sin(this.cameraAngle);
  }

  updateCameraZoom() {
    gsap.to(this.camera, {
      zoom: 3,
      duration: 0.5,
      ease: "power4",
      onUpdate: () => {
        this.camera.updateProjectionMatrix();
      },
      onComplete: () => {
        if (!this.mouseOver) {
          gsap.to(this.camera, {
            zoom: 1.5,
            duration: 0.5,
            ease: "bounce",
            onUpdate: () => {
              this.camera.updateProjectionMatrix();
            },
          });
        }

        this.currAnim = false;
      },
    });
  }

  updateCameraZoomExit() {
    gsap.to(this.camera, {
      zoom: 1.5,
      duration: 0.5,
      ease: "bounce",
      onUpdate: () => {
        this.camera.updateProjectionMatrix();
      },
      onComplete: () => {
        if (this.mouseOver) {
          gsap.to(this.camera, {
            zoom: 3,
            duration: 0.5,
            ease: "power4",
            onUpdate: () => {
              this.camera.updateProjectionMatrix();
            },
          });
        }

        this.currAnim = false;
      },
    });
  }

  updateLightsRotation() {
    this.lightAngle += Math.PI * 0.0006;
    this.directionalLight.position.x =
      this.lightDistance * Math.cos(this.lightAngle);
    this.directionalLight.position.z =
      this.lightDistance * Math.sin(this.lightAngle);
  }

  update() {
    if (this.ready) {
      this.updateCameraRotation();
      this.updateLightsRotation();
      this.renderer.composer.render();
    }
  }
}
