var testBullet,wall;
var weight,speed,thickness;
var damage,answer;
var edges;

function setup() {
    createCanvas(1325,600);
    weight = Math.round(random(30,52));
    speed = random(223,321);
    thickness=(random(22,28));
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    testBullet=createSprite(125,300,60,20);
    wall=createSprite(1200,300,thickness,300);
    answer="Unknown(bullet did not collide). Please retry";

}
function draw() {
    background(52.9,80.8,92.2);  
    edges=createEdgeSprites();
    drawSprites();
    
    wall.shapeColor = "firebrick";
    testBullet.velocityX = speed;

    testBullet.collide(wall);
    testBullet.collide(edges);
    testBullet.shapeColor = rgb(175, 155, 96);

    fireIt();
    shootWutHappened();

    textSize(15);
    fill("white");
    text("Weight: "+ weight + "g",30,575);
    text("Speed: "+ speed +" Km/hrs",120,575);
    text("Wall thickness: "+ thickness+" inches",370,575);
    text("Damage: "+ damage,675,575);
    text("Durrability: "+answer,900,575);
}

function fireIt() {
    testBullet.velocityX=speed;
    testBullet.velocityY=weight;
}

function shootWutHappened() {
    if(testBullet.x===wall.x){
        testBullet.velocityX=0;
        testBullet.velocityY=0;
    }
    if(testBullet.isTouching(wall)){
        if(damage>10){
            wall.shapeColor="crimson";
            answer="GOOD";
        } else {
            wall.shapeColor="springgreen";
            answer="BAD";
        }
    }
}