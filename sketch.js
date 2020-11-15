
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper();
	ground=new Ground();

	box1=new Bin(500,550,100,300);
	box2=new Sidebin(550,530,5,100);
	box3=new Sidebin(450,530,5,100);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  
 
  
  drawSprites();
 
}
function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1700,y:-5000})
	}
}



