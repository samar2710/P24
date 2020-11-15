class Paper{
    constructor(x,y,radius){
    var options={
        'restitution':0.3,
        isStatic:false,
        fricton:0.5,
        density:1.2
    }
    this.body=Matter.Bodies.circle(100,400,150,options);
    this.radius=radius;
    this.image=loadImage("paper.png");
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    image(this.image,0,20,35);
    imageMode(CENTER);
    pop();
}
}