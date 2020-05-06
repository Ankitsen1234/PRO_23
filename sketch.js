const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,800,400)
    box1 = new Box(700,320,50,50);
    box2 = new Box(800,320,50,50);
    box3 = new Box(800,300,60,50);
    box4 = new Box(700,300,60,50);
    box5 = new Box(80,100,70,70);
    log2 = new Log(810,160,300,PI/3);
    log3 = new Log(760,120,150,PI/6);
    log4 = new Log(870,120,150,PI/6);
   
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display(); 
    log1.display();
    log2.display();
    log3.display();
    log4.display(); 
  drawSprites();
}