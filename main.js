import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

Minim minim;
AudioPlayer song;
BeatDetect beat;

int scale = 50;
Point [] points;
boolean first = true;
int numberOfPoints = 1;
int regulateSize = 2;
int sizeOfCircle = 200;
int fade = 10;

class Point { 
  float xpos, ypos, counterX, counterY; 
  float angle = 25;
  float speed = 0.00009; //0.00005
  float val;
  Point (float y, float x) {  //contructor everytime a new point is created this get's called
    ypos = height/2; 
    xpos = width/2; 
    noStroke();
    counterX = 0;
    counterY = 0;
    ellipse(xpos,ypos,20, 20);

  } 
  void update(float size) { 
 
    noStroke();
    counterX = sin(val);
    counterY = cos(val);
    counterX *= sizeOfCircle;
    counterY *= sizeOfCircle;
    println(val);
    ellipse(counterX +xpos, counterY + ypos, size * regulateSize, size * regulateSize);
    val += speed;
  } 
} 



void setup()
{
  size(700,700);
  background(0);
  frameRate(10);
  points = new Point[numberOfPoints];
  minim = new Minim(this);
  song = minim.loadFile("Fantasy.mp3");
  song.play();
  
  //  beat
  beat = new BeatDetect();

}

void draw()
{
  
  fill(0, 0, 0, fade);  // Use 'blueValue' in new fill
  rect(0, 0,width, height);
  
   //  CHANGE COLOR HERE
  beat.detect(song.mix);
  int randomNumber = 1;
    fill(255,255,255);
  if(beat.isOnset())
  {
    randomNumber = int(random(1, 5));
    if(randomNumber == 1){
          fill(255,0,255);
    }
    if(randomNumber == 2){
          fill(0,80,255);
    }
    if(randomNumber == 3){
          fill(255,20,255);
    }
    if(randomNumber == 4){
          fill(0,80,255);
    }
    if(randomNumber == 5){
          fill(10,0,255);
    }
  }

if(first == true){
    for(int i = 0; i<numberOfPoints; i++){
    fill(100,255,255, 2);
    points[i] = new Point(random(50, width-50), random(50, height-50));
  }
  first = false;
}

   for(int i = 0;i < song.bufferSize() - 1; i = i + 1 )//song.bufferSize() - 1
  {
  for(int j = 0; j<numberOfPoints; j++){
   points[j].update(song.left.get(i)*scale);
  }}
}