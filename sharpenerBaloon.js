function sharpenerBalloon(arr) {
  
    let findArr = new Set([1,2,3,4,5,6,7]);

    let set = new Set();
    
    let count = 0;
    for(let num of arr) {
      if(findArr.has(num) ) {
        set.add(num);
      }
      count++;
      if(set.size == 7) {
        break;
      }
    }
    
    return count;
    
  }
  
  console.log(sharpenerBalloon([1, 2, 3, 4, 5, 7, 6])); // Output: 7
console.log(sharpenerBalloon([8, 7, 6, 5, 4, 3, 2, 1])); // Output: 8
console.log(sharpenerBalloon([11, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9])); // Output: 10

// function sharpenerBaloon(arr){
//   let requiredProblems=7
//   let solvedProblems=new Array(8).fill(false)
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]<=7 && !solvedProblems[arr[i]]){
//       solvedProblems[arr[i]]=true
//       requiredProblems--
//     }
//   }
//   for(let i=1;i<=7;i++){
//     if(!solvedProblems[i]){
//       return arr.length-requiredProblems
//     }
//   }
//   return arr.length;
// }

//   console.log(sharpenerBaloon([1, 2, 3, 4, 5, 7, 6])); // Output: 7
// console.log(sharpenerBaloon([8, 7, 6, 5, 4, 3, 2, 1])); // Output: 8
// console.log(sharpenerBaloon([11, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9])); // Output: 10
