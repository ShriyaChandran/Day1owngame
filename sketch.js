const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var paperBall, trashCan, ground,backgroundImg;

function preload(){
    backgroundImg = loadImage("js/bg.jpg");
}

function setup(){
    // creating a canvas
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    // intiating the paper ball
    paperBall = new PaperBall(400,400,15);
    ground = new Ground(400,785,800,30);
    trashCan = new Trashcan(150,150);
}

function draw(){
    // background colour
    background(backgroundImg);
    Engine.update(engine);
    // displaying the paper ball
    paperBall.display();
    ground.display(); 
    trashCan.display();
}