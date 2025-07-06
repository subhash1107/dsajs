var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.freqMap = new Map();
    
    for (let num of nums2) {
        this.freqMap.set(num, (this.freqMap.get(num) || 0) + 1);
    }
};

FindSumPairs.prototype.add = function(index, val) {
    const oldVal = this.nums2[index];
    const newVal = oldVal + val;
    
    // Decrease old value count
    this.freqMap.set(oldVal, this.freqMap.get(oldVal) - 1);
    if (this.freqMap.get(oldVal) === 0) {
        this.freqMap.delete(oldVal);
    }
    
    // Update value
    this.nums2[index] = newVal;
    
    // Increase new value count
    this.freqMap.set(newVal, (this.freqMap.get(newVal) || 0) + 1);
};

FindSumPairs.prototype.count = function(tot) {
    let res = 0;
    
    for (const num1 of this.nums1) {
        const complement = tot - num1;
        res += this.freqMap.get(complement) || 0;
    }
    
    return res;
};


let findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);
console.log(findSumPairs.count(7));  // return 8; pairs (2,2), (3,2), (4,2), (2,4), (3,4), (4,4) make 2 + 5 and pairs (5,1), (5,5) make 3 + 4
console.log(findSumPairs.add(3, 2)); // now nums2 = [1,4,5,4,5,4]
console.log(findSumPairs.count(8));  // return 2; pairs (5,2), (5,4) make 3 + 5
console.log(findSumPairs.count(4));  // return 1; pair (5,0) makes 3 + 1
console.log(findSumPairs.add(0, 1)); // now nums2 = [2,4,5,4,5,4]
console.log(findSumPairs.add(1, 1)); // now nums2 = [2,5,5,4,5,4]
console.log(findSumPairs.count(7));  // return 11; pairs (2,1), (2,2), (2,4), (3,1), (3,2), (3,4), (4,1), (4,2), (4,4) make 2 + 5 and pairs (5,3), (5,5) make 3 + 4