const palindromes = function (str) {
    let input = str.replace(/[^\w\s]/gi, '').replace(/\s+/g, '').toLowerCase();
    for(let x = 0; x < parseInt(input.length / 2) + 1; x++){
        if(input.charAt(x) !== input.charAt(input.length - x - 1)) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
