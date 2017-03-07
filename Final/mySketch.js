var time;
var backgroundcolors = [];
var x;
var y;
var waveWidth;
var amp = 60;
var period = 100;
var theta = 0;
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
var epY = 70;
//adjective: Summery
function setup() {
    time = millis();
    backgroundcolors[0] = color(242, 205, 205);
    backgroundcolors[1] = color(201, 239, 236);
    backgroundcolors[2] = color(249, 245, 212);
    createCanvas(800, 600);
    frameRate(15);
    background(backgroundcolors[0]);
    speedX = random(11);
    speedY = random(11);
}

function draw() {
    ellipseMode(CENTER);
    icecream.display();

    if (keyIsPressed) { // changes scenes when key is pressed 
        birds();
        sun();
        water();
    }
    if (keyCode == UP_ARROW || keyCode == DOWN_ARROW) {
        background(backgroundcolors[1]);
        beachBall();
        seaShells();
        palmTree();
        treeLeaves();

    }
}
var icecream = { // the ice cream brush 
    x: 5,
    y: 6,
    display: function() {
        if (mouseIsPressed) {
            noStroke();
            push();
            translate(mouseX, mouseY);
            fill(242, 247, 192); // mint flavor
            ellipse(this.x, this.y, 50, 50); //scoop
            ellipse(this.x, this.y + 62, 67, 10); // puddle
            fill(204, 166, 95); // cone 
            triangle(this.x - 26, this.y + 5, this.x, this.y + 60, this.x + 26, this.y + 5);
            fill(242, 247, 192)
            ellipse(this.x - 15, this.y + 50, 3, 10); // small drop
            ellipse(this.x - 15, this.y + 12, 5, 10); // big drop
            ellipse(this.x, this.y + 5, 65, 10);
            pop();
        }
    },
}

function birds() {
    background(backgroundcolors[2]);
    frameRate(1);
    bird = new Bird(80, 0, 0, 20, 50, 80, 5, 4, random(-100, 500));
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
    // function within the class that puts the bird on the screen
    this.display = function() {
        for (var i = 0; i < 60; i += 7) {
            noFill();
            stroke(0);
            strokeWeight(4);
            bezier(this.a + randy, this.b + randy, this.c + randy, (this.d + i) + randy, (this.e + i) + randy, this.f + randy, this.g + randy, this.h + randy);
        }
    }
}

function sun() {
    fill(249, 134, 52);
    noStroke();
    ellipse(750, 100 + random(200), 180, 180);
    if (millis() > 6000) {
        fill(160, 67, 1);
        arc(150, 395, 250, 150, radians(1), radians(180));
        stroke(0);
        strokeWeight(5);
        line(150, 395, 150, 260);
        strokeWeight(2);
        fill(6, 153, 99)
        triangle(150, 260, 190, 270, 150, 300);
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
    y = new Array(waveWidth);
    theta = theta + 5; // waves go left after incrementing by 4
    for (var i = 0; i < y.length; i++) {
        y[i] = sin(theta) * amp;
        theta += x; // 2nd way to increment 
    }
}

function wave() {
    frameRate(2) // makes the waves go slower and in snapshots 
    stroke(0, random(120), random(190, 200)); // had to mix with green or else blue too dark
    strokeWeight(125);
    for (var x = 0; x < y.length; x++) {
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