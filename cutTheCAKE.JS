// function minCuts(N) {
//   if(N==0){
//     return 0
//   }
//   if(N===1){
//     return 1
//   }
  
//     N += 1;
//     return N%2 == 0 ? N/2 :(N+1)/2 ;
    
//   }
  
//   console.log(minCuts(4));
  // // 2nd solution


  // function minCutsForCake(N){
  //   if(N%2===0){
  //     return N;
  //   }
  //   else{
  //     return (N+1)/2
  //   }
  // }
  // console.log(minCutsForCake(4));

  // another solution

  function minCutsforEqualPieces(n){
    let cuts=0
    let regions=1
    while(regions<n+1){
      cuts++
      regions=(cuts*(cuts+1))/2+1
    }
    return cuts
  }
  console.log(minCutsforEqualPieces(4))

// 3rd solutuon

// function minCutsToEqualPieces(N) {
//   let cuts = 0;

//   // Continue incrementing cuts until the number of pieces is greater than or equal to N + 1
//   while ((cuts * (cuts + 1) / 2) + 1 < N + 1) {
//       cuts++;
//   }

//   return cuts;
// }

// // Example usage
// const N = 4;
// const result = minCutsToEqualPieces(N);
// console.log(result);  // Output: 2

// 4th solution
// function minCuts(N) {
//   // Increment N by 1 to account for the initial whole cake
//   N += 1;

//   let cuts = 0;
//   let powerOfTwo = 1;

//   while (powerOfTwo < N) {
//     powerOfTwo *= 2;
//     cuts += 1;
//   }

//   return cuts;
// }

// console.log(minCuts(7));