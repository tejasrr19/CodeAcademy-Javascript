/**
 * Created by Tejas on 9/11/2015.
 */
var slaying=true;
var youHit=Math.floor(Math.random() * 2);
var damageThisRound=Math.floor(Math.random()*5+1);
var totalDamage;
while(slaying){

    if(youHit===1){
        console.log("You hit the dragon");
        totalDamage += damageThisRound;
        if(totalDamage>=4){
            console.log("You slew the dragon");
            slaying=false;
        }
        else{
            youHit=Math.floor(Math.random() * 2);
        }

    }
    else if(youHit===0){
        console.log("The dragon defeated you");
    }
    slaying=false;

}