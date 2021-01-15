class Obstacle
{
    constructor(x,y,w,h,img,scale1){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,options)
        this.obstacle = createSprite(0,0)
        this.obstacle.addImage(img)
        this.obstacle.scale = scale1
        this.w = w
        this.h = h

        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        this.obstacle.x = pos.x 
        this.obstacle.y = pos.y


    }
}