function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function generateOptimalPalindrome(N, M) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.slice(0, M);
    let optimalString = alphabet.repeat(Math.ceil(N / M)).slice(0, N);
    return optimalString;
}

function countPalindromicSubstring(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            if (isPalindrome(str.slice(i, j))) {
                count++;
            }
        }
    }
    return count;
}

function minPalindromicSubstring(N, M) {
    const optimalString = generateOptimalPalindrome(N, M);
    const palindromeCount = countPalindromicSubstring(optimalString);
    return palindromeCount;
}

console.log(minPalindromicSubstring(5, 8));
 