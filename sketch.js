cs = -50;

px1 = 20;
py1 = 200;
pz1 = -100;

px2 = 40;
py2 = 200;
pz2 = -100;

px3 = 40;
py3 = 220;
pz3 = -100;

px4 = 20;
py4 = 220;
pz4 = -100;

px5 = 20;
py5 = 200;
pz5 = -120;

px6 = 40;
py6 = 200;
pz6 = -120;

px7 = 40;
py7 = 220;
pz7 = -120;

px8 = 20;
py8 = 220;
pz8 = -120;

speed = 0;

function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(220);

  xs1 = (px1 * cs) / pz1;
  ys1 = (py1 * cs) / pz1;
  circle(xs1,ys1,5);

  xs2 = (px2 * cs) / pz2;
  ys2 = (py2 * cs) / pz2;
  circle(xs2,ys2,5);

  xs3 = (px3 * cs) / pz3;
  ys3 = (py3 * cs) / pz3;
  circle(xs3,ys3,5);

  xs4 = (px4 * cs) / pz4;
  ys4 = (py4 * cs) / pz4;
  circle(xs4,ys4,5);

  xs5 = (px5 * cs) / pz5;
  ys5 = (py5 * cs) / pz5;
  circle(xs5,ys5,5);

  xs6 = (px6 * cs) / pz6;
  ys6 = (py6 * cs) / pz6;
  circle(xs6,ys6,5);

  xs7 = (px7 * cs) / pz7;
  ys7 = (py7 * cs) / pz7;
  circle(xs7,ys7,5);

  xs8 = (px8 * cs) / pz8;
  ys8 = (py8 * cs) / pz8;
  circle(xs8,ys8,5);

  pz1 = pz1 + speed;
  pz2 = pz2 + speed;
  pz3 = pz3 + speed;
  pz4 = pz4 + speed;
  pz5 = pz5 + speed;
  pz6 = pz6 + speed;
  pz7 = pz7 + speed;
  pz8 = pz8 + speed;

  line(xs1,ys1,xs2,ys2);
  line(xs1,ys1,xs4,ys4);
  line(xs4,ys4,xs3,ys3);
  line(xs3,ys3,xs2,ys2);
  line(xs1,ys1,xs8,ys8); //fejl
  line(xs7,ys7,xs6,ys6);
  line(xs6,ys6,xs5,ys5);
  line(xs6,ys6,xs2,ys2);
  line(xs5,ys5,xs4,ys4); //fejl
  line(xs8,ys8,xs7,ys7);
  line(xs8,ys8,xs5,ys5);
  line(xs8,ys8,xs4,ys4);
}
