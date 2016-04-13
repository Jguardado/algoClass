/*

SET

Abstract data type
Stores unique values in no particular order
No mechanism for retrieving elements
Your set should be able to store any JavaScript primitive

*** Operations:

mySet.count()
=> integer value for the number of values present in set

mySet.add(value)
=> set object

mySet.delete(value)
=> true if value was present and removed
=> false if value was not present

mySet.has(value)
=> true/false

mySet.forEach(callbackFn)
=> no return value
calls callbackFn once for each value in the set

Note: ES6 has a Set data structure as part of the core language.

*** Additional Exercises:

Modify your set to take a max capacity and return a string if you try to add an element when there's no more room
mySet.add(value)
=> "Max capacity already reached. Remove element before adding a new one."

Make your set able to take objects, arrays, and functions as values in addition to just primitives.


 */

function Set(capacity) {
  // implement me...
  this.max = capacity;
  this.storage = {};
  this.size = 0;
  this.tracker = false;
}

Set.prototype.count = function () {
  // implement me...
  console.log(this.size);
  return this.size;
};

// Time complexity:

Set.prototype.add = function (value) {
  if (this.size === this.max) {
    console.log('too many');
    return;
  }

  this.storage[value] = value;
  this.size++;

  // implement me...
};

// Time complexity:

Set.prototype.delete = function (value) {
  // implement me...
  if (this.storage[value]) {
    this.storage[value] = undefined;
    return true;
  }

  return false;
};

// Time complexity:

Set.prototype.has = function (value) {
  // implement me...
  if (this.storage[value]) {
    return true;
  };

  return false;
};

// Time complexity:

Set.prototype.forEach = function (callback) {
  // implement me...
  for (var key in this.storage) {
    callback(this.storage[key]);
  }
};

Set.prototype.union = function (newSet) {
  // => mySet with added values from otherSet
  // add any values from otherSet into mySet that are not yet there
  // ex: {1,2,3} union {2,3,4} => {1,2,3,4}
  if (Array.isArray(newSet)) {
    for (var i = 0; i < newSet.length; i++) {
      this.storage[newSet[i]] = newSet[i];
    }
  } else {
    for (var key in newSet) {
      this.storage[newSet[key]] = newSet[key];
    }
  }

};

Set.prototype.intersection = function (newSet) {
  //I'm just gonna assume sets will be objects.
  var intersection = [];
  for (var key in newSet) {
    if (this.storage[newSet[key]] === newSet[key]) {
      intersection.push(newSet[key]);
    }
  }

  console.log('this is the intersection', intersection);
};

Set.prototype.difference = function (newSet) {
  var differences = [];
  for (var key in newSet) {
    if (this.storage[newSet[key]] !== newSet[key]) {
      differences.push(newSet[key]);
    }
  }

  console.log('this is the differences', differences);

};

Set.prototype.hasSubset = function (subSet) {
  for (var key in subSet) {
    if (this.storage[subSet[key]] === subSet[key]) {
      this.tracker = true;
    }

    this.tracker = false;
  }

  console.log(this.tracker);
  return this.tracker;
};

// Time complexity:

/*
*** Exercises:

1. Implement the following set theory operations:

mySet.union(otherSet)
=> mySet with added values from otherSet
add any values from otherSet into mySet that are not yet there
ex: {1,2,3} union {2,3,4} => {1,2,3,4}

mySet.intersection(otherSet)
=> mySet with values removed that are not in otherSet
remove values from mySet that are not in otherSet
ex: {1,2,3} intersection {2,3,4} => {2,3}

mySet.difference(otherSet)
=> mySet with values removed that are in otherSet
remove values from mySet that are in otherSet
ex: {1,2,3} difference {2,3,4} => {1}

mySet.hasSubset(otherSet)
=> true/false depending on if otherSet is a subset of mySet
ex: {1,2,3} hasSubset {2,3,4} => false
ex: {1,2,3} hasSubset {2,3} => true


2*. Using a set, create a whitelist filter - given a list of whitelist items and a collection to be filtered, return an array with only the items from the collection that are on the whitelist:

whitelistFilter(collection <array>, whitelist <array>)
=> filtered collection <array> with only items from white list

3*. Now create a blacklist filter.

* exercises adapted from Algorithms, 4th Edition by Robert Sedgewick and Kevin Wayne

 */
var someSub = {
  5:5,
  9:9,
  13:13,
};
var otherSet = {
  3:3,
  6:6,
  9:9,
  5:5,
  3:3,
  11:11,

};

var sets = new Set(6);
sets.add(5);
sets.add(9);
sets.add(10);
sets.add(4);
console.log(sets);
sets.difference(otherSet);
sets.intersection(otherSet);
sets.hasSubset(someSub);

// sets.union(otherSet);

console.log(sets);
