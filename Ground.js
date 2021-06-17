class Ground{
  constructor(x,y,width,height){
    var options ={ isStatic: true}
    
    this.body =  Bodies.rectangle(x,y,width,height,options);
    World.add(myWorld,this.body);
    this.width = width;
    this.height = height;
  }
  display(){
    var pos=this.body.position;
    fill("brown");
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y,this.width, this.height);

  }
  show()
  {
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y,this.width, this.height);
  }


}
