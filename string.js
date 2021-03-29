class String 
{
    constructor(bodyA,pointB)
    {
    var options=
    {
        bodyA:bodyA,
        pointB:pointB,
        length:1,
        stiffness:0.04

    }

    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    }
    attacher(body)
    {
        this.chain.bodyA = body;
    }
    fly()
    {
        this.chain.bodyA = null;
    }
    display()
    {

        if(this.chain.bodyA)
        {
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(1);
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);
        }
    }
}
function detectCollision(lstone,lmango)
{
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(
        lmango.body,false);
  }
}