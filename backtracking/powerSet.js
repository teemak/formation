/*
Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

// Plan
// 1. Initialize an empty list to store the results.
// 2. Define a helper function that will recursively explore subsets.
// 3. Start with an empty subset and at each step either include the current element or skip it.
// 4. Add the current subset to the result list and continue exploring.

// function declaration
function subsets(nums) {
  const result = [];

  function backtrack(start, currentSubset) {
    // Add the current subset to the result
    result.push([...currentSubset]);

    // Explore further subsets
    for (let i = start; i < nums.length; i++) {
      // Include nums[i] in the current subset
      currentSubset.push(nums[i]);

      // Move on to the next element
      backtrack(i + 1, currentSubset);

      // Backtrack by removing nums[i] and exploring the next option
      currentSubset.pop();
    }
  }

  // Start backtracking from the 0th index with an empty subset
  backtrack(0, []);
  return result;
}

// function expression - no hoisting
const subsets = function(nums) {
    const result = [];
    const n = nums.length;

    for (let mask = 0; mask < (1 << n); mask++) {
        const subset = [];
    
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                subset.push(nums[i]);
            }
        }

        result.push(subset);
    }

  return result;
};
