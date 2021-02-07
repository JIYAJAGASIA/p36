var dog,sadDog,happyDog,Milk;
var button1, button2;
var foodObj;

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
Milk=loadImage("Milk.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
foodObj=createSprite(200,200,10,10);
foodObj.addImage(Milk);
foodObj.scale=0.1;

feed=createButton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
  if (foodObj.getFoodStock()<=0) {
foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock(-1))

}
  }
//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    foodObj:foodS
  })
}
//function to read food Stock





