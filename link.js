class Link{
    //here body a will be will be the last link of the rope and body b will be a fruit
    constructor(bodyA,bodyB){
        //we subtracket 2 because the index starts from 0 and we also the addede fruit which increasing by 1
        var lastLink=bodyA.body.bodies.length-2
        this.link=Constraint.create({
            bodyA:bodyA.body.bodies[lastLink],
            pointA:{x:0,y:0},
            bodyB:bodyB,
            pointB:{x:0,y:0},
            length:-10,
            stiffness:0.01
        })

        World.add(world,this.link)
    }
}
