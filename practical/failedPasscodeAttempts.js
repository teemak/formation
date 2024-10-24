function solution(passcode, attempts) {
    let failedAttempts = 0; // Counter for consecutive failed attempts

    for (let attempt of attempts) {
        if (attempt === passcode) {
            // Reset the count if the attempt is correct
            failedAttempts = 0;
        } else {
            // Increment the count for a failed attempt
            failedAttempts++;
            // Check if we've reached 10 consecutive failed attempts
            if (failedAttempts >= 10) {
                return true; // Device should be locked
            }
        }
    }

    return false; // Less than 10 consecutive failed attempts
}

// Example usage:
const passcode1 = "1111";
const attempts1 = ["1111", "4444", "9999", "3333", "8888", "2222", 
                   "7777", "0000", "6666", "7285", "5555", "1111"];
console.log(solution(passcode1, attempts1)); // Output: true

const passcode2 = "1234";
const attempts2 = ["9999", "9999", "9999", "9999", "9999", "9999", 
                   "9999", "1234", "9999", "9999", "9999", "9999"];
console.log(solution(passcode2, attempts2)); // Output: false

