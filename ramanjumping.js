function ramanjumping(n){
    let isTriangular=Math.sqrt(8*n+1)%1===0
    if(isTriangular && n>=0){
        return 'Yes'
    }
    else{
        return 'No'
    }
}

console.log(ramanjumping(2))

// ANOTHER SOLUTION
// function RamanJumping(a){
//     let currentPosition=0
//     let jumps=1
//     while(currentPosition<a){
//         currentPosition+=jumps
//         jumps++
//     }
//     return currentPosition===a?'Yes' :'No'
// }
// console.log(RamanJumping(2))