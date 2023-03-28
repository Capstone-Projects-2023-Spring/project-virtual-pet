
const n = 51;
var level_array = Array.from(Array(n).keys());

level_array.shift()
console.log(level_array)

for(let x = 0; x<n-1; x++){
    level_array[x]=Math.floor(Math.pow(level_array[x],3)*(1/7))
}

for(let x = 1;x<n-1;x++){
    level_array[x]=Math.floor(level_array[x]+level_array[x-1])
}

console.log(level_array.shift() )
console.log(level_array)

function CalculatePetLevel(xp){
    
    var level = 50;
    var remainder = 0;

    for (let x = 0; x < n-2;x++){

        if (xp < level_array[x]){
            level = x
            remainder = Math.floor(level_array[x+1]) - xp
            break;
        }

    }
    const next_level = Math.floor((1/7)*Math.pow((level+1),3))
    const level_with_remainder = {
        LEVEL:level,
        REMAINDER:remainder,
        NEXT_LEVEL:next_level,
    }
    console.log(level_with_remainder)
    return level_with_remainder

}

export default CalculatePetLevel;
