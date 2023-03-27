function CalculateXP(base_type,candy_level){
    
    var base_value = 1
    var level_value = 1
    
    switch(base_type){

        case 'S':
            base_value = 3
            break
        case 'M':
            base_value = 3
            break
        case 'L':
            base_value = 12
            break
        case 'C':
            base_value = 15
    }

    switch(candy_level){
        
        case 1:
            level_value = 1
            break
        case 2:
            level_value = 1
            break
        case 3:
            level_value = 8
            break
        case 4:
            level_value = 30
            break
        case 5:
            level_value = 79
            break
    }


    return (base_value*level_value)

} 

export default CalculateXP;


