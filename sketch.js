
var paperObject,groundObject,dustbinObject


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  Matter.Bodies.circle(30,30, 10, [options], [maxSides])


  drawSprites();
 
}
function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    }
}



