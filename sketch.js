var  wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, 50, thickness, height/2);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet.velocityX = speed;

}

function draw() {
  background(0,0,0);  

  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
if(damage>10){
  wall.shapeColor=color(255,75,75);

} 


if(damage<10){
  wall.shapeColor=color(100,255,100);
}

console.log(damage);

}
  
  
  
  drawSprites();
}
function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x+bullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}