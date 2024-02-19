const convertToCelsius = function(f) {

  celsius = parseFloat(((f-32) * (5/9)).toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(c) {
  farenheit = parseFloat((c * 9/5 + 32).toFixed(1));
  return farenheit;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
