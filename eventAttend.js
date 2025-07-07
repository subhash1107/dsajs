// You are given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.

// You can attend an event i at any day d where startTimei <= d <= endTimei. You can only attend one event at any time d.

// Return the maximum number of events you can attend.

 

// Example 1:


// Input: events = [[1,2],[2,3],[3,4]]
// Output: 3
// Explanation: You can attend all the three events.
// One way to attend them all is as shown.
// Attend the first event on day 1.
// Attend the second event on day 2.
// Attend the third event on day 3.
// Example 2:

// Input: events= [[1,2],[2,3],[3,4],[1,2]]
// Output: 4

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  
  events.sort((a, b) => a[0] - b[0]);

  let i = 0;           
  let attended = 0;    
  const n = events.length;
  class MinHeap {
    constructor() {
      this.heap = [];
    }
    push(val) {
      this.heap.push(val);
      this._bubbleUp();
    }
    pop() {
      if (this.size() === 1) return this.heap.pop();
      const top = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._bubbleDown();
      return top;
    }
    peek() {
      return this.heap[0];
    }
    size() {
      return this.heap.length;
    }
    _bubbleUp() {
      let idx = this.heap.length - 1;
      while (idx > 0) {
        let parent = Math.floor((idx - 1) / 2);
        if (this.heap[parent] <= this.heap[idx]) break;
        [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
        idx = parent;
      }
    }
    _bubbleDown() {
      let idx = 0;
      const length = this.heap.length;
      while (true) {
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;
        let smallest = idx;

        if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;
        if (smallest === idx) break;
        [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
        idx = smallest;
      }
    }
  }

  const heap = new MinHeap();
  let day = 1;
  let maxDay = Math.max(...events.map(e => e[1]));

  for (day = 1; day <= maxDay; day++) {
    while (i < n && events[i][0] === day) {
      heap.push(events[i][1]);
      i++;
    }
    while (heap.size() > 0 && heap.peek() < day) {
      heap.pop();
    }
    if (heap.size() > 0) {
      heap.pop();
      attended++;
    }
  }

  return attended;
};


console.log(maxEvents([[1, 4], [4, 4], [2, 2], [3, 4], [1, 1]]))
console.log(maxEvents([[1,2],[1,2],[1,6],[1,2],[1,2]]))