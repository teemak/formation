/*
'''
❓ PROMPT
You're practicing the riffle shuffle in cardistry (https://youtube.com/shorts/NFnJoWcaL_0). You start with the red cards in one hand and black cards in the other and try to interweave them perfectly, meaning the colors alternate every card once you merge them into a single deck.

You build a machine that accepts a deck of cards to automatically determine the length of your most common mistake after the merge. The most common mistake can be identified by one that is not alternating from the opposite color. For example, "B, R, B, R" would be a perfectly alternating sequence, but there is one mistake in "B, B, R, B". If there are no mistakes, then return 0.

Example(s)
                                x    x --->    x --->    x    x    x ------------->    x    x
Given the shuffled deck: ["R", "R", "R", "B", "B", "R", "R", "R", "R", "B", "R", "B", "B", "B"]
                           xxxxxxxxxxx              xxxxxxxxxxxxxxxx              xxxxxxxxxxx
The following sequences of consecutive cards of the same color:

"R", "R", "R" - Length 3
"R", "R", "R", "R" - Length 4
"B", "B", "B" - Length 3

Returns 3 because it's the most "common" mistake, occurring twice.
 

🔎 EXPLORE
List your assumptions & discoveries:
1. a mistake is cards of consecutive colors 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
1. Sliding window
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
0. two pointers A and B - expand and contract
1. check next card if card is same then keep moving pointerA 
2. increment counter each time pointer b moves
3. when card is different color - a becomes b and b is b+1
4. keep traversing until b reaches the end of array


🛠️ IMPLEMENT
function mostFreqMistakeLength(deck) {
def mostFreqMistakeLength(deck: list[str]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function mostFreqMistakeLength(deck) {
    let mistakeCounts = {};
    let streak = 1;
    let prevCard = deck[0];
    let length = deck.length;

    for(let i = 1; i < length; i++) {
        let card = deck[i];

        if(card === prevCard) {
            streak += 1;
        } else {
            if(streak > 1) {
                mistakeCounts[streak] = (mistakeCounts[streak] || 0) + 1;
            }
            streak = 1;
        }
        prevCard = card;
    }
    if(streak > 1) {
        mistakeCounts[streak] = (mistakeCounts[streak] || 0) + 1;
    }
    if(Object.keys(mistakeCounts).length === 0) {
        return 0;
    };

    let highestMistake = Object.keys(mistakeCounts).reduce((a, b) => mistakeCounts[a] > mistakeCounts[b] ? a : b);
    
    return parseInt(highestMistake);
}

console.log(mostFreqMistakeLength(["R", "R", "R", "B", "B", "R", "R", "R", "R", "B", "R", "B", "B", "B"])); // Expected output: 3
console.log(mostFreqMistakeLength(["R", "B", "R", "B"])); // Expected output: 0
console.log(mostFreqMistakeLength(["R", "R", "B", "R", "B"])); // Expected output: 2
console.log(mostFreqMistakeLength(["R", "R", "R", "B", "B", "R", "B", "B"])); // Expected output: 2

console.log(mostFreqMistakeLength(["R"]) === 0);
console.log(mostFreqMistakeLength(["B", "R"]) === 0);
console.log(mostFreqMistakeLength(["R", "R"]) === 2);
console.log(mostFreqMistakeLength(["R", "R", "B", "R", "B", "B", "R", "R", "B"]) === 2);
console.log(mostFreqMistakeLength(["R", "R", "R", "B", "R", "B", "R", "R", "R", "B"]) === 3);
console.log(mostFreqMistakeLength(["R", "R", "R", "B", "B", "R", "R", "R", "B", "B"]) === 3);
console.log(mostFreqMistakeLength(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B"]) === 0);
console.log(mostFreqMistakeLength(["R", "R", "B", "R", "R", "R", "R", "R", "B", "B"]) === 2);
console.log(mostFreqMistakeLength(["B", "B", "B", "B", "R", "R", "R", "B", "R", "R", "R"]) === 3);
console.log(mostFreqMistakeLength(["R", "R", "R", "B", "B", "B", "B", "R", "R", "R", "B"]) === 3);
console.log(mostFreqMistakeLength(["R", "R", "R", "B", "B", "R", "R", "R", "R", "B", "R", "B", "B", "B"]) == 3);
