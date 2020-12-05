var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
  dogImage =loadImage("doglmg.png")
  dogHappyImage =loadImage("doglmg1.png")
  
}

function setup() {
  createCanvas(500,500);
  
  dog=createSprite(200,200,10,10)
  dog.addImage(dogImage)
  
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
background(46,139,87)

if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappyImage)
}
  drawSprites();

  textSize(17);
  fill("black");
  text("press UP_ARROW to feed me",100,150);

  

}


function readStock(data)
{
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}
