function gcd(a,b){
    return b===0? a: gcd(b,a%b)
}
function maxGcd(N,R,A){
    let originalGcd=A.reduce(gcd)
    let maxGcdValue=originalGcd
    for(let i=0;i<N;i++){
        for(let replacement=1;replacement<=R;replacement++){
            let replacedArray=[...A]
            replacedArray[i]=replacement

            let replacedArrayGcd=replacedArray.reduce(gcd)
            maxGcdValue=Math.max(maxGcdValue,replacedArrayGcd)
        }
    }
    return maxGcdValue
}

const N1=2, R1=3, A1=[10,15]
console.log(maxGcd(N1,R1,A1))