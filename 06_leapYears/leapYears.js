const leapYears = function(year) {

    isLeapYear = (year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0)) ? true : false;

    return isLeapYear;



};



// Do not edit below this line
module.exports = leapYears;
