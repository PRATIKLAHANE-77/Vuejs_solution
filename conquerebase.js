function canReplaceJack(M, N) {
    // Check if both M and N are odd
    if (M % 2 !== 0 && N % 2 !== 0) {
        return 'YES';
    } else {
        return 'NO';
    }
}

// Example usage:
console.log(canReplaceJack(2, 2)); // Output: 'NO' (M and N are even)
console.log(canReplaceJack(3, 2)); // Output: 'NO' (N is even)
console.log(canReplaceJack(3, 3)); // Output: 'YES' (M and N are odd)
