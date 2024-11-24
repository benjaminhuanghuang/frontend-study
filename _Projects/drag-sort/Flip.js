const Flip = (function () {
  class FlipDom {
    constructor(dom, duration = 0.5) {
      this.dom = dom;
      this.transition =
        typeof duration === "number" ? `all ${duration}s` : duration;
      this.firstPosition = {
        x: null,
        y: null,
      };
      this.isPlaying = false;
      this.transitionHandler = () =>{
        this.isPlaying = false;
        this.recordFirst();
      }
    }

    getDomPosition() {
        
    }
  }

})();
