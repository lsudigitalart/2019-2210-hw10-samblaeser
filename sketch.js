var particles = [];
var stars = [];
function preload() {

  
  myFont = loadFont('fonts/bahnschrift.ttf');
}


function setup() {
  createCanvas(800, 600,WEBGL);
  
 

  for (var i = 0; i < 7500; i++) {
    particles.push(new Particle);
  }


  for (var i = 0; i < 7500; i++) {
    stars.push(new Star);
  }

}

function draw() {
push();
colorMode(RGB);
  background(67,30,60);
 var from = color(48,25,52);
 var to = color(27,17,42);
var interA = lerpColor(from, to, .78);
var interB = lerpColor(to,from,.65);
fill(interA);
ellipse(0,20,4185,3000);
fill(interB);
ellipse(0,10,850,500);
pop();



 if (frameCount % 40) {
   particles.push(new Particle);
 }
 
 for (var i = 0; i < particles.length; i++) {
    particles[i].update();
  } 
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
 }
  
 if (frameCount % 10) {
  stars.push(new Star);
}

for (var i = 0; i < stars.length; i++) {
   stars[i].update();
 } 
 for (var i = 0; i < stars.length; i++) {
   stars[i].display();
}
}


function Particle() {
  this.xPos = random(-(width*2),(width*2));
  this.yPos = random(-(height*2),(height*2));
  this.zPos = random()
  this.colorR = random(200,255);
  this.colorG = random(200,255);
  this.colorB = random(200,255);
  this.cSize = random(2,5);
  this.alpha = random(100,60);

 this.update = function () {
  this.xPos++
    
  }
  this.display = function () {
    
    fill(this.colorR,this.colorG,this.colorB,this.alpha); 
    circle(this.xPos, this.yPos, this.cSize);
  }

  
}

function Star() {
  this.xPosS = random(-(width*2),(width*2));
  this.yPosS = random(-(height*2),(height*2));
  this.zPosS = random()
  this.colorRS = random(0,255);
  this.colorGS = random(0,255);
  this.colorBS = random(0,255);
  this.cSizeS = random(1,2.5);
  this.alphaS = random(80,40);

 this.update = function () {
  this.xPosS+=.5
  this.yPosS+=.5  
  }
  this.display = function () {
    
    fill(this.colorRS,this.colorGS,this.colorBS,this.alphaS); 
    circle(this.xPosS - 2, this.yPosS - 2, this.cSizeS);
  }
  noStroke();
  orbitControl();
    push();
    camera(0, 0, this.zPos, 0, 0, 0, 0, 1, 0);
    rotateZ(frameCount * 0.002); 
    stroke(0);
   strokeWeight(.25);
   fill(50,0,0,70);
   sphere(10, 10,10);
   pop(); 
   var word = "My God, it's full of Stars!"
   push();
   frameRate(10);
   textSize(30);
   textStyle(BOLD);
   textFont(myFont);
   fill(150,100,200,70);
   text(word,0,280);
   pop();
}
