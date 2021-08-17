
var back_img;

var basket,basketImg;
// create variable for all fruit images

function preload(){
  back_img = loadImage("jungle.jpg");
  // load basket and all fruit images

}


function setup() {
  createCanvas(900, 500);
  
  //create basket sprite and add image
 
}


function draw() {
 
  background(back_img);
  
  //move basket right and left with mouse and call spawnFruits function
  
  drawSprites();
}

function spawnFruits() {

  if(frameCount % 70 == 0) {
    
    //assign randomm xposition to fruits
    r=Math.round(random(50,850))
    // create fruit sprite and assign a positive velocity
    
    var r = Math.round(random(1,5))
    switch(r){
      case 1 : fruit.addImage(fruit1);
      break;
      //complete switch case for remaining fruits
    }    
  }
}


