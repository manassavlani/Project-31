class Box extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      restitution:0.5,
      friction:0.1,
      
    }
    this.visiblity = 255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width
    this.height = height;
   
  }
  display() {
    if(this.body.speed < 3 ){
      push ();
      translate (this.body.position.x,this.body.position.y)
      rotate (this.body.angle);
      rectMode(CENTER)
      rect(0,0,this.width,this.height);
      pop ()
    }
    else{
      World.remove(world,this.body);
      push()
      this.visiblity = this.visiblity -3;
      pop()
    }
   
  }
};
