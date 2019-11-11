class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':0.1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,40,40, options);
      this.width = 40;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("white");
      strokeWeight(3); 
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  