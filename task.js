const readline = require("readline");

// Function to count good subarrays
function countGoodSubarrays(nums, K) {
    let count = 0;
    for (let start = 0; start < nums.length; start++) {
        let uniqueIntegers = new Set();
        for (let end = start; end < nums.length; end++) {
            uniqueIntegers.add(nums[end]);
            if (uniqueIntegers.size === K) {
                count++;
            } else if (uniqueIntegers.size > K) {
                break;
            }
        }
    }
    return count;
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Prompt user for input
rl.question("Enter the array elements separated by commas: ", (numsInput) => {
    const nums = numsInput.split(",").map(Number);

    rl.question("Enter the value of K: ", (KInput) => {
        const K = parseInt(KInput);

        // Calculate and display the result
        const result = countGoodSubarrays(nums, K);
        console.log("Number of good subarrays:", result);

        // Close readline interface
        rl.close();
    });
});