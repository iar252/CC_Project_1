// the global variables
var time;
var backgroundcolors = []; //array of colors for different backgrounds for different scenes
var x, y;
var waveWidth;//width of the wave
var amp = 60; // the height of the wave
var period = 100;// the number of pixels before the wave begins to repeat 
var theta = 0; // the angle that is starts at 
var bird;
var bird2;
var bird3;
var sizeX = 110;
var sizeY = 110;
var centerX = 200;
var centerY = 200;
var speedX;
var speedY;
var epX = 60;
var epY = 550;
var Y_AXIS = 1;

//adjective: Summery
function setup() {
  	background(255);
  	time = millis(); // time will count in milliseconds
    backgroundcolors[0] = color(237, 170, 2); // 0 and 1 for sunset 
    backgroundcolors[1] = color(196, 5, 37);
    backgroundcolors[2] = color(189, 243, 249); // 2 and 3 for beach
 	backgroundcolors[3] = color(239, 248, 249);
  	backgroundcolors[4] = color(207, 238, 247); // 4 and 5 for early breakfast
  	backgroundcolors[5] = color(252, 204, 238);
    createCanvas(1000, 600);
    frameRate(15);
    speedX = random(11); //assigns the two speeds values from 0 to 11
    speedY = random(11);
  
}
function draw() {
 if (keyCode == ENTER){
   background(186, 158, 50);
   cover();}
  
  if(keyCode==RIGHT_ARROW || keyCode==LEFT_ARROW){
    background(186, 158, 50);
    nextPage();
  }
  if (key=='i'){ //condition to see ice cream picture
    sky(0, 0, width, height, backgroundcolors[4], backgroundcolors[5], 1); // sets the background for the icecream theme
   	 breakfast(); //calls breakfast function
   	 noStroke();
   	 rectMode(CENTER);
     fill(255);
     rect(515,40,600,60);
     fill(119, 59, 214);
     textSize(30);
     textFont("Helvetica");
     text("June 23, Ice Cream With Breakfast",275, 50);
    
  }
  if(mouseIsPressed){
     icecream.display();}
  /*ive tried moving this function around, with different conditions as well
  but i can't get it to appear only when the breakfast theme is there. ive put it under the condition for the 
  breakfast to appear with the mouseIsPressed condition nested in it, but it refuses to work. so now
  that the ice cream stamp is outside of the any other condition, it appears on all the pictures*/
  
  if (key=='s') { // changes scenes when key is pressed 
    	frameRate(1);
      	sky(0, 0, width, height, backgroundcolors[0], backgroundcolors[1], 1);
        birds();
     	boat();
        settingSun();
        water();
   	 	rectMode(CENTER);
    	fill(255); // color for the paper
    	rect(495,40,600,60);
    	fill(112, 2, 11); // color for the text
    	textSize(30);
    	textFont("Helvetica");
    	text("June 23, Sunset after Dinner",275, 50);
    }
    if (key=='b') {
        sky(0, 0, width, height, backgroundcolors[2], backgroundcolors[3], 1);
      	seaShells(); 
      	beachBall();
       	fill(255);
    	rect(595,38,600,60);
    	fill(112, 2, 11);
    	textSize(30);
    	textFont("Helvetica");
    	text("June 23, Playing at the Beach",385, 50);           
        palmTree();
        treeLeaves();     
    }
}

function cover(){
    rectMode(CENTER);
  fill(210, 226, 127);
  rect(width/2,height/2,1000,600);
  for (var x = 0; x < 250; x+=10){
    stroke(96-(3*x/10), 3+x, 102+(2*x/4));
    strokeWeight(10);
    line(4,85+2*x,995,85+2*x)
  }
  fill(255);
  rect(494,151,300,100);
  stroke(0);
  strokeWeight(2);
  fill(219, 59, 214);
     textSize(30);
     textFont("Helvetica");
     text("Summer 2015",390, 150);
  fill(0);
  textSize(15);
 	noStroke();
  text("Click the right arrow to go to the next page!",350,45);
  
}

function nextPage(){
  	fill(210, 226, 127); //album background
  	rect(width/2,height/2,1000,600); 
   	fill(237, 236, 232); 
  	rect(250,210,180,250); //left polaroid
    rect(760,210,180,250); //right polaroid
    rect(500,400,180,250);//middle polaroid
    fill(0);
    rect(249,150,150,100); //underdeveloped left polaroid
    rect(760,150,150,100); //underdeveloped right polaroid
    rect(500,340,150,100); //underdeveloped middle polaroid
    fill(0);
    textSize(30);
    textFont("Cursive");
    text("June",465, 160);
    textSize(15);
    strokeWeight(1);
    textFont("Helvetica");
    text("Follow instructions under each undeveloped picture! Only let go of the key to pause",240,45);
  
  	text("Press 'i' for ice cream", 180,250); //instructions to nagivate through the scrapbook
  	text("and click around!",190, 270);
  	text("Press 's' for the sunset!",687,250);
  	text("Press 'b' for the beach!",423,450);
  pictureHolder(0,0); //left
  pictureHolder(510,0);//right
  pictureHolder(249,190);//middle
  
    noStroke();
  }
