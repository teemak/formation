/*
'''
tiles = "AAB"
output = 8 - single scalar value

            "A", + 1
            /  \
           AA   B + 3 
          /     / \
        AAB    AB  ABA + 5

"A", "B", "AA", "AB", "AAB" "ABA"
"BAA" "BA"


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
function numTilePossibilities(tiles) {
    // sort tiles for dups
    let tiles = tiles.split('').sort().join('');
    // only want unique paths
    let result = new Set();

    // 2. work in recursive call
    function helper(path, remainingTiles) {
        // a. base case - if the path is not empty, add to result set
        // this ensures that only the non-empty sequences are counted
        if(path.length > 0) {
            result.add(path); // set {A, AA, AAB, AB, ABA}
        }
        // b. iterate the decreasing remaining tiles
        for(let i = 0; i < remainingTiles.length; i++) {
            // skip dup characters, don't need to iterate
            if(i > 0 && remainingTiles[i] === remainingTiles[i - 1]) continue;

            let current = path + remainingTiles[i]; // [AAB]
            //[A] [AB]
            let next = remainingTiles.slice(0, i) + remainingTiles.slice(i+1);
            // b. recursive call - increasing current, decreasing remainingTiles
            // A, AA, AAB, AB, ABA, _A, AA, AAB, AB, ABA, B, BA, BAA, BA, BAA = 15 nodes, 3 height
            helper(current, next); 
        }
    }
    // 1. recursive call - tile(s) used, remaining tile(s)
    helper("", tiles); //[], [AAB] || [A], [AB] ||| [AA] [B] |||| [AAB]

    return result.size;
}

// Example usage:
console.log(numTilePossibilities("AAB")); // Output: 8
console.log(numTilePossibilities("AAABBC")); // Output: 188
console.log(numTilePossibilities("V")); // Output: 1

/* Using memoization/cache
function numTilePossibilities(tiles) {
    const tileCount = {};  // To count occurrences of each tile
    for (let tile of tiles) {
        tileCount[tile] = (tileCount[tile] || 0) + 1;
    }

    const memo = {};  // Memoization object to cache results

    // Helper function to calculate possibilities
    function helper(tileCount) {
        const key = Object.values(tileCount).toString();  // Use tile counts as a memoization key

        // Check if the result is already computed for the current state
        if (memo[key] !== undefined) return memo[key];

        let count = 0;

        // Iterate through the keys (letters) in tileCount
        for (let tile in tileCount) {
            if (tileCount[tile] > 0) {
                // Use one of this tile
                tileCount[tile]--;
                
                // Recursively calculate the number of possibilities after using this tile
                count += 1 + helper(tileCount);  // "+1" accounts for the current sequence

                // Backtrack: restore the count for this tile
                tileCount[tile]++;
            }
        }

        memo[key] = count;  // Store the result in the memoization object
        return count;
    }

    // Start the recursive backtracking
    return helper(tileCount);
}

*/
