function countbadArrays(N,M){
    let count=0
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(i!=j){
                count++

            }
        }
    }
    return count
}
console.log(countbadArrays(2,3))