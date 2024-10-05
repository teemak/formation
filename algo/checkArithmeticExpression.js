/*
'''
❓ PROMPT
You are given four arrays representing two lists of operands, one list of operators, and a list of results. For any index, i, your task is to check to see if:

operands1[i] operators[i] operands2[i] = results[i]

For input arrays arrays like:

operands1 = [1, 2]
operators = ['+', '-']
operands2 = [2, 3] 
results = [3, 0]

then the result of this function should be [true, false] since 1 + 2 = 3 and 2 - 3 ≠ 0.

The numbers will be integers, and the signs can be "+", "-", "*", "/". Round to the nearest whole number for division.

Example(s)
Given the following:

operands1 = [1, 2]
operators = ['+', '-']
operands2 = [2, 3] 
results = [3, 0]

At index 0, we have 1 + 2 = 3. This evaluation is True
At index 1, we have 2 - 3 = 0. This evaluation is False

We should return [True, False] as there are two operands in the input list.

Another Example:
operands1_1 = [1, 5, 2]
operators_1 = ['+', '-', '*']
operands2_1 = [2, 3, 4]
results_1 = [3, 2, 8]

At index 0, we have 1 + 2 = 3. This evaluation is True
At index 1, we have 5 - 3 = 2. This evaluation is True
At index 2 we have 2 * 4 = 8. This evaluation is True

We should return [True, True, True]
 

🔎 EXPLORE
List your assumptions & discoveries:
1. input arrays are always equal lengths
2. only 4 types of operators addition, subtraction, division, multiplication
3. are operands non-negative


Insightful & revealing test cases:
[] => will return true?
 

🧠 BRAINSTORM
What approaches could work?
1. column major traversal - calculate and verify


Algorithm 1:
Time: O(n) - will always be the length of inputs
Space: O(n) - result array will have a boolean for each equation/computation
 

📆 PLAN
Outline of algorithm #: 
1. validate input - empty => true
2. iterate column major
3. switch based on operator - add, sub, mult, div
4. compare to native function's value
5. push boolean to result array
6. return result
 

🛠️ IMPLEMENT
function checkArithmeticExpressions(operands1, operators, operands2, results) // returns an array of booleans
def check_arithmetic_expressions(operands1, operators, operands2, results): -> list[bool]
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function checkArithmeticExpressions(operands1, operators, operands2, results) {
    let output = [];
    let computation;
    if(!operands1.length) return output;

    for(let i = 0; i < operands1.length; i++) {
	switch(operators[i]) {
	    case '+':
		computation = (operands1[i] + operands2[i]) == results[i];
		break;
	    case '-':
		computation = (operands1[i] - operands2[i]) == results[i];
		break;
	    case '*':
		computation = (operands1[i] * operands2[i]) == results[i];
		break;
	    case '/':
		computation = Math.round(operands1[i] / operands2[i]) == results[i];
		break;
	    default:
		return;
	}
	output.push(computation);
    }
    return output;
}

// Test Case 1: Basic arithmetic operations
let operands1 = [3, 5, 2, 9];
let operators = ['+', '-', '*', '/'];
let operands2 = [2, 3, 4, 3];
let results = [5, 2, 8, 3];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results), "should return [true, true, true, true]");  // Output: [true, true, true, true]

// Test Case 2: Incorrect results
operands1 = [3, 5, 2, 9];
operators = ['+', '-', '*', '/'];
operands2 = [2, 3, 4, 3];
results = [6, 1, 7, 4];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results), "should return [false, false, false, false]");  // Output: [false, false, false, false]

// Test Case 3: Mixed correct and incorrect results
operands1 = [10, 15, 8, 12];
operators = ['-', '*', '+', '/'];
operands2 = [5, 3, 4, 4];
results = [5, 45, 12, 2];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results), "should return [true, true, true, false]"); // Output: [true, true, true, false]

// Test Case 4: Empty arrays
operands1 = [];
operators = [];
operands2 = [];
results = [];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results), "should return []");  // Output: []

// Test Case 5: Division with rounding
operands1 = [7, 10, 15, 27];
operators = ['/', '/', '/', '/'];
operands2 = [2, 3, 4, 5];
results = [4, 3, 4, 5];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results), "should return [true, true, true, true]");  // Output: [true, true, true, true]
