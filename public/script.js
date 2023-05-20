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
console.log(whatsMissing);
//----------------------------------------------------------------
