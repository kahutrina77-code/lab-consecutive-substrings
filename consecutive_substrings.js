function consecutiveSubstrings(string) {
    // Handle empty string edge case
    if (string.length === 0) {
        return [];
    }
    
    const result = [];
    const n = string.length;
    
    // Outer loop - picks starting position
    for (let i = 0; i < n; i++) {
        // Inner loop - picks ending position  
        for (let j = i; j < n; j++) {
            // Extract substring from i to j (inclusive)
            const substring = string.slice(i, j + 1);
            result.push(substring);
        }
    }
    
    return result;
}

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
    console.log("=>", consecutiveSubstrings('abc'));

    console.log("");

    console.log("Expecting: ['a']");
    console.log("=>", consecutiveSubstrings('a'));
    
    console.log("");
    
    console.log("Expecting: []");
    console.log("=>", consecutiveSubstrings(''));
    
    console.log("");
    
    console.log("Expecting: ['p', 'ph', 'pho', 'phon', 'phone', 'h', 'ho', 'hon', 'hone', 'o', 'on', 'one', 'n', 'ne', 'e']");
    console.log("=>", consecutiveSubstrings('phone'));
    
    console.log("");
    
    console.log("Expecting: ['a', 'ab', 'b']");
    console.log("=>", consecutiveSubstrings('ab'));
}

module.exports = consecutiveSubstrings;

// TIME COMPLEXITY: O(n³)
// - Outer loop: runs n times
// - Inner loop: runs approximately n times (n + n-1 + n-2 + ... + 1)
// - slice(): O(n) to copy characters
// Total: n × n × n = O(n³)

// SPACE COMPLEXITY: O(n²)
// - Number of substrings: n(n+1)/2 ≈ O(n²)

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


