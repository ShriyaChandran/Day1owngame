const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var paperBall, trashCan, ground;

function preload(){

}

function setup(){
    // creating a canvas
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    // intiating the paper ball
    paperBall = new PaperBall(400,400,15);
}

function draw(){
    // background colour
    background("white");
    Engine.update(engine);
    // displaying the paper ball
    paperBall.display();
}