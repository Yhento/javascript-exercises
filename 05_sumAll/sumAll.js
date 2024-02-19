const sumAll = function(first, last) {
    sum = 0;
    let lowestNumber = first;
    let highestNumber = last;

    if (first < 0 || last < 0){
        return 'ERROR';
    }

    if(typeof first !== "number" || typeof last !== "number") {
        return 'ERROR';
    }

    if (first > last) {
       highestNumber = first;
       
       lowestNumber = last;
       
    } 
    for (i = lowestNumber; i <= highestNumber; i++) {

        sum += i;

    }

    return sum;

};

console.log(sumAll(10, [90, 1]))

// Do not edit below this line
module.exports = sumAll;
