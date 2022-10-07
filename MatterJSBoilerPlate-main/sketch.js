
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;	
var groundObj,leftSide,rightSide,world
var radius = 40

function setup() {
	createCanvas(1350,500);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options = {
		isStatic:false,
        restitution:0.3,
		friction:0,
		density:1.2
	}

    ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,470,width,20);
	leftSide = new Ground(1100,400,20,120)
	rightSide = new Ground(1350,400,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius)

  groundObj.display()
  leftSide.display()
  rightSide.display()
  drawSprites();
 
}

function KeyPressed(){
	if(KeyCode === SPACE){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

