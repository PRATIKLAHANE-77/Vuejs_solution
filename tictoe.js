function ticTacToeWinner(a, b) {
    if (a === 'H' || b === 'H') {
        return 'H';
    } else if (a === 'C' && b !== 'H') {
        return b;
    } else if (b === 'C' && a !== 'H') {
        return a;
    } else {
        return 'D';
    }
}

// Example usage
let a = 'S', b = 'C';
console.log(ticTacToeWinner(a, b)); // Output: S






// function tictoctoe(a,b){
//     if(a==='H' || b==='H'){
//         return 'H'
//     }
//     else if((a==='C') &&(b==='B' || b==='M' || b==='S') ){
//         return b
//     }
//     else if((b==='C') &&(a==='B' || a==='M' || a==='S')){
//         return a
//     }
//     else{
//         return 'D'

//     }
// }
// let a='C', b='S'

// console.log(tictoctoe(a,b))