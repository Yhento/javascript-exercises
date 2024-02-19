const removeFromArray = function(arr, ...Args) {

    filteredArray = arr.filter(item => !(Args.includes(item)))
    return filteredArray;

};

console.log(removeFromArray([1, 2, 3], "1", 3));


// Do not edit below this line
module.exports = removeFromArray;
