var car, wall;
var speed,weight;

function setup() {
  createCanvas(1100,400);
  
  speed = random(55,100); 
  weight = random(400,1500);
  
  car = createSprite(60,200,30,30);
  wall = createSprite(1050,200,30,200);
  
  car.velocityX = speed;


}

function draw() {
  background("white");  
  Deformation();
  
car.depth = wall.depth + 1;


  drawSprites();
}

function Deformation()
{
if(wall.x - car.x < (car.width + wall.width)/2)
{
car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed / 22500;
if(deformation < 100)
{
  car.shapeColor = "green";
}
if(deformation < 180 && deformation > 100)
{
  car.shapeColor = "yellow";
}
if(deformation > 180)
{
  car.shapeColor = "red";
}
}

}








