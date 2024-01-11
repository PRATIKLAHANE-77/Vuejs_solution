function fourSumIndices(n, x, arr) {
    let sum = 0;
    let ans = [];

    if (n < 4) {
        return -1;
    }

    for (let i = 0; i < n - 3; i++) {
        for (let j = i + 1; j < n - 2; j++) {
            for (let k = j + 1; k < n - 1; k++) {
                for (let l = k + 1; l < n; l++) {
                    sum = arr[i] + arr[j] + arr[k] + arr[l];
                    if (sum === x) {
                        ans.push(i, j, k, l);
                        return ans; // Return as soon as a matching set is found
                    }
                }
            }
        }
    }

    return -1;
}

const result = fourSumIndices(8, 15, [3, 2, 5, 8, 1, 3, 2, 3]);
console.log(result);





// function findfoursum(arr,target){
//     let arrIndex=[]
//         for(let i=0;i<arr.length;i++){
//             arrIndex[i]=i

//         }
//         let m=4;
//         function generateArray(currentArray,remainingElements){
//             if(currentArray.length===m){
//                 let sum=currentArray.reduce((a,ele)=>a+arr[ele],0)
//                 if(sum===target){
//                     return true
//                 }
//                 return false
//             }
//             for(let i=0;i<remainingElements.length;i++){
//                 currentArray.push(remainingElements[i])
//                 const newArr=remainingElements.slice(0,i).concat(remainingElements.slice(i+1))
//                 const isAnswerpresent=generateArray(currentArray,newArr)
//                 if(isAnswerpresent){
//                     return currentArray
//                 }
//                 else{
//                     currentArray.pop()
//                 }
//             }
//         }
//         const result=generateArray([],arrIndex)
//         return result
    
// }
// console.log(findfoursum([3,2,5,8,1,3,2,3],15))