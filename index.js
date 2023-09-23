function distanceFromHqInBlocks(blocks){
if(blocks >42 ){
    return blocks - 42
}
else{
    return 42 - blocks
}
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end){
    if(start < end){
        return(end - start)*264
    }else{
        return(start - end)*264

    }
}
function calculatesFarePrice(start, destination) {
 const blocks = distanceTravelledInFeet(start, destination)
 if(blocks <= 400){
    return 0;
}else if(blocks > 400 && blocks < 2000){
    return 2.56;
}else if(blocks > 2000 && blocks < 2500){
    return 25;
}else{
    return "cannot travel that far";
}


     
}
