function isPortmanteau(word1, word2, proposed) {
  // Function to check if proposed is a valid portmanteau of two words
  function isValidPortmanteau(baseWord, suffixWord) {
    let prefixIndex = 0;

    // Find the longest matching prefix with baseWord
    while (prefixIndex < baseWord.length && prefixIndex < proposed.length && proposed[prefixIndex] === baseWord[prefixIndex]) {
      prefixIndex++;
    }
    prefixIndex--; // Adjust to last matched index

    let suffixIndex = proposed.length - 1;

    // Find the longest matching suffix with suffixWord
    for (let s2 = suffixWord.length - 1; s2 >= 0 && proposed[suffixIndex] === suffixWord[s2]; s2--, suffixIndex--) {}

    // Validate portmanteau conditions
    return prefixIndex >= suffixIndex && suffixIndex < proposed.length - 1;
  }

  // Rule out compounds by checking concatenation
  if (proposed === word1 + word2 || proposed === word2 + word1) {
    return false;
  }

  // The portmanteau can't exactly match either source word
  if (proposed === word1 || proposed === word2) {
    return false;
  }

  // Check both combinations of words
  return isValidPortmanteau(word1, word2) || isValidPortmanteau(word2, word1);
}

function __isPortmanteau(word1, word2, proposed) {
  function check(w1, w2) {
    let p1 = 0

    for (; p1 < w1.length && p1 < proposed.length && proposed[p1] === w1[p1]; p1++) {}
    p1-- // the loop iterated 1 too far

    let p2 = proposed.length - 1
    for (let s2 = w2.length - 1; s2 >= 0 && proposed[p2] === w2[s2]; s2--, p2--) {}

    return p1 >= p2 && p2 < proposed.length - 1
  }

  // Rule out compounds
  if (proposed === word1 + word2) return false
  if (proposed === word2 + word1) return false

  // The portmanteau can't exactly match either source word
  if (proposed === word1 || proposed === word2) return false

  return check(word1, word2) || check(word2, word1)
}

function _isPortmanteau(word1, word2, proposed) {
    // Iterate over possible truncation points for word1
    for (let i = 1; i < word1.length; i++) {  // i = 1 ensures truncation of word1
        let prefix = word1.slice(0, i);
        
        // Iterate over possible truncation points for word2
        for (let j = 0; j < word2.length; j++) {  // j = 0 allows word2 to be fully used
            let suffix = word2.slice(j);
            
            // Check if concatenating the prefix and suffix matches the proposed word
            if (prefix + suffix === proposed) {
                return true;
            }
        }
    }
    
    // If no valid portmanteau is found, return false
    return false;
}

console.log(isPortmanteau("fog", "smoke", "smog") == true)
console.log(isPortmanteau("smoke", "fog", "smog") == true)
console.log(isPortmanteau("motor", "hotel", "motel") == true)
console.log(isPortmanteau("branch", "much", "brunch") == false)
console.log(isPortmanteau("shrink", "inflation", "shrinkflation") == true)
console.log(isPortmanteau("skimp", "inflation", "skimpflation") == true)
console.log(isPortmanteau("miserable", "flimsy", "mimsy") == true)
console.log(isPortmanteau("puppies", "cat", "puppi") == false)
console.log(isPortmanteau("cat", "dog", "otter") == false)
console.log(isPortmanteau("ten", "at", "tent") == true)
console.log(isPortmanteau("at", "ten", "tent") == true)
// special cases
// proposed is one of the words
console.log(isPortmanteau("bartender", "ten", "bartender") == false)
console.log(isPortmanteau("bartender", "tender", "bartender") == false)
console.log(isPortmanteau("bartender", "tenderness", "bartender") == false)
// compounds aren't portmanteaus
console.log(isPortmanteau("foot", "ball", "football") == false)
console.log(isPortmanteau("ski", "water", "waterski") == false)
console.log(isPortmanteau("bat", "man", "batman") == false)
console.log(isPortmanteau("man", "bat", "batman") == false)
console.log(isPortmanteau("rent", "tent", "tent") == false)
console.log(isPortmanteau("rent", "tent", "rent") == false)
console.log(isPortmanteau("", "test", "test") == false)
console.log(isPortmanteau("test", "", "test") == false)
console.log(isPortmanteau("test", "test", "test") == false)
console.log(isPortmanteau("", "", "test") == false)
console.log(isPortmanteau("", "", "") == false)
