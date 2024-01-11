function findWinner(N, A) {
    let countNonZero = 0;

    for (let i = 0; i < N; i++) {
        if (A[i] !== 0) {
            countNonZero++;
        }
    }

    return countNonZero % 2 !== 0 ? "first" : "second";
}

function gameOutcome(testCases) {
    for (let testCase of testCases) {
        const [N, A] = testCase;
        const winner = findWinner(N, A);
        console.log(winner);
    }
}

// Example usage
const testCases = [
    [3, [213]],
    [2, [11]],
    [4, [4321]],
    [5, [12345]]
];

gameOutcome(testCases);
