var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
addMusic=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(735,580,200,30);
    block3.shapeColor = "red";
    
    block4 = createSprite(515,580,200,30);
    block4.shapeColor = "yellow";
    
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY

    ball.velocityX=-4
    ball.velocityY=-4
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);

    
    //write code to bounce off ball from the block1 
    if(ball.isTouching(block1) &&   ball.bounceOff(block1) ){
        ball.shapeColor = "blue";
        addMusic.play();
      
    }



    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
       

        //write code to set velocityX and velocityY of ball as 0
    ball.velocityX=0;
    ball.velocityY=0;
        //write code to stop music
        addMusic.stop();
    }

    //write code to bounce off ball from the block3

    if(ball.isTouching(block3) && ball.bounceOff(block3) ){
        ball.shapeColor = "red";
        addMusic.play();
        
    }
    //write code to bounce off ball from the block4

    if(ball.isTouching (block4) &&  ball.bounceOff(block4) ){
        ball.shapeColor = "yellow";
        addMusic.play();
  
    }
    drawSprites();
}
