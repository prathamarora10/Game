class Waste
{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,options)
        this.waste = createSprite(0,0)
        this.w = w
        this.h = h

        var r = round(random(1,8))
        console.log(r)
        switch(r){
            case 1:this.waste.addImage(billiardball)
            break;
            case 2:this.waste.addImage(chocolate)
            break;
            case 3:this.waste.addImage(paperwaste)
            break;
            case 4:this.waste.addImage(partyhat)
            break;
            case 5:this.waste.addImage(rock)
            break;
            case 6:this.waste.addImage(soda)
            break;
            case 7:this.waste.addImage(water)
            break;
            case 8:this.waste.addImage(watering)
            break;
        }

        this.waste.scale = 0.6
        
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        this.waste.x = pos.x
        this.waste.y = pos.y
        
       
    }

}