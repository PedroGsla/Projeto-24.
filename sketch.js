
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;
var b1,b2,b3,b4;
var top_wall;
var bola,pedra;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
 
  var bola_options = {
    
     restitution: 1,

  }

  var pedra_options = {
    
    
     restitution: -0.8,
    

  }
   
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked
  (vForce);
  
  bola = Bodies.circle(100,10,20,bola_options);
  World.add(world,bola);
  
  pedra = Bodies.circle(250,10,20,pedra_options);
  World.add(world,pedra);

  ground= Bodies.rectangle(200,390,400,20,ground_options);

  World.add(world, ground);
 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
rect(ground.position.x,ground.position.y,400,20);
ellipse(bola.position.x,bola.position.y,20);
push();
fill("brown");
ellipse(pedra.position.x,pedra.position.y,20);
pop();
}

function vForce()
{
   Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.05});

}


  


