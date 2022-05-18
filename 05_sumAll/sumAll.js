const sumAll = function(start, end) {
    if(start < 0 || end < 0 || +start !== start || +end !== end ) return "ERROR";
    let total = 0;
    let realstart = start < end ? start : end;
    let realend = start < end ? end : start;
    
    for(let x = realstart; x <= realend; x++) total+= x;
    return total;
};

// Do not edit below this line
module.exports = sumAll;
