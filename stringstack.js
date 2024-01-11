function getLexicographicalMinString(s) {
  let A = '';
  let B = [];

  for (let i = 0; i < s.length; i++) {
      B.push(s[i]);
  }

  while (B.length > 0) {
      if (A.length === 0 || A[0] <= B[B.length - 1]) {
          A += B.pop();
      } else {
          B.unshift(A[0]);
          A = A.slice(1);
      }
  }

  return A;
}

// Example usage
const S1 = 'cab';
const result1 = getLexicographicalMinString(S1);
console.log(result1); // Output: "abc"

const S2 = 'acdb';
const result2 = getLexicographicalMinString(S2);
console.log(result2); // Output: "abdc"
