var bgImg;
var boy,boyImg;
var a,a1,a2,a3;

function preload()
{
 bgImg = loadImage("winter.jpg");
 boyImg = loadImage("kids.png");
 a1=loadImage("snow.png");
 a3 = loadImage("snow2.png");
}

function setup() {
  createCanvas(1535,750);
  boy = createSprite(380,380,20,20)
  boy.addImage(boyImg);
  boy.scale=0.6;
}

function draw() {
  background(bgImg);
  
  fill("black");
  stroke("white");
  textFont("algerian")
  textSize(45)
  text("PRESS  ENTER",600,80);

  if(keyDown(ENTER)){
    boy.velocityX=8;
    boy.velocityY=1.5;
  }

  if(frameCount%60===0){
    a = createSprite(random(0,1535),0,10,10);
    a.addImage(a1);
    a.scale=0.12;
    a.velocityY=5;
  }

  if(frameCount%10===0){
    a2 = createSprite(random(0,1535),0,10,10);
    a2.addImage(a3);
    a2.scale=0.065;
    a2.velocityY=6;
  }
 
 
  drawSprites();

}

