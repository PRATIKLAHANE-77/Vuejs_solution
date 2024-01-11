function buildingsOfSharpener(arr) {
    let i=0
    let j=0
    let k=0
    for(let i=0;i<arr.length-2;i++){
        for(let j=i+1;j<arr.length-1;j++){
            for(let k=j+1;k<arr.length;k++){
                if(arr[i]<arr[j] && arr[j]>arr[k] && arr[k]>arr[i]){
                    return true;
                }
            }
        }
    }
    return false
  }

  
//   // Example usage
//   const arr1 = [1, 2, 3, 4, 5];
//   const N1 = 5;
//   const result1 = buildingsOfSharpener(arr1);
//   console.log(result1); // Output: "True"
  
//   const arr2 = [4, 7, 11, 5, 13, 2];
//   const N2 = 6;
//   const result2 = buildingsOfSharpener(arr2);
//   console.log(result2); // Output: "True"
  
//   const arr3 = [11, 11, 12, 9];
  
//   const result3 = buildingsOfSharpener(arr3);
//   console.log(result3); // Output: "False"

// 2nd approach

// function buildingsOfSharpener(arr){
//     let n=arr.length
//     let min=arr[0]
//     for(let i=1;i<arr.length-1;i++){
//         if(min<arr[i]){
//             min=arr[i]
//         }
//         if(arr[i]>arr[i-1] && arr[i]>arr[i+1] &&(arr[i+1]>arr[i-1] || arr[i+1]>arr[i-2])){
//             return 'True'
//         }
//     }
//     return 'False'
// }
// const arr3 = [1, 2, 3, 4, 5];
// const result3 = buildingsOfSharpener(arr3);
//   console.log(result3); // Output: "False"


// 3rd approach
// function buildingsOfSharpener(arr) {
//     let n = arr.length;
//     let min = arr[0];

//     for (let i = 1; i < n - 1; i++) {
//         if (min < arr[i]) {
//             min = arr[i];
//         }

//         if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1] && min < arr[i + 1]) {
//             return 'True';
//         }
//     }
//     return 'False';
// }

// const arr3 = [1, 2, 3, 4, 5];
// const result3 = buildingsOfSharpener(arr3);
// console.log(result3); // Output: "False"

