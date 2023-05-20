"use strict";
/**
 *
 * @module calculator
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.subtract = exports.multiply = exports.add = void 0;
/**
 * Add two numbers
 * @param {number} n1 - First number
 * @param {number} n2 - Second number
 * @returns {number} - Sum of n1 and n2
 */
const add = (n1, n2) => n1 + n2;
exports.add = add;
/**
 * Multiply two numbers
 * @param {number} n1 - First number
 * @param {number} n2 - Second number
 * @returns {number} - Product of n1 and n2
 */
const multiply = (n1, n2) => n1 * n2;
exports.multiply = multiply;
/**
 * Subtract two numbers
 * @param {number} n1 - First number
 * @param {number} n2 - Second number
 * @returns {number} - Difference of n1 and n2
 */
const subtract = (n1, n2) => n1 - n2;
exports.subtract = subtract;
/**
 * Divide two numbers
 * @param {number} n1 - First number
 * @param {number} n2 - Second number
 * @returns {number} - Quotient of n1 and n2
 */
const divide = (n1, n2) => n1 / n2;
exports.divide = divide;
