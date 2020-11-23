var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ground;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;
 
  var packageBody_options={
	  restitution:0.3
  }

  
	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBody_options);
	World.add(world, packageBody);
	
	box1 = new Box(300,400,20,200);
	box2 = new Box(500,400,20,200);
    box3 = new Box(400,450,200,20);

	//Create a Ground
	ground = new Ground(400,height,800,20)


}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode===DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Engine.update(engine);
	   
	 }
   }
   
