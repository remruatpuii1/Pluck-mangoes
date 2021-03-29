
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,chain;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,120,25);
    mango3=new mango(1200,200,25);
    mango4=new mango(1140,190,25);
    mango5=new mango(900,180,25);
    mango6=new mango(1000,110,25);
    mango7=new mango(1230,155,25);
    mango8=new mango(1000,200,25);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(250,340,20,20);
	launcherObject=new String(stoneObj.body,{x:230,y:415});
	Engine.run(engine);

}

function draw() {

  background("lightblue");
  
  image(boy ,200,340,200,300);
  
  launcherObject.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stoneObj.display();
  groundObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);

  fill("black")
  textSize(15);
  text("Press Space to get a second chance to play",40,40);
}
function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
	launcherObject.fly();
}
function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
    launcherObject.attacher(stoneObj.body);
  }
}