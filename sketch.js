const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var block1;

function preload(){
	ball = loadImage("images/paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(130, 400, 30, 30)
	ground = new Ground(400, 600, 700, 10)
	block1 = new Block(560, 520, 16, 120)
	block2 = new Block(640, 580, 140, 16)
	block3 = new Block(720, 520, 16, 120)
	Engine.run(engine);

}


function draw() {
	background("white");
	Engine.update(engine)



	ground.display();
	block1.display();
	block2.display();
	block3.display();
		ball.display();


}

function keyPressed(){
	if(keyCode === UP_ARROW){
			Matter.Body.applyForce(ball.body,ball.body.position,{x:20, y:-20})
	}
}
