class Sidebin{;
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
    
        
    
        World.add(world,this.body);

    }
display(){
    var pos=this.body.position;
    fill("blue");
    rect(this.image,this.x,this.y,this.width,this.height);
    rectMode(CENTER);
}
}
