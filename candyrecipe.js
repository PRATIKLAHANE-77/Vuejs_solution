function candyRecipes(R,S){
  let setR=new Set(R.split(''))
  let setS=new Set(S.split(''))

  for( const ingredient of setR){
    if(!setS.has(ingredient)){
      return 'No'
    }
  }
  for(const ingredient of setS){
    if(!setR.has(ingredient)){
      return 'NO'
    }
  }
  return 'Yes'

}
const result = candyRecipes('diapers', 'paradise');
console.log(result)



// function candyRecipes(st1, st2) {
//   st1 = st1.toLowerCase();
//   st2 = st2.toLowerCase();

//   const ch1 = st1.split('');
//   const ch2 = st2.split('');

//   let c = 0, cn = 0;

//   const hm1 = new Map();
//   ch1.forEach(char => hm1.set(char, (hm1.get(char) || 0) + 1));

//   const hm2 = new Map();
//   ch2.forEach(char => hm2.set(char, (hm2.get(char) || 0) + 1));

//   if (compareMaps([...hm1.keys()], [...hm2.keys()]) && compareMaps([...hm1], [...hm2])) {
//       c = 1;
//       cn = 1;
//   }

//   return c === cn; // Use "===" to check if they are equal
// }

// function compareMaps(map1, map2) {
//   return map1.length === map2.length && map1.every(key => map2.includes(key));
// }

// Example usage:
// const result = candyRecipes('diapers', 'paradise');
// console.log(result ? 'YES' : 'NO');
