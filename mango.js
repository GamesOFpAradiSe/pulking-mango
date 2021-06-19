class Mango{
    constructor(x, y, r) {
        var options = {
            isStatic:true,
            'restitution':0.5,
            'friction':1.0,
        }
        this.body = Bodies.circle(x, y, r/2 , options);
        this.r=r;
        this.image = loadImage("assest/mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
      }
}