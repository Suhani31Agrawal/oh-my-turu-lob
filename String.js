class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length:410
        }
        this.string = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.string);

    }
    display(){
        if(this.string.bodyA){
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
}