function minMovesToZero(arr) {
    let moves = 1;
  
    for (let i = 1; i < arr.length; i += 2) {
      let xorVal = arr[i-1] ^ arr[i];
      if (xorVal !== 0) {
        moves++;
      }
    }
  
    return moves;
  }

  console.log(minMovesToZero([2, 2]))

