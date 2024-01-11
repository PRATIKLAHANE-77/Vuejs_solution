function calculateWindowCosts(n,k,window){
    let answer=[]
    for(let i=0;i<n-k+1;i++){
        let arr=window.slice(i,k+i);
        answer.push(mincost(arr))
    }
    return answer
}
function mincost(arr){
    arr.sort((a,b)=>a-b)
    let mid=arr[Math.floor(arr.length/2)]
    let cost=0
    for(let ele of arr){
        cost+=Math.abs(mid-ele);

    }
    return cost
}
console.log(calculateWindowCosts(13,5,[12,14,13,15,18,11,12,11,21,10,9,34,67]))