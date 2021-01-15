const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg,boy,ground,hitImg,boyImgR;
var bg,billiardball,chocolate,paperwaste,partyhat,rock,soda,water,watering;
var seesaw,bench,tree;

var wasteArray = []

var obstacle1,obstacle2,obstacle3;
var score=0;

function preload()
{
	boyImg = loadAnimation("boyImg.png","boyImg2.png","boyImg3.png","boyImg4.png","boyImg5.png","boyImg6.png")
	boyImgR = loadAnimation("boyImgR.png","boyImg2R.png","boyImg3R.png","boyImg4R.png","boyImg5R.png","boyImg6R.png")
	bg = loadImage("bg.png")
	billiardball = loadImage("billiardball.png")
	chocolate = loadImage("chocolate.png")
	paperwaste = loadImage("paperwaste.png")
	partyhat = loadImage("partyhat.png")
	rock = loadImage("rock.png")
	soda = loadImage("soda.png")
	water = loadImage("water.png")
	watering = loadImage("watering.png")
	bench = loadImage("chair.png")
	tree = loadImage("d.png")
	seesaw = loadImage("seesaw2.png")

}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plr = new Boy(100,900,50,120)
	ground = new Ground(windowWidth/2,windowHeight-50,windowWidth,20)

	for(var i=0;i<=20;i++){
		wasteArray.push(new Waste(round(random(50,windowWidth-50)),round(random(400,windowHeight-100)),30,30))
	}

	obstacle1 = new Obstacle(200,350,100,100,tree,1.5)
	obstacle2 = new Obstacle(windowWidth/2,windowHeight/2,100,100,bench,1.2)
	obstacle3 = new Obstacle(1800,700,100,100,seesaw,1.2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);					


  for(var i=0;i<wasteArray.length;i++){
	  if(wasteArray[i]!=undefined){
	wasteArray[i].display();
	  if(wasteArray[i].waste.isTouching(plr.boy)){
		wasteArray[i].waste.destroy();
		score+=1
		wasteArray[i]=null;
	  }
	  }
  }

 if(score===21){
	 background(0)
	 fill("white")
	 textSize(100)
	 text("You Win !!",windowWidth/2,windowHeight/2)
	 obstacle1.destroy();
	 obstacle2.destroy();
	 obstacle3.destroy();
	 plr.destroy();
 }

  fill("black")
  strokeWeight(30)
  textSize(50)
  text("Score: "+score,1600,100)

  obstacle1.display()
  obstacle2.display()
  obstacle3.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 38){
	plr.boy.y-=30
	}

	if(keyCode === 37){
	plr.boy.x-=30
	plr.boy.changeAnimation("boyR",boyImgR)
	}

	if(keyCode === 39){
	plr.boy.x+=30
	plr.boy.changeAnimation("boy",boyImg)
	}

	if(keyCode === 40){
	plr.boy.y+=30
	}
}