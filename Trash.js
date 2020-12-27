class Paper {
  constructor(x, y) {
    var options = {
        restitution:0.8,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.rectangle(x, y, 20, 20, options);
    this.width = 20;
    this.height = 20;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
}