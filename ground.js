class Ground{

    constructor(){

        var options={
            isStatic:true,
            friction:0.4
        }
      this.body = Bodies.rectangle(windowWidth/2,650,windowWidth,20,options);
      World.add(world, this.body);
    }
    display(){
      
     rectMode(CENTER);
      rect(windowWidth/2,1000,windowWidth,20);
     
    }


}