const findTheOldest = function(collection) {
    let oldestAge = 0;
    let oldestIndex = 0;
    for(let x = 0; x < collection.length; x++){
        let birth = collection[x].yearOfBirth;
        let death = collection[x].yearOfDeath || parseInt((new Date()).getFullYear());
        let difference = death - birth;
        if(difference >= oldestAge){
            oldestAge = difference;
            oldestIndex = x;
        }
    }
    return collection[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
