/*
 * https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/
Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is 'c', which has a frequency of 2.

You are given an array of strings words and another array of query strings queries. For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words.

Return an integer array answer, where each answer[i] is the answer to the ith query.

 

Example 1:

Input: queries = ["cbd"], words = ["zaaaz"]
Output: [1]
Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
Example 2:

Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
Output: [1,2]
Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").
 

Constraints:

1 <= queries.length <= 2000
1 <= words.length <= 2000
1 <= queries[i].length, words[i].length <= 10
queries[i][j], words[i][j] consist of lowercase English letters.
lexicographically (order of words as they appear in dictionary) - a < t and 12 < 2 
*/

//1. find - smallest lexicographical character can be found using the min() 
//2. compute - f(query) and f(word)
//3. optimize - precompute f(word) and then comparing each query reduces redundant computations
//4. binary search - sort f(word) values and count how many are greater than f(query)
function numSmallerByFrequency(queries, words) {
    // Helper function to calculate f(s)
    function f(s) {
        let minChar = 'z';  // Initialize to the largest possible char
        let count = 0;

        for (let char of s) {
            if (char < minChar) {
                minChar = char;
                count = 1;
            } else if (char === minChar) {
                count++;
            }
        }
        return count;
    };

    // Step 1: Precompute f(w) for all words
    let fWords = words.map(f);

    // Sort the fWords to use binary search
    fWords.sort((a, b) => a - b);

    // Step 2: For each query, calculate f(query) and count how many fWords > f(query)
    let result = [];
    for (let query of queries) {
        let fq = f(query);

        // Binary search: Find the first element in fWords greater than fq
        let left = 0, right = fWords.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (fWords[mid] <= fq) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // The count of words that have f(W) > f(query) is from index 'left' to the end
        result.push(fWords.length - left);
    }

    return result;
}

console.log(numSmallerByFrequency(["cbd"], ["zaaaz"])); // Output: [1]
console.log(numSmallerByFrequency(["bbb","cc"], ["a","aa","aaa","aaaa"])); // Output: [1, 2]

