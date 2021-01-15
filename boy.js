class Boy
{
    constructor(x,y,w,h){
    
        this.boy = createSprite(x,y,w,h)
        this.boy.addAnimation("boy",boyImg)
        this.boy.addAnimation("boyR",boyImgR)
    
    }
   
}