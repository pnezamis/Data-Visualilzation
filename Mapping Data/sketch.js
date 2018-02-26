var offset = 50;

function setup() {
	createCanvas(1000, 1000);
}

function draw() {
	background('#fff');

	var titleColor=color('#00A480');
	var lowColor=color('#D2006B');
	var meanColor=color('#FF6200');
	var highColor=color('#95EC00');

	var y=100;
	var rectSize=5;
	rectMode(RADIUS);

	textSize(48);
	textAlign(RIGHT, CENTER);
	textStyle(BOLD);
	textFont('Georgia');
	fill(titleColor);
	text("Salaries", 240, 50);

	textSize(12);
	textAlign(LEFT);
	textStyle(NORMAL);
	textFont('Helvetica');
	fill('#000');

	text("low", 270, 48-15);
	text("mean", 270, 48);
	text("high", 270, 48+15);

	fill(lowColor);
	rect(260, 48-15, rectSize, rectSize)
	fill(meanColor);
	rect(260, 48, rectSize, rectSize)
	fill(highColor);
	rect(260, 48+15, rectSize, rectSize)

	for (var i=0; i<data.length; i++) {
		textSize(12);
		textAlign(RIGHT);
		textStyle(NORMAL);
		textFont('Helvetica');
		fill('#000');
		text(data[i].program, 240, y);

		stroke(0);
		line(250, y, width-50, y)
		noStroke();

		var low=map(data[i].salarylow, 0, 100000, 250, width-50);
		var mean=map(data[i].salarymean, 0, 100000, 250, width-50);
		var high=map(data[i].salaryhigh, 0, 100000, 250, width-50);

		fill(lowColor);
		rect(low, y, rectSize, rectSize);
		fill(meanColor);
		rect(mean, y, rectSize, rectSize);
		fill(highColor);
		rect(high, y, rectSize, rectSize);

		textAlign(LEFT);
		fill('#000')
		if(mouseX>=low-5 && mouseX<=low+5 && mouseY>=y-5 && mouseY<=y+5) {
			text("$" + data[i].salarylow, low+rectSize, y-7);
		}
		else if(mouseX>=mean-5 && mouseX<=mean+5 && mouseY>=y-5 && mouseY<=y+5) {
			text("$" + data[i].salarymean, mean+rectSize, y-7);			
		}
		else if(mouseX>=high-5 && mouseX<=high+5 && mouseY>=y-5 && mouseY<=y+5) {
			text("$" + data[i].salaryhigh, high+rectSize, y-7);			
		}

		y+=15
	}
}
