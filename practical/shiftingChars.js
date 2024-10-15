/*
'''
❓ PROMPT
In a computer, characters are represented as numbers. Each number represents a specific character recognized worldwide through the ASCII ( see https://en.wikipedia.org/wiki/ASCII) and Unicode (see https://en.wikipedia.org/wiki/Unicode) standards. This task is to help you get comfortable manipulating characters by their ASCII or Unicode number values in your language of choice.

In Python, `ord()` takes a character (single character string) and returns its numeric code. The `chr()` function does the inverse, taking a number and returning the corresponding character in a string.

In Javascript, `'c'.charCodeAt()` returns the numeric code for 'c'. Use `String.fromCharCode(42)` for the inverse, in this case, returning a string with the character corresponding to the number 42.

For this task, write a function that takes a string and returns a new string that where each alphabetic character (a-z or A-Z) is replaced with the character after it. So an 'a' is replaced with 'b', 'b' is replaced with 'c', etc. The 'z' character wraps around to 'a'.

As a follow-up, modify the function to take a second parameter which is an increment that can be from 0 (no character shift) or a positive number. Shift each alphabetic character by that amount (wrapping as before).

To be fair, this question isn't practical. But knowing something about ASCII and Unicode is often useful.

Example(s)
shiftChars("a z") => "b a"
shiftChars("The quick brown fox jumped over the lazy dog.") => "Uif rvjdl cspxo gpy kvnqfe pwfs uif mbaz eph."

 

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
function shiftChars(s) {
def shift_chars(s: str) -> str:

Add a second integer parameter, k, for the follow-up.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
function _shiftChars(s, k = 1) {
  return s.split('').map(char => {
    let code = char.charCodeAt(0);

    // lowercase letters
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + k) % 26) + 97);
    }

    // uppercase letters
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + k) % 26) + 65);
    }

    // edge cases return input 
    return char;
  }).join('');
}

function getMap(k = 1) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const map = {};
  const Acode = 'A'.charCodeAt();
  const acode = 'a'.charCodeAt();

  for (const L of upper) {
    const l = L.toLowerCase();
    const Lcode = L.charCodeAt();
    const offset = (Lcode + k - Acode) % 26;
    map[L] = String.fromCharCode(Acode + offset);
    map[l] = String.fromCharCode(acode + offset);
  }
  return map;
}

function shiftChars(s, k = 1) {
  const output = [];
  const theReplacements = getMap(k);

  for (const c of s) {
    let oc = c;
    if (theReplacements[c] !== undefined) {
      oc = theReplacements[c];
    }
    output.push(oc);
  }

  return output.join('');
}

console.log(shiftChars("a") === "b");
console.log(shiftChars("b") === "c");
console.log(shiftChars("y") === "z");
console.log(shiftChars("z") === "a");
console.log(shiftChars("A") === "B");
console.log(shiftChars("B") === "C");
console.log(shiftChars("Y") === "Z");
console.log(shiftChars("Z") === "A");
console.log(shiftChars("/") === "/");

console.log(shiftChars("a", 3) === "d")
console.log(shiftChars("b", 4) === "f")
console.log(shiftChars("y", 2) === "a")
console.log(shiftChars("z", 3) === "c")
console.log(shiftChars("A", 3) === "D")
console.log(shiftChars("B", 4) === "F")
console.log(shiftChars("Y", 2) === "A")
console.log(shiftChars("Z", 3) === "C")
console.log(shiftChars("a", 26) === "a")
console.log(shiftChars("a", 28) === "c")
console.log(shiftChars("/", 30) === "/")
