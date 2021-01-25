var fixedRect, movingRect;
var gameObject1;

var Block1, Block2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1= createSprite(100,100,50,50);
  gameObject1.shapeColor="green";

  Block1 = createSprite(900, 100, 10, 100)
  Block2 = createSprite(900, 300, 10, 100)

  Block1.velocityY = 8
  Block2.velocityY = -8
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounce(Block1, Block2)

 if(touching(movingRect,gameObject1)){//true
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
 }

 else {//false
  movingRect.shapeColor = "blue";
  gameObject1.shapeColor = "blue";
 }
  drawSprites();
}
