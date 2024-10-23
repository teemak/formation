/*
'''
❓ PROMPT
You will be implementing a function called stringify which will take in a Javascript Object and return the JSON representation of the object as a string. This function is actually built into Javascript as `JSON.stringify(object)` but you have to write yours from scratch!

You may want to take a moment to review the rules for [JSON syntax](https://www.w3schools.com/js/js_json_syntax.asp).

Example(s)
anObj = {"x": 5, "y": "Oliver"}
stringify(anObj)
Output: '{"x": 5, "y": "Oliver"}'

aList = [1, "hello", "null", {"x": 5, "y": "Oliver"}]
stringify(aList)
Output: '[1, "hello", "null", {"x": 5, "y": "Oliver"}]'

A brief note about the input and output. They look very similar, but the input is an object and the output is a string enclosed in single ticks. This means that the double quotes inside that string are characters in the string and are important.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
1. entire output is wrapped in single quote
2. keys are strings
3. preserve input data type - object, array
3. preserve the value data type - str, int

 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: Array
1. result is a single quote string
2. iterate over object or array
 i.  every even iteration is key - will always be string
 ii. every odd iteration is value - preserve data type
   a. get the data type - 
 

🛠️ IMPLEMENT
function stringify(obj) {
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

/*
 * null
 * number boolean
 * string
 * array
 * object
 * undefined function
 */
function stringify(obj) {
    // 0. null will return the null data type
    if(obj === null) return null;

    // 1. number and booleans return a string
    if(typeof obj === 'number' || typeof obj === 'boolean') return String(obj);

    // 2. wrap string with double quotes
    if(typeof obj === 'string') return `"${obj}"`;

    // 3. array, convert to string and join with commas inside square brackets
    if(Array.isArray(obj)) {
        const elements = obj.map(el => stringify(el)).join(', ');
        return `[${elements}]`;
    }
    // 4. convert key to string, should preserve number type values 
    if(typeof obj === 'object') {
        const entries = Object.keys(obj).map(key => {
            const value = obj[key];

            if(typeof value === 'undefined' || typeof value === 'function') return '';

            return `"${key}": ${stringify(value)}`;
        }).filter(Boolean).join(', ');

        return `{${entries}}`;
    }

    return undefined;
}

console.log(stringify(null) == null, ' 1. null should return null');

console.log(stringify("hello") == '"hello"', ' 2. hello string should return "hello"')

console.log(stringify(42) == '42', ' 3. The key 42 should be a string')

console.log(stringify(3.14) == '3.14', ' 4. float should preserve precision')

console.log(stringify({"x": 5, "y": "Oliver"}) == '{"x": 5, "y": "Oliver"}', ' 5. It should stringify an object')

// Test list input
console.log(stringify([1, "hello", "null", {"x": 5, "y": "Oliver"}]) ==
  '[1, "hello", "null", {"x": 5, "y": "Oliver"}]', ' 6. Input is an array with objects')

// Test dictionary input
console.log(stringify({"key1": "value1", "key2": "null", "key3": {"subkey": 42}}) ==
  '{"key1": "value1", "key2": "null", "key3": {"subkey": 42}}', ' 7. Input is a nested object')


