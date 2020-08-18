class Dustbin{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.bottomBody = Bodies.rectangle(x, y, this.width, this.height, options);
        this.leftBody = Bodies.rectangle(x, y, width, height, options);
        this.rightBody = Bodies.rectangle(x, y, width, height, options);

        this.width = 200;
        this.height = 20;

        this.thickness = 200;

        this.x=x;
        this.y=y;

        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);

      }
      display(){
          var dustbinBottom=this.bottomBody.position
          var dustbinLeft=this.leftBody.position
          var dustbinRight=this.rightBody.position
        push();

        translate(dustbinBottom.x, dustbinBottom.y);



        rectMode(CENTER);
        strokeWeight(2);
        fill("White");
        rect(200,200,this.width, this.height);

        pop();

        push();

        translate(dustbinLeft.x, dustbinRight.y);
   


        rectMode(CENTER);
        strokeWeight(2);
        fill("White");
        rect(200,200,this.width, this.height);
        pop();

        push();

        translate(dustbinRight.x, dustbinRight.y);



        rectMode(CENTER);
        strokeWeight(2);
        fill("White");
        rect(200,200,this.width, this.height);
        pop();
      }
}
