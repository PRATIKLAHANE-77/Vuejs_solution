function mowgliDoors(doors) {
  let S=doors.split('')
    let count = 0;
    let i = 0;
    

  
    while (i < S.length) {
      if (S[i] === '0') {
        count++;
  
        for (let j = i; j < S.length; j++) {
          if (S[j] === '1') {
            S[j] = '0';
          } else {
            S[j] = '1';
          }
        }
      }
      i++;
    }
  
    return count;
  }
  
  const result = mowgliDoors('010');
  console.log(result);
  