var mother, motherImage,i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15;
  
function preload(){
  
  motherImage = loadAnimation("i1.jpeg","i2.jpeg","i3.jpeg","i4.jpeg","i5.jpeg","i6.jpeg","i7.jpeg","i8.jpeg","i9.jpeg","i10.jpeg","i11.jpeg","i12.jpeg","i13.jpeg","i14.jpeg","i15.jpeg");
  
}

function setup() {
  createCanvas(450, 450);
  
  mother = createSprite(225,200,20,20);
  mother.addAnimation("abc",motherImage);
  mother.scale = 0.25
}

function draw() {
  background(220);
  
  fill(255,0,123)
  textSize(20);
  text("Happy Mothers Day",140,400);
  
  console.log("Happy Mothers Day")
  
  drawSprites();
  
}