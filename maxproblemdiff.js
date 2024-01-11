function maxProblemSets(difficultyLevels) {

  difficultyLevels.sort((a, b) => a- b);

  let problemSetsCount = 0;


  for (let i = 0; i < difficultyLevels.length-1; i++) {
      // Check if the current and next problem can be in the same set
      if (difficultyLevels[i] !== difficultyLevels[i + 1]) {
          problemSetsCount++;
          i++
          // i++; // Skip the next problem, as it cannot have the same difficulty level
      }
  }

  return problemSetsCount;
}

// Example usage
const input1 = [4, 5, 5, 5];
const output1 = maxProblemSets(input1);
console.log(output1);  // Output: 2

const input2 = [2 ,2 ,2, 2
];
const output2 = maxProblemSets(input2);
console.log(output2);  // Output: 1



// function codingProblem(arr) {
  
//   let set = new Set(arr);
//   return Math.floor(set.size/2);
  
// }

// console.log(codingProblem([4,5,5,5]));
