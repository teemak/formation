/*
'''
❓ PROMPT
Given an array of floats that represents the movement in the share price of a company over time, design an algorithm that determines the maximum profit that could have been made by buying and then selling a single share over the time period. The buy must occur before the sell.

Example(s)
Input: prices = [7,1,5,3,6,4]
Output: 5

Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
*Note: buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.*

Input: prices = [7,6,4,3,1]
Output: 0

Explanation: In this case, no transactions are done, and the max profit = 0.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function maxProfitPotential(prices) {
def maxProfitPotential(prices: list[float]) -> float:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
function maxProfitPotential(prices) {
  let maxProfit = 0
  let minPrice = Infinity

  for (let currPrice of prices) {
    let profit = currPrice - minPrice
    maxProfit = Math.max(maxProfit, profit)
    minPrice = Math.min(minPrice, currPrice)
  }

  return maxProfit
}

function _maxProfitPotential(prices) {
  // Edge case: if array has fewer than 2 prices, return 0 (no transaction possible)
  if (prices.length < 2) return 0;

  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // update the minimum price
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice); // calculate potential profit
    }
  }

  return maxProfit;
}

console.log(maxProfitPotential([7,1,5,3,6,4]) == 5)
console.log(maxProfitPotential([7,6,4,3,1]) == 0)
console.log(maxProfitPotential([3,1,5]) == 4)
console.log(maxProfitPotential([1,2,3,5,6,7]) == 6)
console.log(maxProfitPotential([3,3,3,3,3,3]) == 0)
console.log(maxProfitPotential([0.55,1.23,3.53,1.75,5.16]) == 4.61)
console.log(maxProfitPotential([1,9]) == 8)
console.log(maxProfitPotential([8,2]) == 0)
console.log(maxProfitPotential([1]) == 0)
console.log(maxProfitPotential([]) == 0)
console.log(maxProfitPotential([2, 5, 7, 1, 3, 4, 5]) == 5)
console.log(maxProfitPotential([7,1,5,3,6,4]) == 5)
console.log(maxProfitPotential([7,6,4,3,1])== 0); 
console.log(maxProfitPotential([]) == 0); 
console.log(maxProfitPotential([10]) == 0);
console.log(maxProfitPotential([3, 3, 3, 3]) == 0);
console.log(maxProfitPotential([1, 5]) == 4); 
console.log(maxProfitPotential([5, 1]) == 0); 
console.log(maxProfitPotential([1, 2, 3, 4, 5]) == 4);
console.log(maxProfitPotential([5, 4, 3, 2, 1]) == 0); 

