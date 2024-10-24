function solution(deposits, operations) {
    const result = [];
    const crypto = new Array(deposits.length).fill(0); // Initialize crypto holdings for each user
    const balances = [...deposits]; // Copy the deposits into balances

    for (const operation of operations) {
        const parts = operation.split(' ');
        const command = parts[0];
        const userId = parseInt(parts[1]) - 1; // Convert to 0-based index
        const amount = parseInt(parts[2]);

        if (command === 'deposit') {
            balances[userId] += amount; // Deposit money
        } else if (command === 'buy') {
            const price = parseInt(parts[3]);
            const totalCost = amount * price; // Calculate the total cost

            // Check if the user has enough balance to buy
            if (balances[userId] >= totalCost) {
                balances[userId] -= totalCost; // Deduct from balance
                crypto[userId] += amount; // Increase crypto holdings
            }
        } else if (command === 'sell') {
            const price = parseInt(parts[3]);

            // Check if the user has enough crypto to sell
            if (crypto[userId] >= amount) {
                crypto[userId] -= amount; // Deduct from crypto holdings
                balances[userId] += amount * price; // Add to balance by selling at price
            }
        }
        
        // Push the current balance of the user to the result
        result.push(balances[userId]); // Store the updated balance
    }    
    return result;
}

// Example usage:
const deposits = [9, 7, 12];
const operations = [
    "buy 1 3 2",
    "sell 1 4 10",
    "deposit 2 12",
    "buy 2 10 2",
    "buy 2 6 3"
];
console.log(solution(deposits, operations)); // Output: [3, 3, 19, 19, 1]

