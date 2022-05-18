const removeFromArray = function(arr, ...args) {
    for(let x = 0; x < args.length; x++){
        if(arr.indexOf(args[x]) != -1) arr.splice(arr.indexOf(args[x]), 1);

    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
