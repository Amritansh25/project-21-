var canvas;
var music;
var surface1, surface2 , surface3 , surface4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);
    surface1 = createSprite (80,580,150,20);
    surface1.shapeColor = "orange";
    surface2 = createSprite(250,580,150,20);
    surface2.shapeColor ="green";
    surface3 = createSprite (420,580,150,20);
    surface3.shapeColor ="magenta";
    surface4 = createSprite (590,580,150,20);
    surface4.shapeColor = "red";
    box = createSprite (random(20,750),100,40,40);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 5;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background("deepskyblue");
    edges = createEdgeSprites();
     box.bounceOff(edges);
 if(surface1.isTouching(box) && box.bounceOff(surface1))
     {box.shapeColor = "orange";
     music.play();   }
    

      if(surface2.isTouching(box))
      { box.shapeColor = "green"; box.velocityX = 0; box.velocityY = 0;
       music.stop();}

       if(surface3.isTouching(box) && box.bounceOff(surface3))
       { box.shapeColor = "magenta"; 
          music.play();}
      
        if(surface4.isTouching(box) && box.bounceOff(surface4))
        { box.shapeColor = "red";
         music.play();   }
        


    drawSprites();
}
