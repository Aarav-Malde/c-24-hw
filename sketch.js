var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper,b1,b2,b3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	paper = new Paper(100,100,50)

	ground = new Ground(width/2,380,width,10,{isStatic:true})

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	 b1 = new Boxes(650,350,200,20);
	 b2 = new Boxes(540,310,20,100);
	 b3 = new Boxes(760,310,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#AFEEEE");
  
  drawSprites();
 paper.display();
 b1.display();
 b2.display();
 b3.display();
 ground.display();

 keyPressed();
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-25});
	}
}