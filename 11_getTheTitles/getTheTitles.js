const getTheTitles = function(collection) {
    let temp = [];
    for(let x = 0; x < collection.length; x++){
        temp[x] = collection[x].title;
    }
    return temp;
};

// Do not edit below this line
module.exports = getTheTitles;
