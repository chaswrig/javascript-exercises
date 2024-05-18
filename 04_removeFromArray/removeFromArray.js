const removeFromArray = function(startingArray) {
    
    for(i = 1; i < arguments.length; i++){
        let numberLoops = startingArray.length
        for(j = 1; j <= numberLoops;j++){
            const index = startingArray.indexOf(arguments[i]);
            if (index >-1) {
                startingArray.splice(index,1);
            }
        }
    }

    return startingArray;
};

//argument.length will return the number of objects to be removed + 1




// Do not edit below this line
module.exports = removeFromArray;
