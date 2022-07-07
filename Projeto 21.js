var parkImg, park, parksGroup;
var rockImg, rock, rocksGroup;
var runner, runner, runnersGroup;
var obstacleImg, obstacle, obstaclesGroup;

var END=0;
var gameOver, restart; 

function preload(){
parkImg = loadImage("Park.jpg");
rockImg = loadImage("Rock.png");
obstacleImg = loadImage("obstacle.jpg");
runner = loadImage("Runner.gif");
}

function setup() {
createCanvas(600,600);
park = createSprite(300,300);
park.addImage("park",parkImg);

rocksGroup = new Group();
obstaclesGroup = new Group();

runner = createSprite(200,200,50,50);
runner.scale = 0.3;
runner.addImage("Runner", runner);
}

function draw()
background(0);

if(keyDown("space")){
    runner.velocityX = -5;
}

runner.velocityX = velocityX + 0.8

spawnRocks();
drawSprites();

if(gameState === END){
runner.destroy();
park.velocityX = 0;
}

function spawnRocks() {
  
if(frameCount % 240 === 0) {
   var rock = createSprite(200,-50);
   rock.addImage(rockImg);

   var obstacle = createSprite(200,10);
   obstacle.addImage(obstacleImg);
   
   rock.x = Math.round(random(120,400));
   rock.velocityY = 1
   
   obstacle.x = Math.round(random(120,400));
   rock.velocityY = 1

   rock.lifetime = 800;
   obstacle.lifetime = 800;

   rocksGroup.add(rock);
   obstaclesGroup.add(obstacle);
 }
}