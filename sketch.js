var fixedRect, movingRect;
var g1 , g2 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  g1 = createSprite(100,100,50,50);
  g2 = createSprite(200,100,50,50);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,g1)){   
    movingRect.shapeColor = "red";
    g1.shapeColor = "red";
  }
  else {  
    movingRect.shapeColor = "green";
    g1.shapeColor = "green";
  }
  
  drawSprites();
}
