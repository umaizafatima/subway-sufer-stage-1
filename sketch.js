var path, pathImage;
var jake, jake_running;
var invisibleBoundarary1, invisibleBoundarary2;
var score = (0);

function preload()
{
  pathImage = loadImage("path.png");
  jake_running = loadAnimation("jake1.png","jake2.png","jake4.png","jake5.png");
}

function setup()
{
  createCanvas(300,600);

  //moving background
  path = createSprite(150,600);
  path.addImage(pathImage);
  path.velocityY = 6;
  
  jake = createSprite(150,560,20,20);
  jake.addAnimation("running", jake_running);
  jake.scale = 0.5;
  jake.x = 150;

  //creating invisible boundaries
  invisibleBoundarary1 = createSprite(290,200,20,600);
  invisibleBoundarary1.visible = false;
  invisibleBoundarary2 = createSprite(200,200,20,600);
  invisibleBoundarary2.visible = false;

}

function draw() 
{

    //code to reset the background
    if(path.y > 400)
     {
        path.y = height/2;
     }

    //Moving the jake with mouse along the x-axis
    jake.x=World.mouseX;

    jake.collide(invisibleBoundarary1);
    jake.collide(invisibleBoundarary2);
   
  drawSprites();

    textSize(20)
    fill("blue");
    text("SCORE : " + score,180,40);

}


  
