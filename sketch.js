let backgroundColour
let whackImageHalf
let whackImageWhole
let moveRect = 0;
let size = 18.0;
let val = 0;
let valTwo = 0;
let counter = 0;
let countRainbowColors = 0;
let countLerp = 0;
let countLines = 0;
let miniCount = 0;
let rainbow = [[250, 22, 22], [252, 151, 10], [252, 216, 10], [15, 186, 29],
[11, 71, 161],
[101, 11, 161]];
/* Setup function once called at the start */
function setup() {
  whackImageHalf = createImg('whackathon-logo-half.svg')
  whackImageWhole = createImg('whackathon-logo-full.svg')
  whackImageHalf.hide()
  whackImageWhole.hide()
  backgroundColour = color('#230620')
  backgroundColour.setAlpha(100)
  background(backgroundColour)
  createCanvas(windowWidth, windowHeight)
}

/* Called every x seconds */
function draw() {
  let offsetX = whackImageHalf.width / 4
  let offsetY = whackImageHalf.height / 2
  // background(backgroundColour)
  moveRect += 2.0;
  noStroke();
  if (counter % 300 === 1) {
    // console.log(rainbow[countRainbowColors])

    countRainbowColors++;
    if (countRainbowColors == 5) {
      countRainbowColors = 0;
    }
    countLerp = 0;
  }

  if (rainbow[countRainbowColors - 1] !== undefined) {
    // console.log(countRainbowColors)
    fill(lerpColor(color(rainbow[countRainbowColors - 1]), color(rainbow[countRainbowColors]), countLerp / 100));
    // if (countRainbowColors === 1) {
    //   fill(lerpColor(color(rainbow[5]),color(rainbow[countRainbowColors]), countLerp / 100));
    // }
    if (countRainbowColors === 5) {
      fill(0, 0, 0);
      // fill(lerpColor(color(rainbow[4]),color(rainbow[5]), countLerp / 100));

    }
  } else if (countRainbowColors === 0) {
    // console.log("0000000")
    // console.log(countLerp)
    if (countLerp <= 150) {
      fill(lerpColor(color(rainbow[4]), color(rainbow[5]), countLerp / 100));
    } else {
      // fill(rainbow[0]);
      // console.log("count lerp" + countLerp)//1.5 - 3
      // console.log("minicount" + miniCount)//1.5 - 3
      fill(lerpColor(color(rainbow[5]), color(rainbow[0]), miniCount / 100));//(300 - countLerp) / 100)
      miniCount++;
    }
    // fill(0,0,0);
  } else {
    // console.log("MORE ELSE");
  }
  // backgroundColour.setAlpha(1)
  if (counter < 2000) {
    val -= 1500;//smaller than sum funny paterns
    drawPoint(0);
    val += 300;
    drawPoint(20);
    val += 300;
    drawPoint(40);
    val += 300;
    drawPoint(60);
    val += 300;
    drawPoint(80);
    val += 300;
    drawPoint(100);
    // val += 100;
    // drawPoint(110);
    // val += 100;
    // drawPoint(120);
    // val += 100;
    // drawPoint(140);
    // val += 100;
    // drawPoint(160);
    // val += 100;
    // drawPoint(180);
    // val += 100;
    // drawPoint(200);

  }
  counter++;
  countLerp++;
  // points[j].upd ate(song.left.get(i)*scale);

}

/* Eventhandler function provided by p5 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background(backgroundColour)
}

function drawPoint(move) {
  let xpos, ypos, counterX, counterY;
  let speed = 0.0009; //0.00005  0.002


  ypos = window.height / 2;
  xpos = window.width / 2;
  noStroke();
  counterX = 0;
  counterY = 0;
  //rect(xpos, ypos, 20, 20);

  // counterX = sin(val) / cos(val) * PI;
  // counterY = cos(val) / (sin(val) * 5) * (PI / 15);
  counterX = sin(val) / cos(val) * PI;
  counterY = (cos(val) * cos(val) * (PI * 1.8))-2;
  // counterX = sin(val) * cos(val);
  // counterY = cos(val) / (sin(val) * 20.0);
  counterX *= 100 + move;
  counterY *= 100 + move;
  // xpos = mouseX + move;
  // ypos = mouseY + move;
  // console.log(counterX + xpos)
  ellipse(counterX + xpos, counterY + ypos, size + 30, size + 30);
  val += speed;
  if(val % 20 === 1){
    val *= PI;
  }

  // console.log(mouseX);
  // xpos = ;
  // console.log("enter?")

}

// void update(float size) { 

//   noStroke();
//   counterX = sin(val);
//   counterY = cos(val);
//   counterX *= sizeOfCircle;
//   counterY *= sizeOfCircle;
//   ellipse(counterX +xpos, counterY + ypos, size * regulateSize, size * regulateSize);
//   val += speed;
// } 


// val -= 25;//smaller than sum funny paterns
  // drawPoint(0);
  // val += 5;
  // drawPoint(20);
  // val += 5;
  // drawPoint(40);
  // val += 5;
  // drawPoint(60);
  // val += 5;
  // drawPoint(80);
  // val += 5;
  // drawPoint(100);