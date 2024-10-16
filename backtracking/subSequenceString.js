function printSubsequences(word, subseq="") {
  if (word.length === 0) {
    v1Results.push(subseq)
    return
  }

  // inclue char
  printSubsequences(word.substring(1, word.length), subseq+word[0])
  // omit char
  printSubsequences(word.substring(1, word.length), subseq)
}


//####################
//### IMPLEMENT ME ###
//####################
function printSubsequences2(word, subseq="", i=0) {
    if(i == word.length) {
        v2Results.push(subseq);
        return;
    }

    // include
    printSubsequences2(word, subseq+word[i], i+1)
    // omit
    printSubsequences2(word, subseq, i+1)
}


let v1Results = []
let v2Results = []
printSubsequences("ABCD");
console.log(v1Results);
printSubsequences2("ABCD");
console.log(v2Results);

// compare arrays
// console.log(v1Results.every((val, i) => val === v2Results[i]));
console.log(JSON.stringify(v1Results) === JSON.stringify(v2Results));

