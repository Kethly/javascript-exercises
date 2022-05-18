const reverseString = function(str) {
    let result = "";
    for(let x = str.length - 1; x >= 0; x--){
        result += str.substring(x, x + 1);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
