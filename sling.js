class Sling {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1,
        angularStiffness: 1,
        length: 220
      };
  
      this.pointB = pointB;
      this.pointX = bodyA.x;
      this.pointY = bodyA.y - 250;
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
    }
  
    display() {
      if (this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("#fff");
        strokeWeight(3.5);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
      }
    }
  }