function greatnessOfArray(n, arr) {
    let answer = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let gcd = arr[i];
        for (let j = i; j < n; j++) {
            gcd = findGCD(gcd, arr[j]);
            answer[j-i] = Math.max(answer[j-i], gcd);
        }
    }
    return answer;
}

function findGCD(a, b) {
    return b == 0 ? a : findGCD(b, a % b);
}

console.log(greatnessOfArray(6, [6, 9, 1, 2, 6, 4]));
