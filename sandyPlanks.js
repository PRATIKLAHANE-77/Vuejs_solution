// function sandyPlanks(S) {
//   // let str = '';
  
//   // // Process consecutive identical colors
//   // for (let i = 0; i < S.length; i++) {
//   //   if (S[i] !== S[i + 1] || i === S.length - 1) {
//   //     str += S[i];
//   //   }
//   // }
  
//   // // Count occurrences of each color
//   // let map = new Map();
//   // for (let char of str) {
//   //   map.set(char, (map.get(char) || 0) + 1);
//   // }
  
//   // return Math.min(map.get('B') || 0, map.get('W') || 0);
//   let group = 0;

//         // Counting the number of groups
//         for (let i = 0; i < s.length; i++) {
//             while (i + 1 < length && s[i] === s[i + 1]) {
//                 i++;
//             }
//             group++;
//         }

//         let operation = 0;

//         // Calculating the number of operations
//         if (group % 2 === 0) {
//             operation = group / 2;
//         } else {
//             operation = (group - 1) / 2;
//         }

//         // Printing the result for each test case
//         return operation
//     }



// // Example usage
// console.log(sandyPlanks('BBWWWB'));  // Output: 2


 


// function sandyPlanks(S) {
//   let group = 0;

//   for (let i = 0; i < S.length; i++) {
//       while (i + 1 < S.length && S[i] === S[i + 1]) {
//           i++;
//       }
//       group++;
//   }

//   let operation = 0;
//   if (group % 2 === 0) {
//       operation = group / 2;
//   } else {
//       operation = (group - 1) / 2;
//   }
//   return operation;
// }

// // Example usage
// console.log(sandyPlanks('BBWWWB'));  // Output: 2

