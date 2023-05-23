//npm run doc  --> this runs your jsdoc
//tsc -w  --> this runs and watches for any changes in your TypeScript
//----------------------------------------------------------------
//Question 1
/**
 * Rearranges and modifies the input string.
 * Removes the word 'JavaScript', reverses the words, converts to lowercase.
 * @param {string} inputString - The input string to be modified.
 * @returns {string} The modified string.
 */
/**
 ** @words->This line splits the inputString into an array of individual words
 ** by using the space character (' ') as the delimiter. The resulting array is stored in the variable words.
 **
 **@filterOut->This line filters out any words in the words array that are equal
 ** to the string 'javascript', regardless of case.
 ** The filter method is used along with a callback function that compares each
 ** word to 'javascript' after converting both to lowercase.
 ** The resulting array, excluding any occurrences of 'javascript', is stored
 ** in the variable filterOut.
 **
 ** @reversedString->This line reverses the order of elements in the filterOut
 ** array using the reverse method. It then joins the elements of the reversed
 ** array into a single string, with each word separated by a space (' '),
 ** using the join method. The resulting reversed and joined string is stored
 ** in the variable reversedString.
 **
 ** @changedString->This line reverses the order of elements in the filterOut
 ** array using the reverse method. It then joins the elements of the reversed
 ** array into a single string, with each word separated by a space (' '), using
 ** the join method. The resulting reversed and joined string is stored in the
 ** variable reversedString.
 */
const changeString = (inputString: string) => {
  const words = inputString.split(' ');
  const filterOut = words.filter((word) => word.toLowerCase() !== 'javascript');
  const reversedString = filterOut.reverse().join(' ');
  const changedString = reversedString.toLowerCase();

  return changedString;
};

const questionOneString = 'Yash is a javascript ninja';
const outputString = changeString(questionOneString);
console.log('Question 1');
console.log(outputString);
//----------------------------------------------------------------
//Question 2
/**
 * Fixes the given paragraph by replacing "JavaScript" with "javascript" and splitting it into sentences.
 * @param {string} paragraph - The paragraph to be fixed.
 * @returns {string[]} An array of sentences.
 * @throws {Error} If the word "JavaScript" is not found in the paragraph.
 */
const questionTwoParagraph: string =
  'Lodash is a JavaScript library that helps programmers write more concise and maintainable JavaScript. It can be broken down into several main areas: Utilities - for simplifying common programming tasks such as determining type as well as simplifying math operations.';
/**
 ** @sortedParagraph->This line uses the replace method with a regular
 ** expression /JavaScript/g to replace all occurrences of 'JavaScript'
 ** in the paragraph with 'javascript'. The g flag ensures that all occurrences
 ** are replaced, not just the first one. The resulting modified paragraph is
 ** stored in the variable sortedParagraph.
 **
 ** @sentences->This line splits the sortedParagraph into an array of sentences.
 ** It uses the '. ' string as the delimiter to split the paragraph into sentences.
 ** Each sentence is treated as a separate element in the resulting sentences array.
 **
 */
const fixParagraph = (paragraph: string) => {
  if (!paragraph.includes('JavaScript')) {
    throw new Error('The word "JavaScript" was not found in the paragraph.');
  }

  const sortedParagraph = paragraph.replace(/JavaScript/g, 'javascript');
  const sentences = sortedParagraph.split('. ');

  return sentences;
};
console.log('Question 2');
console.log(fixParagraph(questionTwoParagraph));
//----------------------------------------------------------------
//Question 3
/**
 * An anagram is a word or phrase formed by rearranging the letters of another word
 * or phrase. In other words, an anagram is created by rearranging the characters
 * of a string to produce a different string with the same set of characters.
 *
 * Checks if two strings are anagrams of each other.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} True if the strings are anagrams, false otherwise.
 */
