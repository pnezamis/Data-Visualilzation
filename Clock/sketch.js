var x;
var y;

function setup() {
  	createCanvas(720, 400);
  	background('#CCC');
  	x = width/2;
  	y = height/2;
}

function draw() {
  background('#CCC');
 	
 	var hoursColor=color('#87DDE0')
 	var minutesColor=color('#CFEDEE');
 	var secondsColor=color('#BCA0B3');
  
  //hours shape
  fill(hoursColor);
  var hourPoints = hour();
  var hourAngle = 0;
  var hourStep = 180.0/hourPoints;
  var hourOuter = 200;
  var hourInner = 150;
  makeTriangleShape(hourPoints, hourAngle, hourStep, hourOuter, hourInner);

  //minutes shape
  fill(minutesColor);    
  var minutePoints = minute();
  var minuteAngle = 0;
  var minuteStep = 180.0/minutePoints;
  var minuteOuter = 125;
  var minuteInner = 75;
  makeTriangleShape(minutePoints, minuteAngle, minuteStep, minuteOuter, minuteInner);

  //seconds shape
  fill(secondsColor);
  var secondPoints = second();
  var secondAngle = 0;
  var secondStep = 180.0/secondPoints;
  var secondOuter = 50;
  var secondInner = 25;
  makeTriangleShape(secondPoints, secondAngle, secondStep, secondOuter, secondInner);

  //time text
  /*
  fill('#000');
	textSize(120);
	textFont('Helvetica');
	textAlign(CENTER, CENTER);
	if(second()<10) {
		text(hour() + ':' + minute() + ':0' + second(), x, y);
	}
	else {
		text(hour() + ':' + minute() + ':' + second(), x, y);
	}
  */

 }

function makeTriangleShape(numPoints, angle, angleStep, outsideRadius, insideRadius) {
	beginShape(TRIANGLE_STRIP); 
	for (var i = 0; i <= numPoints; i++) {
    	var px = x + cos(radians(angle)) * outsideRadius;
    	var py = y + sin(radians(angle)) * outsideRadius;
    	angle += angleStep;
    	vertex(px, py);
    	px = x + cos(radians(angle)) * insideRadius;
    	py = y + sin(radians(angle)) * insideRadius;
    	vertex(px, py); 
    	angle += angleStep;
  }
  endShape();
}
