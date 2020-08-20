
var paperObject,groundObject,dustbinObject


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperObject=new Paper(200,450,40)
dustbinObject=new Dustbin(1200,650)
groundObject=new Ground(800,670,1600,20)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

paperObject.display()
dustbinObject.display()
groundObject.display()




  drawSprites();
 
}
function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:125,y:-125});
    }
}



