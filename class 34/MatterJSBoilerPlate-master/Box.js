class Box{
    constructor(x,y){
        var options ={
            restitution :0.85,
            friction:1.3,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }
    diplay(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("red")
        strokeWeight(3);
        pop();
    }
}