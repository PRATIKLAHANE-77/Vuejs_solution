// function magicalOrb(N,M){
//     let mod=998244353
//     let n=M+N-1
//     let r=Math.min(n-N,N)
//     let nCr=fact(n) / (fact(r) * fact(n-r))
//     let result=nCr % mod

//     return result
// }

// function fact(n){
//     let mod=998244353
//     if(n<2){
//         return 1
//     }
//     return (n* fact(n-1))
// }

// console.log(magicalOrb(707,707))



function countMagicalArrays(N, M) {
    const mod = 998244353;

    // Calculate nCr modulo mod
    function nCr(n, r) {
        let result = 1;
        for (let i = 0; i < r; i++) {
            result = (result * (n - i)) % mod;
            result = (result * modInverse(i + 1, mod)) % mod;
        }
        return result;
    }

    // Calculate modular inverse of a number modulo mod
    function modInverse(a, mod) {
        let b = mod;
        let x = 0, y = 1;

        while (a > 0) {
            const q = Math.floor(b / a);
            const temp = b;
            b = a;
            a = temp % a;

            const tempX = x;
            x = y - q * x;
            y = tempX;
        }

        return (y + mod) % mod;
    }

    // Calculate the result using combinations
    let result = 1;
    for (let i = 1; i <= N; i++) {
        result = (result * nCr(M + i - 1, i - 1)) % mod;
    }

    return result;
}

// Examples
console.log(countMagicalArrays(2, 3));    // Output: 5
console.log(countMagicalArrays(1, 50));   // Output: 50
console.log(countMagicalArrays(707, 707)); // Output: 687062898
