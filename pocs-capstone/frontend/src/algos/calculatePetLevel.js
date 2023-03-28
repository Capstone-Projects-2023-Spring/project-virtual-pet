
const n = 52;
var level_array = Array.from(Array(n).keys());

level_array.shift()
//console.log(level_array)

for(let x = 0; x<n; x++){
    level_array[x]=Math.floor(Math.pow(level_array[x],3)*(1/7))
}

for(let x = 1;x<n-1;x++){
    level_array[x]=Math.floor(level_array[x]+level_array[x-1])
}

//console.log(level_array.shift() )
level_array.pop()
//console.log(level_array)

function CalculatePetLevel(xp){
    //console.log("XP------>",xp)
    var level = 50;
    var remainder = 0;
    var next_level = 0;
    for (let x = 0; x < n-1;x++){

        if (xp < level_array[x]){
            level = x-1
            remainder = level_array[x] - xp
            next_level = Math.floor((1/7)*Math.pow((x+2),3))
            break;
        }

    }

    
    const level_with_remainder = {
        LEVEL:level,
        REMAINDER:remainder,
        NEXT_LEVEL:next_level,
    }
    //console.log(level_with_remainder)
    return level_with_remainder

}

export default CalculatePetLevel;
