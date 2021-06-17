const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;
var train1,train2,train3,train4,train5,train6;
var rock;
var chain1,chain2,chain3,chain4,chain5;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  train1 = new Train(50,170,50,50);
  train2 = new Train(150,170,50,50);
  train3 = new Train(250,170,50,50);
  train4 = new Train(350,170,50,50);
  train5 = new Train(450,170,50,50);
  train6 = new Train(550,170,50,50);

  rock1 = new Rock(1100,200,100,100);

  chain1 = new Chain(train1.body,train2.body);
  chain2 = new Chain(train2.body,train3.body);
  chain3 = new Chain(train3.body,train4.body);
  chain4 = new Chain(train4.body,train5.body);
  chain5 = new Chain(train5.body,train6.body);


}

function draw() {
  background(bg);  
  Engine.update(myEngine);

 train1.show();
 train2.show();
 train3.show();
 train4.show();
 train5.show();
 train6.show();

 rock1.show();

 chain1.show();
 chain2.show();
 chain3.show();
 chain4.show();
 chain5.show();
 var collision = Matter.SAT.collides(boggie6.body,rock1.body);
  if(collision.collided) { 
    flag=1; } 
    if(flag ===1){
      textSize(30);
      stroke(3); 
      fill('blue');
      text("CRASH",500,200);
      crashSound.play(); 
    }
  }
  function keyPressed(){
{ if(keyCode === RIGHT_ARROW){ 
  Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y}, {x:0.5,y:0});
   trainSound.play();
   }
  }
}
