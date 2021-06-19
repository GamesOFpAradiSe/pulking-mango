const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dground, tree,treeimg;
var boy, boyimg;
var stones,bg
var mango1, mango2, mango3, mango4, mango5, mango6, maango7, mango8, mango9, mango10,score = 0

function preload(){
	treeimg=loadImage("assest/tree.png");
	boyimg=loadImage("assest/boy.png");
	bg = loadImage("assest/bg.jpg")
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;



	dground=new Ground();
	stones=new Stone(340,465,55);
	mango1=new Mango(1125,290,55);
	mango2=new Mango(1500,325,55);
	mango3=new Mango(1250,260,55);
	mango4=new Mango(1330,200,55);
	mango5=new Mango(1400,320,55);
	mango6=new Mango(1425,250,55);
	mango7=new Mango(1225,170,55);
	mango8=new Mango(1175,370,55);
	mango9=new Mango(1300,340,55);
	mango10=new Mango(1190,300,55);

	attach=new Throw(stones.body,{x:340,y:465});

	tree=createSprite(windowWidth/2+500,368);
	tree.addImage(treeimg);
	tree.scale=0.42;

	boy=createSprite(400,550);
	boy.addImage(boyimg);
	boy.scale=0.125;

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(bg);

  fill("black");
  textSize(25);

  

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);



  drawSprites();

  stones.display();
 dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();


}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){


	
	if(lstones.body.position.x- lmango.body.position.x <lmango.r + lstones.r
		&& lmango.body.position.x - lstones.body.position.x  < lmango.r + lstones.r
		&&lstones.body.position.y -lmango.body.position.y < lmango.r + lstones.r
		&& lmango.body.position.y - lstones.body.position.y < lmango.r + lstones.r){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:340,y:465});
		attach.Launch(stones.body);
	}
}