const checkAnagram = (str1: string, str2: string): boolean => {
  const sortedString1 = str1.toLowerCase().split('').sort().join('');
  const sortedString2 = str2.toLowerCase().split('').sort().join('');
  /**
   ** ▪ str1.toLowerCase() converts str1 to lowercase, ensuring that
   **   the comparison is case-insensitive.
   **
   ** ▪ .split('') splits the lowercase string into an array of individual characters.
   **
   ** ▪ .sort() sorts the array of characters in alphabetical order.
   **
   ** ▪ .join('') joins the sorted array of characters back into a string.
   */
  return sortedString1 === sortedString2;
};

const word1: string = 'Army';
const word2: string = 'Mary';

const anagramResult = checkAnagram(word1, word2);
console.log('Question 3');
console.log(anagramResult); //answer should be true if we are using word1 and word2
//--------------------------------------------------------
//Question 4
/**
 * Finds the missing number in a sequence of numbers.
 * @param {number[]} numberArray - The array of numbers representing the sequence.
 * @returns {number | null} The missing number if found, or null if no missing number is found.
 */
const numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 9, 10];

const findTheMissingNumber = (numberArray: number[]) => {
  //This line sorts the numberArray in ascending order using the sort method
  //with a comparator function (a, b) => a - b. The resulting sorted array is
  //stored in the variable sortedArray.
  const sortedArray = numberArray.sort((a, b) => a - b);
  //This is a loop that iterates through the elements of the sortedArray using
  //an index variable i. It starts from 0 and continues until i reaches the
  //length of the sortedArray.
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== i + 1) {
      return i + 1;
    }
    //This conditional statement checks if the current element at index i in
    //the sortedArray is equal to the expected number in the sequence (i + 1).
    // In a sorted array, the expected number at each index should be (index + 1).
  }
  return null;
};

console.log('Question 4');
console.log(findTheMissingNumber(numberList));
//----------------------------------------------------------------
// Question 5
/**
 * Finds the repeating numbers in an array of numbers.
 * @param {number[]} numberList - The array of numbers.
 * @returns {number[]} The array containing the repeating numbers.
 */
const duplicateNumberList: number[] = [1, 4, 3, 4, 5, 7, 7, 8, 9, 10];

const findRepeatingNumber = (numberList: number[]) => {
  // This line declares a variable arrayMap and initializes
  //it as an empty object. The type annotation { [key: number]: number }
  //indicates that arrayMap is an object with keys of type number and
  //values of type number. This object will be used to store the count
  //of each number in the numberList.
  const arrayMap: { [key: number]: number } = {};

  //This line declares a variable repeatingNumbers and initializes it as
  // an empty array. This array will store the repeating numbers found
  //in the numberList.
  const repeatingNumbers: number[] = [];

  // This line uses the forEach method to iterate over each number (num)
  // in the numberList. For each number, it updates the arrayMap object
  // by incrementing the count of that number. If the number doesn't exist
  // as a key in arrayMap, it initializes it with a count of 1.

  numberList.forEach((num) => {
    arrayMap[num] = (arrayMap[num] || 0) + 1;
  });

  for (const num in arrayMap) {
    if (arrayMap[num] > 1) {
      repeatingNumbers.push(Number(num));
    }
  }
  return repeatingNumbers;
};
console.log('Question 5\n');
console.log(findRepeatingNumber(duplicateNumberList));
//----------------------------------------------------------------
//Question 6
/**
 * Calculates various statistics on a number list.
 *
 * @param {number[]} numbers - The list of numbers.
 * @returns {{
 *   lowest: number | null,
 *   highest: number | null,
 *   median: number | null,
 *   mode: number[] | null
 * }} - The statistics object with lowest, highest, median, and mode values.
 */

