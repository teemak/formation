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

    // find 10 letter substrings
    for(let i = 0; i <= length - 10; i++) {
        let key = s.slice(i,i+10);
      
        countSequence[key] = (countSequence[key] || 0) + 1;
    }
    
    let result = [];
    for(let key in countSequence) {
        if(countSequence[key] > 1) {
            result.push(key);
        }
    }

    return result;
};

const s1 = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
const s2 = "AAAAAAAAAAAAA";
let r1 = findRepeatedDnaSequences(s1);
let r2 = findRepeatedDnaSequences(s2);

console.log(r1);
console.log(r2);

