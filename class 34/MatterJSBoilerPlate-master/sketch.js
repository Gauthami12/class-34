const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8;
var rope, ball;

function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(500,770,1000,20);
  box1 = new Box(900,100);
  box2 = new Box(900,100);
  box3 = new Box(900,100);
  box4 = new Box(900,100);
  box5 = new Box(900,100);
  box6 = new Box(900,100);
  box7 = new Box(900,100);
  box8 = new Box(900,100);
  ball = new Ball(300,500,50,50);
  rope = new Rope(ball.body, {x:300,y:50});

}
function draw() {
  background(0,0,0);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  ball.display();
  rope.diplay();
}
function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}