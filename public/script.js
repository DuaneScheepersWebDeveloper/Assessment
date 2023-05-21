"use strict";
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
const changeString = (inputString) => {
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
const questionTwoParagraph = 'Lodash is a JavaScript library that helps programmers write more concise and maintainable JavaScript. It can be broken down into several main areas: Utilities - for simplifying common programming tasks such as determining type as well as simplifying math operations.';
const fixParagraph = (paragraph) => {
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
const checkAnagram = (str1, str2) => {
    const sortedString1 = str1.toLowerCase().split('').sort().join('');
    const sortedString2 = str2.toLowerCase().split('').sort().join('');
    return sortedString1 === sortedString2;
};
const word1 = 'Army';
const word2 = 'Mary';
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
const numberList = [1, 2, 3, 4, 5, 6, 7, 9, 10];
const findTheMissingNumber = (numberArray) => {
    const sortedArray = numberArray.sort((a, b) => a - b);
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== i + 1) {
            return i + 1;
        }
    }
    return null;
};
const whatsMissing = findTheMissingNumber(numberList);
console.log('Question 4');
console.log(whatsMissing);
//----------------------------------------------------------------
// Question 5
/**
 * Finds the repeating numbers in an array of numbers.
 * @param {number[]} numberList - The array of numbers.
 * @returns {number[]} The array containing the repeating numbers.
 */
const duplicateNumberList = [1, 4, 3, 4, 5, 7, 7, 8, 9, 10];
const findRepeatingNumber = (numberList) => {
    const arrayMap = {};
    const repeatingNumbers = [];
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
const getStatsOnNumberList = (numbers) => {
    const result = {
        lowest: null,
        highest: null,
        median: null,
        mode: null,
    };
    if (numbers.length === 0) {
        return result;
    }
    result.lowest = Math.min(...numbers); // Find lowest number
    result.highest = Math.max(...numbers); // Find highest number
    // Calculate median
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const middleNumber = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
        result.median =
            (sortedNumbers[middleNumber - 1] + sortedNumbers[middleNumber]) / 2;
    }
    else {
        result.median = sortedNumbers[middleNumber];
    }
    // Calculate mode
    const numberCountMap = {};
    for (const num of numbers) {
        numberCountMap[num] = (numberCountMap[num] || 0) + 1;
    }
    const maxCount = Math.max(...Object.values(numberCountMap));
    result.mode = Object.keys(numberCountMap)
        .filter((num) => numberCountMap[Number(num)] === maxCount)
        .map(Number);
    return result;
};
const statsNumberList = [1, 4, 3, 4, 5, 7, 7, 8, 9, 10];
console.log('Question 6');
console.log(getStatsOnNumberList(statsNumberList));
