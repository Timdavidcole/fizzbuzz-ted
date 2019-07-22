var Javabuzz = function() {

};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return (number % 15 === 0);
};

Javabuzz.prototype.fizzBuzz = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return 'fizzbuzz';
  }
  else if (this.isDivisibleByThree(number)) {
    return 'fizz';
  }
  else if (this.isDivisibleByFive(number)) {
    return 'buzz';
  }
  else return number
};

var javabuzz = new Javabuzz();
for (var i = 1; i < 101; i++) {
  console.log(javabuzz.fizzBuzz(i));
}
