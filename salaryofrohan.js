function salaryOfRohan(X, Y, S) {
    let salary = 0;
    let count = 0;
    let max = 0;
  
    for (let i = 0; i < S.length; i++) {
      if (S[i] === 1) {
        salary += X;
        count++;
      } else {
        count = 0;
      }
      max = Math.max(max, count);
    }
  
    salary += max * Y;
    return salary;
  }
  
  // Example usage:
  const X = 100; // Some value for X
  const Y = 50;  // Some value for Y
  const S = [1, 1, 0, 1, 1, 1, 0, 1, 1]; // Some array of 1s and 0s
  
  const result = salaryOfRohan(X, Y, S);
  console.log(result);
  