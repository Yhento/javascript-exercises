const palindromes = function (str) {
  original_string = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  reverse_string = original_string.split("").reverse().join("");




  

  

   
  let is_palindrome = original_string == reverse_string ? true : false;

  return is_palindrome;

  



};

palindromes("A car, a man, a maraca.");


// Do not edit below this line
module.exports = palindromes;
