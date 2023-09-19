//NOTE! Will need to test with node input modules and fix file directory for index_test.js

//Import assert methods
const assert = require("assert");

//Import Rooster module using require
const Rooster = require("../index.js");

//Create automated test of rooster module
describe ("Test Rooster Module. ",() => {
  describe("Test .announceDawn. ", () => {
    it ('returns rooster call', () => {
      const expected = "cock-a-doodle-doo!";
      const actual = Rooster.announceDawn();
      assert.equal(actual, expected)
    })
  }) 

  describe("Test .timeAtDawn.", () => {
    it("returns argument as a string", () => {
      const expected = "string";
      const actual = typeof Rooster.timeAtDawn(5);
      assert.strictEqual(actual, expected);
    })

    it("throws an error if passed a number less than 0", () => {
      //Tests if the number is less than zero by automating a test. The test input is supposed to fail. A thrown error in index.js "RangeError" is thrown if the input number does not meet criteria.
      const expected = RangeError;
      const testInput =  -1;
      assert.throws(() => {
        Rooster.timeAtDawn(testInput);
      },
      expected
      );
    })

    it("throws an error if passed a number greater than 23", () => {
      const expected = RangeError;
      const testInput =  24;
      assert.throws(() => {
        Rooster.timeAtDawn(testInput);
      },
      expected
      );
    })
  })
})
