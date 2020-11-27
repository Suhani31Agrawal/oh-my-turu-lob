class Ball{
    constructor(x,y,r) {
      var options = {
        isStatic:false,                                             
          frictionAir:0.005,
          density:0.8
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
}             