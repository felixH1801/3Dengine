cs = -50;

px1 = -100;
py1 = -100;
pz1 = -100;

px2 = -100;
py2 = 100;
pz2 = -100;

px3 = 100;
py3 = 100;
pz3 = -100;

px4 = 100;
py4 = -100;
pz4 = -100;

px5 = -100;
py5 = -100;
pz5 = -120;

px6 = -100;
py6 = 100;
pz6 = -120;

px7 = 100;
py7 = 100;
pz7 = -120;

px8 = 100;
py8 = -100;
pz8 = -120;

xflyt = 200;
yflyt = 200;

speed = 0;

function setup() 
{
  createCanvas(400, 400);
  
  //flytter canvas/2
  xflyt = height/2;
  yflyt = width/2;
  
  //laver slider
  sliderx = createSlider(-100, 100, 0, 5);
  sliderx.position(10, 10);
  
  slidery = createSlider(-100, 100, 0, 5);
  slidery.position(10, 30);
  
  sliderz = createSlider(-100, 1, -30, 0.1);
  sliderz.position(10, 50);
}

function draw() 
{
  background(220);

  //x og y
  xs1 = ((px1 * cs) / pz1) + xflyt;
  ys1 = ((py1 * cs) / pz1) + yflyt;
  circle(xs1,ys1,5);
  text("1",xs1,ys1);

  xs2 = ((px2 * cs) / pz2) + xflyt;
  ys2 = ((py2 * cs) / pz2) + yflyt;
  circle(xs2,ys2,5);
  text("2",xs2,ys2);

  xs3 = ((px3 * cs) / pz3) + xflyt;
  ys3 = ((py3 * cs) / pz3) + yflyt;
  circle(xs3,ys3,5);
  text("3",xs3,ys3);

  xs4 = ((px4 * cs) / pz4) + xflyt;
  ys4 = ((py4 * cs) / pz4) + yflyt;
  circle(xs4,ys4,5);
  text("4",xs4,ys4);

  xs5 = ((px5 * cs) / pz5) + xflyt;
  ys5 = ((py5 * cs) / pz5) + yflyt;
  circle(xs5,ys5,5);
  text("5",xs5,ys5);

  xs6 = ((px6 * cs) / pz6) + xflyt;
  ys6 = ((py6 * cs) / pz6) + yflyt;
  circle(xs6,ys6,5);
  text("6",xs6,ys6);

  xs7 = ((px7 * cs) / pz7) + xflyt;
  ys7 = ((py7 * cs) / pz7) + yflyt;
  circle(xs7,ys7,5);
  text("7",xs7,ys7);

  xs8 = ((px8 * cs) / pz8) + xflyt;
  ys8 = ((py8 * cs) / pz8) + yflyt;
  circle(xs8,ys8,5);
  text("8",xs8,ys8);

  //z + hastighed
  pz1 = pz1 + speed;
  pz2 = pz2 + speed;
  pz3 = pz3 + speed;
  pz4 = pz4 + speed;
  pz5 = pz5 + speed;
  pz6 = pz6 + speed;
  pz7 = pz7 + speed;
  pz8 = pz8 + speed;

  //linjer
  line(xs1,ys1,xs2,ys2);
  line(xs1,ys1,xs4,ys4);
  line(xs4,ys4,xs3,ys3);
  line(xs3,ys3,xs2,ys2);
  line(xs7,ys7,xs6,ys6);
  line(xs6,ys6,xs5,ys5);
  line(xs6,ys6,xs2,ys2);
  line(xs5,ys5,xs1,ys1);
  line(xs8,ys8,xs7,ys7);
  line(xs8,ys8,xs5,ys5);
  line(xs8,ys8,xs4,ys4);
  line(xs7,ys7,xs3,ys3);
  
  //slider værdier
  xs1 += sliderx.value();
  ys1 += slidery.value();
  
  xs2 += sliderx.value();
  ys2 += slidery.value();
  
  xs3 += sliderx.value();
  ys3 += slidery.value();
  
  xs4 += sliderx.value();
  ys4 += slidery.value();
  
  xs5 += sliderx.value();
  ys5 += slidery.value();
  
  xs6 += sliderx.value();
  ys6 += slidery.value();
  
  xs7 += sliderx.value();
  ys7 += slidery.value();
  
  xs8 += sliderx.value();
  ys8 += slidery.value();

  //pz1 += sliderz.value();
  //pz2 += sliderz.value();
  //pz3 += sliderz.value();
  //pz4 += sliderz.value();
  //pz5 += sliderz.value();
  //pz6 += sliderz.value();
  //pz7 += sliderz.value();
  //pz8 += sliderz.value();

}