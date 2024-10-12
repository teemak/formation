/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
//            ---------- 
// input  =  'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
//                      -----------
//                 **********     
// input  =  'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
//                           ***********
// output = ['AAAAACCCCC', 'CCCCCAAAAA']

/**
 * @param {string} s
 * @return {string[]}
 * runtime: O(n)
 * space: O(n)
 */
var findRepeatedDnaSequences = function(s) {
    let length = s.length;
    let countSequence = {};

    // 1. find 10 letter substrings
    for(let i = 0; i <= length - 10; i++) {
        // 2. keys are 10 characters
        let key = s.slice(i,i+10);
        // 3. set key or increment value 
        countSequence[key] = (countSequence[key] || 0) + 1;
    }
    
    let result = [];
    // 4. add keys that occur more than once to result
    for(let key in countSequence) {
        if(countSequence[key] > 1) {
            result.push(key);
        }
    }

    return result;
};

// fancy
function _findRepeatedDnaSequences(s) {
  const values = {"A": 1, "C": 2, "G": 3, "T": 4};
  const bases = {1: "A", 2: "C", 3: "G", 4: "T"};

  // Compute the value of the first ten bases
  const counts =  {};
  let value = 0;
  for (let  i = 0; i < 10 && i < s.length; i++) {
    value = value * 5 + values[s[i]];
  }
  counts[value] = 1;

  // Now walk through the bases, shifting off the high
  // order base, shift everything else over and add in
  // a new base.
  for (let low = 10; low < s.length; low++) {
    value = value % 1953125; // 5^9
    value = value * 5 + values[s[low]];
    counts[value] = (counts[value] || 0) + 1;
  }

  // Now filter the counts down to only the repeats,
  // then convert back to base strings.
  return Object.entries(counts)
    .map(([key, count]) => count > 1 ? key : 0)
    .filter(x => !!x)
    .map(value => {
      const array = new Array(10).fill(0);
      for (let index = 9; index >= 0; index--) {
        array[index] = bases[value % 5];
        value = (value - (value % 5)) / 5;
      }
      return array.join('');
    });
}

const s1 = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
const s2 = "AAAAAAAAAAAAA";
let r1 = findRepeatedDnaSequences(s1);
let r2 = findRepeatedDnaSequences(s2);

console.log(r1);
console.log(r2);

