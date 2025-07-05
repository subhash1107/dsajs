# DSA Project

## Recent Learning Highlights (Day 5)

Today, I focused on three classic array problems and explored multiple approaches for each:

- **Missing Number:** Efficiently found the missing value in a sequence using XOR, sum-based, and loop-based methods (see comments in `missingNumber.js`).
- **Max Consecutive Ones:** Used a linear scan with a counter to track the maximum streak of 1's (see `maxConsecutiveOnes.js`).
- **Single Number:** Identified the unique element using bitwise XOR for O(n) time and O(1) space (see `singleNumber.js`).

Check the code comments in each file for alternative solutions and explanations!

This repository contains a comprehensive collection of Data Structures and Algorithms (DSA) practice problems and solutions, organized by topic. Each file provides a JavaScript implementation of a classic problem, with clear code and problem statements for learning and interview preparation.

## Folder Structure

```
dsa/
├── Array/
│   ├── bestTime.js
│   ├── maxConsecutiveOnes.js
│   ├── mergeSortedArray.js
│   ├── missingNumber.js
│   ├── moveZeroes.js
│   ├── removeElement.js
│   ├── removingDuplicates.js
│   └── reverseString.js
├── Basic Programming/
│   ├── coercion.js
│   ├── isPrime.js
│   ├── loop.js
│   ├── nestedLoop/
│   │   ├── fullgrid.js
│   │   ├── lowerTriangle.js
│   │   └── starPattern/
│   │       ├── centerpyramid.js
│   │       ├── invertedtrideccol.js
│   │       ├── rightangledtrianglealignedstar.js
│   │       ├── righttriinc.js
│   │       └── squarestars.js
│   ├── pallindrome.js
│   ├── reversedInteger.js
│   ├── secondlargest.js
│   └── typeof.js
```

## Array

A collection of classic array manipulation and algorithmic problems:

- **bestTime.js**: Find the maximum profit from a single buy and sell of stock (Best Time to Buy and Sell Stock).
- **maxConsecutiveOnes.js**: Find the maximum number of consecutive 1's in a binary array.
- **mergeSortedArray.js**: Merge two sorted arrays into one sorted array in-place.
- **missingNumber.js**: Find the missing number in an array containing n distinct numbers in the range [0, n].
- **moveZeroes.js**: Move all zeroes in an array to the end while maintaining the order of non-zero elements.
- **removeElement.js**: Remove all occurrences of a given value from an array in-place and return the new length.
- **removingDuplicates.js**: Remove duplicates from a sorted array.
- **reverseString.js**: Reverse a string in-place given as an array of characters.
- **singleNumber.js**: Find the element that appears only once in an array where every other element appears exactly twice.
- **singleNumber-ii.js**: Find the element that appears only once in an array where every other element appears exactly three times.

## Basic Programming

General programming and algorithmic challenges:

- **coercion.js**: Demonstrates JavaScript type coercion with various types.
- **isPrime.js**: Check if a number is prime using different methods.
- **loop.js**: Examples of searching, counting, and finding min/max in arrays using loops.
- **pallindrome.js**: Check if a number is a palindrome using multiple approaches.
- **reversedInteger.js**: Reverse the digits of an integer, handling negatives and overflow.
- **secondlargest.js**: Find the second largest and second smallest numbers in an array.
- **typeof.js**: Demonstrates the use of the `typeof` operator on various JavaScript types.

### nestedLoop

Problems involving nested loops, often for grid or pattern generation:

- **fullgrid.js**: Print a full grid of numbers using nested loops.
- **lowerTriangle.js**: Print lower triangle patterns of numbers using nested loops.

#### starPattern

Star and number pattern problems using nested loops:

- **centerpyramid.js**: Print centered pyramid star patterns in multiple ways.
- **invertedtrideccol.js**: Print an inverted triangle of stars.
- **rightangledtrianglealignedstar.js**: Print right-angled triangle patterns with stars and binary numbers.
- **righttriinc.js**: Print increasing right triangle patterns with stars and numbers.
- **squarestars.js**: Print a square of stars.

---

## Getting Started

Each file is self-contained and can be run with Node.js:

```bash
node path/to/file.js
```

Feel free to explore, modify, and use these solutions for your learning and interview preparation!
