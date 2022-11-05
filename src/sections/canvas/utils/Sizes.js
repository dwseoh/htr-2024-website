import EventEmitter from "./EventEmitter.js";

export default class Sizes extends EventEmitter {
  constructor() {
    super();

    // Properties 
    this.widthMultiplier = window.innerWidth < 375 ? 1 : 0.50
    this.heightMultiplier = window.innerWidth < 600 ? 0.4 : 0.45

    this.width = window.innerWidth * this.widthMultiplier
    this.height = window.innerHeight * this.heightMultiplier
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
      
    window.addEventListener('resize', () => {
      this.width = window.innerWidth * this.widthMultiplier
      this.height = window.innerHeight * this.heightMultiplier
      this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    })

    // Emit event
    this.trigger("resize")
  }
}
