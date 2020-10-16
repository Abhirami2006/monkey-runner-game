var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;

function preload(){
 monkey_running= loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
   
bananaImage = loadImage("banana.png");
  
obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(900,400);
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;

ground = createSprite(400,350,900,10);

ground.x = ground.width/2;
console.log(ground.x);

FoodGroup = createGroup();
obstacleGroup = createGroup();
  
}

function draw() {
background("white");

console.log(monkey.y);
ground.velocityX = -4;
  
if(ground.x<0){
ground.x = ground.width/2;  
}
  
if(keyDown("space") && monkey.y >= 314.3){
monkey.velocityY = -15;
}
monkey.velocityY = monkey.velocityY + 0.5;
monkey.collide(ground);
  spawnFood();
  spawnObstacle();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,100,15);
  
drawSprites();  
}

function spawnFood(){
if(frameCount % 80 === 0){
  var banana = createSprite(900,120,20,20);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -4;
  banana.lifetime = 900;
  FoodGroup.add(banana);
}
}

function spawnObstacle(){
if(frameCount % 300 === 0){
  var obstacle = createSprite(900,327,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -4;
  obstacle.scale = 0.1;
  obstacle.lifetime = 900;
  obstacleGroup.add(obstacle);
}
  
}


