var bg, bgImg;
var player, playerImg;
var edges;
var voldemort, voldemortImg, voldemortGroup;
var magicSpell, magicSpellImg, magicSpellGroup;
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;
var gameState = "fight";
var blackHeart1, blackHeart2, blackheart3;
var blackHeart1Img, blackHeart2Img, blackheart3Img;



function preload(){
  bgImg = loadImage("Background.jpg");
  playerImg = loadImage("Players.png");
  voldemortImg = loadImage("Voldemort.png");
  magicSpellImg = loadImage("Magic Spell.png");
  heart1Img= loadImage("heart_1.png");
  heart2Img= loadImage("heart_2.png");
  heart3Img= loadImage("heart_3.png");
  blackHeart1Img = loadImage("one_heart black.png");
  blackHeart2Img = loadImage("2_hearts black.png");
  blackHeart3Img = loadImage("3 black hearts.png");
  

}

function setup() {
createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2-20,windowHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 2;

  player = createSprite(windowWidth-2500, windowHeight-300,50,50);
  player.addImage(playerImg);
  player.scale = 1.3;


  heart1 = createSprite(windowWidth-150,40,20,20);
  heart1.visible = false;
  heart1.addImage(heart1Img);
  heart1.scale = 0.4

  heart2 = createSprite(windowWidth-100,40,20,20);
  heart2.visible = false;
  heart2.addImage(heart2Img);
  heart2.scale = 0.4

  heart3 = createSprite(windowWidth-150,40,20,20);
  heart3.addImage(heart3Img);
  heart3.scale = 0.4

  blackHeart1 = createSprite(windowWidth-150,250,20,20);
  blackHeart1.visible = false;
  blackHeart1.addImage(blackHeart1Img);
  

  blackHeart2 = createSprite(windowWidth-100,250,20,20);
  blackHeart2.visible = false;
  blackHeart2.addImage(blackHeart2Img);
 

  blackHeart3 = createSprite(windowWidth-150,250,20,20);
  blackHeart3.addImage(blackHeart3Img);



  voldemortGroup = new Group();
  magicSpellGroup = new Group();


  edges = createEdgeSprites();

}

function draw() {
  background(0); 
if(gameState=="fight"){


if(keyDown(UP_ARROW)){
  player.y = player.y-30;
}
if(keyDown(DOWN_ARROW)){
  player.y = player.y+30;
}
if(keyDown(RIGHT_ARROW)){
  player.x = player.x+30;
}
if(keyDown(LEFT_ARROW)){
  player.x = player.x-30;
}

if(keyWentDown("space")){
  magicSpell = createSprite(player.position.x+300, player.position.y-120,50,50);
  magicSpell.addImage(magicSpellImg);
  magicSpell.velocityX = 3;
  magicSpell.setCollider("circle",0,0,50);
  magicSpellGroup.add(magicSpell);
  player.depth = magicSpell.depth;
  player.depth = magicSpell.depth+1;
  
}
if(voldemortGroup.isTouching(magicSpellGroup)){
  voldemortGroup.destroyEach();
  magicSpellGroup.destroyEach();
}
}
player.collide(edges);
if(voldemortGroup.isTouching(player)){
  voldemortGroup.destroyEach();
  player.destroy();
}
enemy();
drawSprites();
if(gameState=="lost"){
  textSize(100);
  fill("red");
  text("you lost",200,400);
  player.destroy();
  voldemortGroup.destroyEach();
}
else if(gameState=="won"){
textSize(100);
fill("red");
text("You Won!!!", 200,400);
player.destroy();
voldemortGroup.destroyEach();
}
}

function enemy(){
  if(frameCount%300===0){
    voldemort= createSprite(random(2000,2500), random(800,1300), 40,40);
    voldemort.addImage(voldemortImg);
    voldemort.setCollider("rectangle",0,0,200,200);
    voldemort.velocityX = -4;
    voldemort.lifetime = 400;
    voldemortGroup.add(voldemort);
  }
}

