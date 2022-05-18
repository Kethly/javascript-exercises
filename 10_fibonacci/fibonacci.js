const fibonacci = function(iter) {
    let arr = [1, 0, 1];
    let rotate = 1;
    for(let x = 0; x < iter - 2; x++){
        rotate *= -1;
        arr[1 + rotate] += arr[1 - rotate];
    }
    return iter > 0 ? parseInt(arr[1 + rotate]) : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
