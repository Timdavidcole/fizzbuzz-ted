describe('Javabuzz', function() {

  var javabuzz

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {

      expect(javabuzz.isDivisibleByThree(3)).toBe(true)

    });

    it('divisible by 5', function() {

      expect(javabuzz.isDivisibleByFive(5)).toBe(true)

    });

    it('divisible by 15', function() {

      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true)

    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {

      expect(javabuzz.isDivisibleByThree(1)).toBe(false)

    });

    it('divisible by 5', function() {

      expect(javabuzz.isDivisibleByFive(1)).toBe(false)

    });

    it('divisible by 15', function() {

      expect(javabuzz.isDivisibleByFifteen(7)).toBe(false)

    });

  });

  describe('outputs fizz', function() {

    it('when number is divisible by 3', function() {

      expect(javabuzz.fizzBuzz(3)).toBe('fizz')

    });

  });

  describe('outputs buzz', function() {

    it('when number is divisible by 5', function() {

      expect(javabuzz.fizzBuzz(10)).toBe('buzz')

    });

  });

  describe('outputs fizzbuzz', function() {

    it('when number is divisible by 15', function() {

      expect(javabuzz.fizzBuzz(15)).toBe('fizzbuzz')

    });

  });

  describe('outputs number', function() {

    it('when number is not divisible by 3, 5 or 15', function() {

      expect(javabuzz.fizzBuzz(17)).toBe(17)

    });

  });

});
