function saveTokyo(S) {
  let res = 0;

  for (let i = 0; i < S.length -1; i++) {
      if ((S[i] === 'L' && S[i + 1] === 'L') || (S[i] === 'R' && S[i + 1] === 'R')) {
          res = 1;
      }
  }

  return res === 1 ? 'YES' : 'NO';
}

const result = saveTokyo("LRLRRRLRLLLL");
console.log(result); 









  // function saveTokyo(S) {
  
  //   for(let i=0; i<S.length-1; i++) {
  //     if(S[i] == S[i+1]) {
  //       return 'YES';
  //     }
  //   }
  //   return 'NO';
    
  // }
  
  // console.log(saveTokyo('LRLRRRLRLLLL' ));







  