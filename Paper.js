class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      this.height = 50;
   
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("green")
      strokeWeight(3)
      fill("white");
      ellipse(0, 0, this.width);
      pop();
    }
  };

  // body position force