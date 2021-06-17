class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
       
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
   
   show(){        
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;

            stroke(0);
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}