function pictureHolder(x,y){
  fill(0);
 triangle(155+x,110+y,155+x,74+y,181+x,75+y);
 triangle(156+x,315+y,156+x,348+y,182+x,345+y);
 triangle(323+x,79+y,346+x,78+y,345+x,108+y);
  triangle(322+x,344+y,344+x,313+y,342+x,346+y);
}
function breakfast(){
    fill(221, 226, 161);
    ellipse(width/2,height/2+150,400,300); //plate 
    stroke(112, 1, 6); 
    strokeWeight(2);
    ellipse(width/2, height/2+150,300,200); // simple design for the plate
      for (var x = 0; x<100;x+=20){ //pancakes stacked on top of eachother 
        	stroke(0);
        	strokeWeight(1);
        	fill(247, 220, 138);
        	ellipse(461,410-(2*x/3),170,120);
        	fill(59, 95, 145);//blueberries
      		ellipse(470+(4*x/5),495,20,20);
        	fill(252, 216, 12); //oranges
        	stroke(252, 176, 12)
        	strokeWeight(8);
      		arc(410+2*x, 497, 80, 80, radians(30), radians(180), OPEN)
      }
   		strokeWeight(1);
    	stroke(0);
    	strokeWeight(1);
    	fill(247, 226, 108); //butter on pancakes
    	rect(459,337,25,25);
    }
var icecream = { // the ice cream brush 
    x: 5,
    y: 6,
    display: function() {
            noStroke();
           push(); // tells where to move over to draw, like keeping pencil in place, but moving paper
            translate(mouseX, mouseY); // will depend on where the mouse is 
            fill(242, 247, 192); // mint flavor color
            ellipse(this.x, this.y, 50, 50); //scoop
            ellipse(this.x, this.y + 62, 67, 10); // puddle
            fill(204, 166, 95); // cone 
            triangle(this.x - 26, this.y + 5, this.x, this.y + 60, this.x + 26, this.y + 5); // this. only used when in object
            fill(242, 247, 192)
            ellipse(this.x - 15, this.y + 50, 3, 10); // small drop
            ellipse(this.x - 15, this.y + 12, 5, 10); // big drop
            ellipse(this.x, this.y + 5, 65, 10);
           pop(); // restoring the paper in its original place
        },
    }
function birds() {
    bird = new Bird(80, 0, 0, 20, 50, 80, 5, 4, random(-100, 500)); // new for when you create a new object of the class
    bird2 = new Bird(180, 100, 100, 120, 150, 180, 105, 104, random(-100, 500));
    bird3 = new Bird(290, 210, 210, 230, 260, 290, 215, 214, random(-100, 500));
    bird.display(); // displays first bird
    bird2.display(); // second bird
    bird3.display(); // third bird
}
// the class; defines the bird
function Bird(tempa, tempb, tempc, tempd, tempe, tempf, tempg, temph, randy) {
    // all the inital values for the bezier 
    this.a = tempa;
    this.b = tempb;
    this.c = tempc;
    this.d = tempd;
    this.e = tempe;
    this.f = tempf;
    this.g = tempg;
    this.h = temph;
    this.random = randy;
    // function within the class that puts the bird on the screen, can be accessed
    this.display = function() {
        for (var i = 0; i < 60; i += 7) {
            noFill();
            stroke(0);
            strokeWeight(4);
            bezier(this.a + randy, this.b + randy, this.c + randy, (this.d + i) + randy, (this.e + i) + randy, this.f + randy, this.g + randy, this.h + randy);
        }
    }
}
function sky(x, y, w, h, c1, c2, axis) {
  if (axis == Y_AXIS) {  // Top to bottom colors 
    // makes i = y, increment by 1 as long as i is less than y plus width
    for (var i = y; i <= y+h; i++) {
      	var inter = map(i, y, y+h, 0, 1);
      /*(converting i, i's lower bound, i's upper bound, 
      i's new lower bound, i's new upper bound) and this value is then
      stored into the variable inter */
      	var c = lerpColor(c1, c2, inter);
      /* lerpcolor is what blends the two colors to find a third color 
      thats between the two values given in the first two inputs */
      	stroke(c); 
      	line(x, i, x+w, i); // draws every line and the strokes get every color 
    }
  }  
}
function settingSun() {
    fill(244, 238, 66);
    noStroke();
  	var rand = random(-15,15);
  	triangle(670,200,596+rand,127+rand+rand,699,173);
  	triangle(700,172,670+rand,75+rand,735,155);
  	triangle(736,155,748+rand,55+rand,773,154);
  	triangle(776,156,833+rand,72+rand,812,176);
  	triangle(814,180,911+rand,144+rand,834,215);
  	triangle(834,214,921+rand,228+rand,838,257);
  	triangle(835,259,905+rand,338+rand,817,295);
  	triangle(821,293,854+rand,378+rand,791,319);
  	triangle(789,321,799+rand,401+rand,754,328);
  	triangle(673,201,564+rand,199+rand,667,242);
  	triangle(661,242,586+rand,295+rand,671,283);
  	triangle(673,285,650+rand,370+rand,706,317);
  	triangle(709,318,716+rand,395+rand,752,328);
  	fill(249, 249, 9);
    ellipse(750, 240, 180, 180)}