const getStatsOnNumberList = (numbers: number[]) => {
  // This line declares a variable result and initializes it as an object.
  // The object has four properties: lowest, highest, median, and mode.
  //The initial values of these properties are set to null. Type annotations
  //are used to indicate that lowest and highest can be either number or null,
  // and median and mode can be either number[] or null.
  const result = {
    lowest: null as number | null,
    highest: null as number | null,
    median: null as number | null,
    mode: null as number[] | null,
  };

  if (numbers.length === 0) {
    return result;
  }

  result.lowest = Math.min(...numbers); // Find lowest number
  result.highest = Math.max(...numbers); // Find highest number

  // Calculate median
  // In mathematics, the median is a measure of central tendency that
  //represents the middle value of a set of numbers. It divides the data
  //into two equal halves, such that half of the numbers are less than or
  //equal to the median, and the other half are greater than or equal to the median.
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const middleNumber = Math.floor(sortedNumbers.length / 2);
  //checks if there is an even or odd number of middle values
  if (sortedNumbers.length % 2 === 0) {
    result.median =
      (sortedNumbers[middleNumber - 1] + sortedNumbers[middleNumber]) / 2;
  } else {
    result.median = sortedNumbers[middleNumber];
  }

  // Calculate mode
  //In mathematics, the mode refers to the value or values
  //that appear most frequently in a set of data. It is the value
  //that occurs with the highest frequency or count.

  // This line declares a variable numberCountMap and initializes it
  // as an empty object. The object will be used to store the count of
  // each number in the numbers array.
  const numberCountMap: { [key: number]: number } = {};

  for (const num of numbers) {
    numberCountMap[num] = (numberCountMap[num] || 0) + 1;
  }

  const maxCount = Math.max(...Object.values(numberCountMap));
  // This line calculates the maximum count or frequency of any number
  // in the numberCountMap object. It uses the Math.max function along
  //with the spread operator (...) to convert the values of numberCountMap
  // into an array and find the maximum value from that array. This maximum
  // count will be used to identify the mode(s) later.

  result.mode = Object.keys(numberCountMap)
    .filter((num) => numberCountMap[Number(num)] === maxCount)
    .map(Number);
  /**
   ** This line does the following:

   ** ▪ Object.keys(numberCountMap): Retrieves an array of keys (numbers) 
   **   from the numberCountMap object.
   **
   ** ▪ .filter((num) => numberCountMap[Number(num)] === maxCount): Filters 
   **  the keys (numbers) by selecting only those for which the count in 
   **  the numberCountMap object is equal to the maxCount calculated earlier. 
   **  This filters out the numbers that do not have the maximum frequency.
  **
  ** ▪ .map(Number): Converts the filtered keys back into numbers. 
  **   This step ensures that the resulting result.mode array contains numbers instead of strings.
   */

  return result;
};
const statsNumberList: number[] = [1, 4, 3, 4, 5, 7, 7, 8, 9, 10];
console.log('Question 6');
console.log(getStatsOnNumberList(statsNumberList));
//----------------------------------------------------------------
//Question 7
//abcdefghijklmnopqrstuvwxyz
//zyxwvutsrqponmlkjihgfedcba
//eg: so
/**
 * Decode the input string based on the provided cipher.
 * @param {string} enteredString - The encoded string to be decoded.
 * @returns {string} The decoded message.
 */
const decodeMessage = (enteredString: string) => {
  let decodedMessage = '';
  for (let i = 0; i < enteredString.length; i++) {
    let character = enteredString[i];
    if (character >= 'a' && character <= 'z') {
      decodedMessage += String.fromCharCode(
        'a'.charCodeAt(0) + 'z'.charCodeAt(0) - character.charCodeAt(0)
      );
    } else {
      decodedMessage += character;
    }
  }
  return decodedMessage;
};
const testOne = "wrw blf hvv ozhg mrtsg'h vkrhlwv?";
const testTwo = "Yvzs! I xzm'g yvorvev Lzmxv olhg srh qly zg gsv xlolmb!!";
console.log('Question 7');

console.log(decodeMessage(testOne));
console.log(decodeMessage(testTwo));
