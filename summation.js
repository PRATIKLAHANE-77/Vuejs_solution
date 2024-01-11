function findMaxB(N) {
    let ans=1
    let i=1
    let j=N
    while(i<=N && j>=1){
        ans=ans*Math.pow(i,j)
        i++
        j--
    }
    let count=0
    while(ans%10==0){

        count++
        ans=ans/10
    }
    return count
}

// Example usage
const N1 = 1;
const b1 = findMaxB(N1);
console.log(b1); // Output: 0 (approximately)

const N2 = 5;
const b2 = findMaxB(N2);
console.log(b2); // Output: 1 (approximately)
