# DSA Project

## Recent Learning Highlights (Day 11)

Today, I worked on several new problems and practice implementations:

- **msort.js**: Practiced implementing Merge Sort from scratch, reinforcing the divide-and-conquer approach and in-place merging.
- **quickSort.js**: Wrote a custom Quick Sort to deepen understanding of partitioning and recursion in sorting algorithms.
- **shuffle.js**: Explored different ways to shuffle an array, including the efficient Fisher-Yates algorithm for unbiased randomization.
- **onceExecute.js**: Created a higher-order function that ensures a given function can only be executed once, useful for scenarios like one-time initialization.

Check the respective files for code, comments, and example runs!

## Recent Learning Highlights (Day 10)

Today, I worked on two new problems:

- **mixSort.js**: Implemented a custom sort function that separates strings and numbers in an array, sorts each group individually, and then combines them. Practiced type checking and sorting logic for mixed-type arrays.
- **removeDuplicatesUnsorted.js**: Explored two approaches to remove duplicates from an unsorted array: using a Set for simplicity, and using a Map to do it in-place while preserving order.

Check the respective files for code, comments, and example runs!

## Recent Learning Highlights (Day 7)

Today, I worked on a variety of problems across arrays, searching, and recursion:

- **chunkArray.js**: Learned how to split an array into chunks of a specified size, useful for batching and pagination tasks.
- **findSumPairs.js**: Implemented a class to efficiently find if any pair of numbers from two arrays sums to a given value, exploring hashing and frequency maps.
- **fibonacciSeries.js**: Explored multiple ways to generate the Fibonacci sequence, including recursion, iteration, and memoization.
- **linearSearch.js**: Practiced the basic linear search algorithm to find an element in an array, with discussion on time complexity.
- **binarySearch.js**: Implemented binary search for sorted arrays, both iteratively and recursively, and discussed its efficiency over linear search.

### Sorting Algorithms (Latest Learning)

Recently, I explored and implemented several classic sorting algorithms:

- **Bubble Sort** (`bubbleSort.js`): Iteratively compares and swaps adjacent elements to bubble the largest values to the end. Includes an optimization to stop early if the array is already sorted.
- **Insertion Sort** (`InsertionSort.js`): Builds the sorted array one element at a time by inserting each new element into its correct position among the previously sorted elements.
- **Selection Sort** (`selectionSort.js`): Selects the minimum element from the unsorted part and swaps it with the first unsorted element, moving the boundary of the sorted section forward.
- **Merge Sort** (`mergeSort.js`): A classic divide-and-conquer algorithm that recursively splits the array, sorts each half, and merges them back together for efficient O(n log n) sorting.

Check the respective files for code, comments, and example runs of each sorting algorithm!

### Additional Practice Sorting Algorithms

In addition to the classic sorting algorithms, I created a few files for extra practice and experimentation:

- **msort.js**: My own implementation of Merge Sort for practice. Recursively splits the array, sorts, and merges. Run with sample data to see step-by-step sorting.
- **quickSort.js**: Practice implementation of Quick Sort using partitioning and recursion. Good for understanding in-place sorting and pivot logic.
- **mixSort.js**: Custom sort function that separates strings and numbers in an array, sorts each group individually, and then combines them. Useful for mixed-type arrays. (Note: You can shuffle the array before sorting to see how the function handles different input orders.)

Check these files for code, comments, and example runs!

Check the respective files for code, comments, and alternative approaches!

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
