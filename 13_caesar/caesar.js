const caesar = function(str, shift) {
    let temp = "";
    let newShift = shift < 0 ? 26 + shift : shift;
    for(let x = 0; x < str.length; x++){
        let val = str.charCodeAt(x);
        if((val <= 90 && val >= 65) || (val <= 122 && val >= 97)){
          let upper = (+(val > 90) * 32) + 65;

        temp += String.fromCharCode(((val - upper + newShift) % 26) + upper);}
        else {
          temp += str.charAt(x);
        }

    }
    return temp;
};

// Do not edit below this line
module.exports = caesar;
