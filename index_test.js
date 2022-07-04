// Task 1
const assert = require('assert');

// Task 2
const Rooster = require('../index');

// Task 3, 4
describe('Rooster', () => {
  describe('.announceDawn', () => {
    // Task 5
    it('returns a Rooster call', () => {
      // Task 5
      // Setup
      const expected = 'kokoriko';

      // Exercise
      const actual = Rooster.announceDawn();

      // Verify
      assert.equal(expected, actual);

    });
  });

  // Task 8
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {

      // Setup
      const expected = '2';

      // Exercise
      const actual = Rooster.timeAtDawn(2);

      // Verify
      assert.equal(expected, actual);
    });
    
    it('throws an error if passed a number less than 0', () => {
      // Setup
      const inputNum = -2;
      const expected = RangeError;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNum);
      }, expected);
    });

    it('throws an error if passed a number greater than 23', () => {
      // Setup
      const inputNum = 24;
      const expected = RangeError;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNum);
      }, expected);
    });
  });
});
