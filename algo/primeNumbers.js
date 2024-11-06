function getPrimes(n) {
    // iterate factors that are less than square root of number
    // keep a set for numbers up to input 
    // remove all numbers where factor pair is in set
    // * lowest prime number is 2, * only divisible by itself and 1
    let set = new Set();
    // logic to create store of numbers up to the input
    for(let i = 2; i <= n; i++) set.add(i);
    
    let limit = Math.sqrt(n);
    // iterate up to or equals the square root of N
    for(let i = 2; i <= limit; i++) {
        // check if factor is in set
        if(set.has(i)) {
            // iterate up to N and remove values that are multiples of i
            for(let j = i + i; j <= n; j += i) {
                set.delete(j);
            }
        }
    }
    return set;
}


// N = 20
// if N % 2 === 0 -> not prime                                    # 20 - (2*10) = 0
// if N % 3 === 0 -> not prime , 20 % 3 = 2 -> prime              # 20 - (3*6)  = 2
// if N % 4 === 0 -> not prime                                    # 20 - (4*5)  = 0
// if N % 5 === 0 -> not prime                                    # 20 - (5*4)  = 0
// if N % 6 === 0 -> not prime , 20 % 6 = 2 -> prime              # 20 - (6*3)  = 2
// if N % 7 === 0 -> not prime , 20 % 7 = 6 -> prime              # 20 - (7*2)  = 6
// if N % 8 === 0 -> not prime , 20 % 8 = 4 -> prime              # 20 - (8*2)  = 4

function getRotations(n) {
    let rotations = new Set();
    let digits = n.toString();

    for(let start = 0; start < digits.length; start++) {
        let rotated = '';

        for(let i = 0; i < digits.length; i++) {
            rotated += digits[(start + i) % digits.length]
        }

        rotations.add(parseInt(rotated));
    }

    return rotations;
}

let primes = getPrimes(129);
console.log(primes);
//console.log(getRotations(129));
