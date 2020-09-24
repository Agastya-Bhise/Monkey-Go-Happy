var bananaImage;
var obstacleImage;
var obstacleGroup;
var foodGroup;
var background1;
var score = 0;
var monkey, banana;
var ground;
var obstacle;
var gameState;




function preload()

{
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
backImage = loadImage("jungle.jpg");
 
}





function setup() 

{
createCanvas(400, 400);
  
background1 = createSprite(200, 200, 10, 10);
background1.addImage(backImage);
background1.scale = 0.6;
background1.velocityX = -4;
  
ground = createSprite(200, 350, 400, 10);
ground.visible = false;

monkey = createSprite(60, 340, 10, 10);
monkey.addAnimation("monkey", monkey_running);
monkey.scale = 0.09;
  
foodGroup = new Group();
obstacleGroup = new Group();

textSize(20);
stroke("white");
fill("white");


  
  

}

function draw() 

{
background(220);
  
  
    
    if(keyDown("SPACE"))  
{
   monkey.velocityY = -4  
} 
monkey.velocityY = monkey.velocityY + 0.3;
  
    spawnBanana();
    spawnObstacle();
  
if(background1.x < 97) 
{
   background1.x = width/2;
}
  
if(monkey.isTouching(foodGroup))
{
   foodGroup.destroyEach();
   score = score + 2;

}
  
  if(obstacleGroup.isTouching(monkey))
{
   monkey.scale = 0.09;
  score = 0;
  
}
    
    
  
       
  switch(score)
  {
    case 10: monkey.scale = 0.11;
    break;
    case 20: monkey.scale = 0.13;
    break;
    case 30: monkey.scale = 0.15;
    break;
    case 40: monkey.scale = 0.17;
    break;
    default:break;
      
  }
  
  
  
 monkey.collide(ground);
  
  drawSprites();
  text("Score : " + score, 300, 50);
}




function spawnBanana()
{

if(World.frameCount % 100 === 0)
{
  random = (100, 170);
  banana = createSprite(400, random, 20, 20);
  banana.addImage(bananaImage);
  banana.scale = 0.09;
  banana.velocityX = -4;
  foodGroup.add(banana);
  
  
}

}


function spawnObstacle()
{

if(World.frameCount % 200 === 0)
{
  random = (100, 170);
  obstacle = createSprite(400, 320, 20, 20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -4;
  obstacleGroup.add(obstacle);
  
  
}

}




