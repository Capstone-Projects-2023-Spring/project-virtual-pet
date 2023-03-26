



const n = 51;
var level_array = Array.from(Array(n).keys());

console.log(level_array.shift())
console.log(level_array)

for(let x = 0; x<n-1; x++){
    level_array[x]=Math.pow(level_array[x],3)*(1/7)
}

for(let x = 1;x<n-1;x++){
    level_array[x]=level_array[x]+level_array[x-1]
}

console.log(level_array)

function CalculatePetLevel(xp){
    
    var level = 50;
    var remainder = 0;

    for (let x = 0; x < n-1;x++){

        if (xp < level_array[x]){
            level = x-1
            remainder = Math.floor(level_array[x-1])
            break;
        }

    }
    
    const level_with_remainder = {
        LEVEL:level,
        REMAINDER:remainder
    }

    return level_with_remainder

}

export default CalculatePetLevel;