function boat(){
  var randomx = random(100);
    if (millis() > 6000) {
        fill(81, 37, 1);
        arc(150+randomx, 395, 250, 150, radians(1), radians(180));
        stroke(0);
        strokeWeight(5);
        line(150+randomx, 395, 150+randomx, 260);
        strokeWeight(2);
        fill(6, 153, 99)
        triangle(150+randomx, 260+randomx, 190+randomx, 270+randomx, 150+randomx, 300+randomx);
    }
    noStroke();
}
function water() {
    //REFERENCE FOR THE WAVE:   https://p5js.org/examples/math-sine-wave.html
    theMath();
    wave();
}
function theMath() {
    waveWidth = width;
    x = (PI / period);
    y = new Array(waveWidth); // creates a new array on the heap and 
  //it takes in the parameter of the size of the width
    theta = theta + 5; // waves go left after incrementing by 4
    for (var i = 0; i < y.length; i++) { // increments through the array, 
      //uses the length of the array to know when to stop
        y[i] = sin(theta) * amp; // takes the specific index from the y array to 
      //get the value of sine of theta and multiply that with the amplitude
        theta += x; // 2nd way to increment, theta is incremented by the PI/period, 
      //without this, the waves would vertically just move up and down
    }
}
function wave() {
    frameRate(2) // makes the waves go slower and in snapshots 
    stroke(0, random(120), random(190, 200)); // had to mix with green or else blue too dark
    strokeWeight(125);
    for (var x = 0; x < y.length; x++) {// increments through the array, 
      //uses the length of the array to know when to stop
        ellipse(x, height + y[x], 150, 70); // the ovals drawn 
    }
    noStroke();
}
function beachBall() {
    centerX += 20 * speedX;
    centerY += 20 * speedY;
    if ((centerX > width) || (centerX < 0)) {
        speedX = speedX * -1
    }
    if ((centerY > height) || (centerY < 0)) {
        speedY = speedY * -1
    }
    beginShape();
    stroke(0);
    strokeWeight(1);
    fill(255);
    arc(centerX + speedX, centerY + speedY, sizeX, sizeY, radians(0), radians(59));
    fill(247, 235, 2);
    arc(centerX + speedX, centerY + speedY, sizeX, sizeY, radians(-60), radians(1));
    fill(247, 173, 1);
    arc(centerX + speedX, centerY + speedY, sizeX, sizeY, radians(-120), radians(-50));
    fill(1, 119, 247);
    arc(centerX + speedX, centerY + speedY, sizeX, sizeY, radians(-180), radians(-110));
    fill(8, 201, 48);
    arc(centerX + speedX, centerY + speedY, sizeX, sizeY, radians(-240), radians(-170));
    fill(224, 42, 42);
    arc(centerX + speedX, centerY + speedY, sizeX, sizeY, radians(-300), radians(-230));
    noStroke();
    ellipseMode(CENTER);
    fill(255);
    ellipse(centerX + speedX, centerY + speedY, 20, 20);
    endShape();
}
function seaShells() {
    stroke(234, 186, 112);
    strokeWeight(2);
    for (var x = 0; x < width; x += 110) {
        for (var i = 0; i < 70; i += 5) {
            fill(237, 227, 211);
            ellipse(epX + x, epY + i, 105 - i, 130 - i);
        }
    }
}
function palmTree() {
    stroke(0);
    strokeWeight(1);
    fill(165, 96, 6);
    for (var x = 0; x < height; x += 25) {
        rect(130 - (5 * x / 100), 110 + x, 25 + (x / 10), 28)
    }
}
function treeLeaves() {
    fill(0, 255, 0);
    for (var a = 0; a < 100; a++) {
        push();
        translate(280, 200);
        rotate(3.2)
        arc(50 + 2 * a / 3, 50 + 2 * a / 3, 180, 20, 0, PI, CHORD);
    }
  pop();
}