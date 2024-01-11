 function sleptwithRaman(N,K,S){
    let maxNamps=0
    let consecutiveZeros=0
    for(let i=0;i<N;i++){
        if(S[i]==='0'){
            consecutiveZeros++
            if(consecutiveZeros===K){
                maxNamps++
                consecutiveZeros=0
            }

        }
        else{
            consecutiveZeros=0

        }
        
    }
    return maxNamps
    
}
const input1 = {
    N: 8,
    K: 3,
    S: '10010000',
  };
  console.log(sleptwithRaman(input1.N, input1.K, input1.S))
