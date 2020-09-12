var hr,mn,sc;
var hrAngle, mnAngle, scAngle;


function setup() {
  createCanvas(1000,500);
  angleMode(DEGREES);

  
}

function draw() {
  background(0);  

  translate(500,200)
  rotate (-90);

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(8);
  stroke("blue");
  noFill();


  scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);
  
  stroke("green");
   mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  stroke("red");
  hrAngle = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,hrAngle);


  
  //drawing seconds hand
  push();
  rotate(scAngle)
  stroke("blue");
  line(0,0,100,0);
  pop();

  //drawing minutes hand
  push();
  rotate(mnAngle);
  stroke("green");
  line(0,0,75,0);
  pop();

  //drawing hours hand
  push();
  rotate(hrAngle);
  stroke("red");
  line(0,0,50,0);
  pop();

  stroke("Black");
  point (0,0);

  
}




  
  
  
  
  
  
  
  
  /*stroke(255,102,255);
  let end3 = map(hr%12,0,12,-0,360);
  
  push();
  rotate(end);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("green");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("red");
  line(0,0,50,0);
  pop();
  
  
  


  }*/
  