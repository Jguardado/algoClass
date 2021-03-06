/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

function Queue(capacity) {
  // implement me...
  this.max = capacity;
  this.start = 0;
  this.end = 0;
  this.count = 0;

  this.storage = {};
}

Queue.prototype.enqueue = function (value) {
  // implement me...
  if (this.count === this.max) {
    console.log('youve reached your max');
    return;
  }

  this.storage[this.end++] = value;
  this.count++;
};

// Time complexity:

Queue.prototype.dequeue = function () {
  // implement me...
  this.storage[this.start] = undefined;
  this.start++;
  this.count--;
};

// Time complexity:

Queue.prototype.peek = function () {
  // implement me...
  return this.storage[this.start];
};

Queue.prototype.count = function () {
  // implement me...
  return this.count;
};

Queue.prototype.contains = function (value) {
  for (var key in this.storage) {
    if (this.storage[key] === value) {
      return true;
    }
  }

  return false;
};

Queue.prototype.until = function (value) {
  var times = 0;
  var keys = Object.keys(this.storage);

  for (var i = keys.length - 1; i >= 0; i--) {
    if (keys[i] === value) {
      return;
    }

    times++;
  }

  return times;
};

Queue.prototype.enqueueLeft = function () {
  //this is the same as the existing queue.
  //but since the queue is an object there is no left or right

};

Queue.prototype.enqueueRight = function () {

};

Queue.prototype.dequeueLeft = function () {

};

Queue.prototype.dequeueRight = function () {
  //this is the same as the existing queue.
  //but since the queue is an object there is no left or right

};

// Time complexity:
Constant;

/*
*** Exercises:

1. Implement a queue using two stacks.

//work on this one

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
