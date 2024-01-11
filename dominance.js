

function maxDominance(n,arr){
  arr.sort((a,b)=>a-b)
  let sum=0
  for(let i=0;i<n/2;i++){
    sum+=arr[n-i-1]
    sum-=arr[i]
    

  }
  if(n%2!==0){
    sum+=arr[Math.floor(n/2)]
  }
  return sum
}
console.log(maxDominance(6,[4,1,5,8,6,2]))

// another solution 
// function permutationAndMultiplyMaxSum(arr,start=0,maxSum=-Infinity){
  
//   if(start===arr.length-1){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//       sum+=(i%2===1)? arr[i] * -1:arr[i]
//     }
//     maxSum=Math.max(maxSum,sum)
//   }
//   else{
//     for(let i=start;i<arr.length;i++){
//       const temp=arr[start]
//       arr[start]=arr[i]
//       arr[i]=temp
//       maxSum=permutationAndMultiplyMaxSum(arr,start+1,maxSum)
//       arr[i]=arr[start]
//       arr[start]=temp
//     }
//   }
//   return maxSum
// }
// console.log(permutationAndMultiplyMaxSum([4, 1, 5, 8, 6, 2]));


// another solution
// function maxDominance(arr) {

//     arr.sort((a,b) => b-a);
//     let arr2 = arr.splice(Math.floor(arr.length/2));
//     console.log(arr2)
    
//     let sum = 0;
//     for(var i=0; i<arr2.length; i++) {
//       sum += arr[i] + (-1 * arr2[i]);
//     }
//     return sum;
    
//   }
  
//   console.log(maxDominance([4,1,5,8,6,2]));