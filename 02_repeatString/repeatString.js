const repeatString = function(str, iter) {
    if(iter < 0) return "ERROR";
    let result = "";
    for(let x = 0; x < iter; x++){
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
