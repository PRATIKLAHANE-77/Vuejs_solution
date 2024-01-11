function closestVowel(S) {
    let count = 1;
    for(let char of S) {
      if(char == 'c' ) {
        count *= 2% 1000000007
      } else if(char == 'g') {
        count *= 2% 1000000007;
      } else if(char == 'l') {
        count *= 2% 1000000007;
      } else if(char == 'r') {
        count *= 2% 1000000007;
      }
    }
    return count;
    
  }
  
  let s1 = 'aeiou';
  let s2 = 'abcde';
  console.log(closestVowel(s2));


  // function vowelAndDeepank(S){
  //   let possibility=1
  //   for(let char of S){
  //     possibility=(possibility* calc(char)) % 10000000007
  //   }
  //   return possibility

  //   function calc(char){
  //     let vowels=['a','e','i','o','u']
  //     let minArr=vowels.map(vowel=>Math.abs(char.charCodeAt(0)-vowel.charCodeAt(0)))
  //     let min=Math.min(...minArr)
  //     let count=minArr.filter(el=>el===min).length
  //     return count
  //   }
  // }
  // console.log(vowelAndDeepank('abcde'))
