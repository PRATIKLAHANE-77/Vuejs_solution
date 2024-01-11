function furthestSum(n,arr){
    let totalSum=0
    let preSum=[]
    for(let i=0;i<n;i++){
        totalSum+=arr[i]
        preSum.push(totalSum)
    }
    let quotient=0
    for(let i=0;i<preSum.length;i++){
        quotient+=Math.floor(totalSum/preSum[i])
    }
    return quotient
}
console.log(furthestSum(3,[1,1,3]))