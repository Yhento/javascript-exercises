


const findTheOldest = function(people) {

people.forEach(person => {
  if (!('yearOfDeath' in person)){
    person.yearOfDeath = new Date().getFullYear();
  }
})



people.sort((a, b) => {
  let lastPersonAge = a.yearOfDeath - a.yearOfBirth;
  let nextPersonAge = b.yearOfDeath - b.yearOfBirth;

  return  nextPersonAge - lastPersonAge;


})

return people[0];

};


// Do not edit below this line
module.exports = findTheOldest;
