const reverseString = function(str) {

    strLettersReversed = str.split('').reverse();

    stringReversed = strLettersReversed.join('');

    return stringReversed;

};

reverseString('Tyler')
// Do not edit below this line
module.exports = reverseString;
