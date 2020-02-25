const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var  ball1,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball2_options ={
      isStatic:true
   }


    
    var ball1_options ={
       isStatic:true
    }

    
    ball1 = Bodies.circle(200,100,20, ball1_options);
    World.add(world,ball1);

    ball2 = Bodies.circle(100,200,20,ball2_options);
    
console.log(ball2)
    World.add(world,ball2);
    
   
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ball2.position.x=mouseX;
    ball2.position.y=mouseY;

    ellipseMode(RADIUS);
    ellipse(ball1.position.x, ball1.position.y, 20, 20);
    ellipse(ball2.position.x, ball2.position.y, 20, 20);
    istouching();
}
function istouching(){
  var d = dist(ball1.position.x, ball1.position.y, ball2.position.x, ball2.position.y);
  // now see if distance between two is less than sum of two radius'
  if (d < ball1.circleRadius + ball2.circleRadius) {
    fill(150);
    console.log("collided")
    //fill(changeColor());
   //ssball1.colorMode("red");
    //ball2.changeColor("red");

    }
  }

