/*
BINARY SEARCH ARRAY

*** Description

Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.

*** Exercises

Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?

Extra credit: Implement the function both iteratively and recursively.

*/

//This works but would not work if the constraint was that the original array can not be altered.
//By using .slice() I'm iterating over the existing array and creating a new one.
//This effects both time complexity and space complexity
var binarySearch = function (sortedArr, value) {
  var mid = Math.floor(sortedArr.length / 2);
  var startIndex;
  var endIndex;
  var halfed;

  //I knwo I need to keep track of the indexes in the orignal array. Slice creates a new array and change sthe indexes
  //By creating tracker variables for the start and finish of the existing indexs...
  //I can check teh value at a certian point in teh array and determine if I need to continue the search

  //to do this affectively I believe I shoudl be using a subroutine, the reason being is that our original
  //function takes in an array(the array we dont want altered) and a value

  if (sortedArr[mid] === value) {
    console.log('found it');
    return value;
  } else if (sortedArr[mid] > value) {
    console.log('searching lower half');
    startIndex;
    halfed = sortedArr.slice(0, mid);
    binarySearch(halfed, value);
  } else if (sortedArr[mid] < value) {
    console.log('searching upper half');
    halfed = sortedArr.slice(mid, sortedArr.length - 1);
    binarySearch(halfed, value);
  } else {
    console.log('item not found');
    return null;
  }
};

var sample = [1, 2, 3, 4, 6, 9, 13, 30];
binarySearch(sample, 30);
