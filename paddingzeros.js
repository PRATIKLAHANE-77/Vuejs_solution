// function paddingZeros(N,p) {
  
//     const padding = N+2 * p;
//     const zeros = (padding * padding) - (N * N);
//     return zeros;
    
//   }
  
//   console.log(paddingZeros(3,1));



// function zeroPadding(a, b) {
//   let ans = 0;

//   while (b > 0) {
//     ans = ans + a * 4 + 4;
//     a = a + 2;
//     b--;
//   }

//   return ans;
// }

// console.log(zeroPadding(3, 1));
function calculatePaddingZeros(N, p) {
  const totalZeros = Math.pow(N + 2 * p, 2) - Math.pow(N, 2);
  return totalZeros;
}

console.log(calculatePaddingZeros(3, 1));

