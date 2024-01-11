function canDistribute(N) {
  if(N<10){
    return false
   }
   if(N%2!==0){
    return false
   }
   if(N<(10*(10+1)/2)){
    return false
   }
   return true
}

// Example usage
const N1 = 18;
console.log(canDistribute(N1)); // Output: 'NO'

const N2 = 20;
console.log(canDistribute(N2)); // Output: 'YES'




// function canDistribute(N) {
//     if (N < 55) {
//       return 'NO'; // It's impossible to satisfy both conditions.
//     }
  
    
//     return 'True';
//   }
  
//   // Example usage
//   const N1 = 18;
//   console.log(canDistribute(N1)); // Output: false
  
//   const N2 = 20;
//   console.log(canDistribute(N2)); // Output: true