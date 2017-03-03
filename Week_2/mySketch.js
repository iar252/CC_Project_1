// ikra 

var wavesBlue = [];
var bird;
var bird2;
var bird3;
//adjective: Summery
function setup() {
    createCanvas(800, 600);
    frameRate(15);
    background(242, 205, 205);
}

function draw() {
    ellipseMode(CENTER);
    icecream.display();
    
    if (keyIsPressed) { // changes scenes when key is pressed 
        birds();
        sun();
        water();
    }
}

var icecream = { // the ice cream brush 
    x: 5,
    y: 6,
    display: function() {
        if (mouseIsPressed) {
            noStroke();
            translate(mouseX, mouseY);
            fill(242, 247, 192); // mint flavor
            ellipse(this.x, this.y, 50, 50);//scoop
            ellipse(this.x, this.y + 62, 67, 10); // puddle
            fill(204, 166, 95); // cone 
            triangle(this.x - 26, this.y + 5, this.x, this.y + 60, this.x + 26, this.y + 5);
            fill(242, 247, 192)
          ellipse(this.x - 15, this.y + 50, 3, 10); // small drop
          ellipse(this.x - 15, this.y + 12, 5, 10); // big drop
            ellipse(this.x, this.y + 5, 65, 10);
        }
    },

}

function birds() {
    background(249, 245, 212);
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
    ellipse(750, 150, 180, 180);
}

function water() {
    frameRate(2);
    for (var m = 0; m < 20; m++) {
        wavesBlue[m] = int(random(150, 255));
    }
    stroke(255);
    strokeWeight(3);

    for (var y = 0; y < 20; y++) {
        for (var i = 0; i < 300; i += 30) {
            for (var x = 0; x < 450; x += 40) {
                fill(0, 0, wavesBlue[y]);
                ellipse(20 + (3 * x / 2), 470 + (3 * i / 4), 50 + x, 40 + (3 * i / 4));
            }
        }
    }
}