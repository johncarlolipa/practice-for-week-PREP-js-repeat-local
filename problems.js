function divideByThree(num) {
  /* Returns the passed in number argument divided by three. */
  // Your code here
  return num / 3;
}

divideByThree(6);

function averageOfTwo(num1, num2) {
  /* Returns the average of two numbers, num1 and num2. */
  // Your code here
  return (num1 + num2) / 2;
}
averageOfTwo(4, 5);

function averageOfFour(num1, num2, num3, num4) {
  /* Takes in four numbers. The function should return the average of all of
    the numbers. */
  // Your code here
  return (num1 + num2 + num3 + num4) / 4;
}
averageOfFour(1, 2, 3, 4);

function doubler(nums) {
  /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
  // Your code here

  let doubledNumbers = [];

  for (let number of nums) {
    let doubledNumber = number * 2;
    doubledNumbers.push(doubledNumber);
  }

  return doubledNumbers;
}

doubler(1, 2, 3, 4);

function combineArrays(arr1, arr2) {
  /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
  // Your code here
  return arr1.concat(arr2);
}

combineArrays([1, 2, 3], [4, 5, 6]);

function wordWithinArray(word, arr) {
  /* Takes in both a word and an array of words as arguments and returns a
      boolean that returns true if that string is located inside of the array, or
      false if it does not. Use `Array.indexOf`. */

  // Your code here
  return arr.indexOf(word) !== -1;
}

const wordToSearch = "apple";
const wordsArray = ["mango", "pinya", "apple", "grapes"];
console.log(wordWithinArray(wordToSearch, wordsArray));

function echo(str) {
  /* Takes in a string and returns that string "echo-ized". E.g.
      echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
      echo("hey"); // => returns "HEY ... hey ... hey"
      echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
  // Your code here
  return str.toUpperCase() + "!...";
}

console.log(echo("Mom")); // Output: "MOM!...Mom!...mom!"

function fizzBuzz(max) {
  /* Takes a number, max and returns an array that contains every number from
      0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */

  const result = [];

  for (let i = 1; i < max; i++) {
    let isDivisibleBy3 = i % 3 === 0;
    let isDivisibleBy5 = i % 5 === 0;

    if (
      (isDivisibleBy3 || isDivisibleBy5) &&
      !(isDivisibleBy3 && isDivisibleBy5)
    ) {
      result.push(i);
    }
  }

  return result;
}

// Example usage:
fizzBuzz(20);

function hello(name) {
  /* Takes in a string name and returns a string saying "Hello, " to that name. */
  // Your code here

  return "Hello" + name;
}

hello("JC");

function goodbye(name) {
  /* Takes in a string name and returns a string saying "Bye, " to that name. */
  // Your code here

  return "Goodbye" + name;
}

goodbye("John");

function isFive(num) {
  /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
  // Your code here
  return num == 6 ? true : false;
}

isFive(4);

function isOdd(num) {
  /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
  // Your code here
}

function isSubString(searchString, subString) {
  /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
  // Your code here
}

function aCounter(word) {
  /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */
  /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
  // Your code here
}

module.exports = {
  divideByThree,
  averageOfTwo,
  averageOfFour,
  doubler,
  combineArrays,
  wordWithinArray,
  echo,
  fizzBuzz,
  hello,
  goodbye,
  isFive,
  isOdd,
  isSubString,
  aCounter,
};
