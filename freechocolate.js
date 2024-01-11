function calculateValidLists(N, P, K) {
    if (P > N) {
        return 0;
    }
    let m = 1;
    if (K === 1) {
        while (P > 0) {
            m = (m * P) % 1000000007;
            P--;
        }
    }
    return m;
}
console.log(calculateValidLists(3,3,1 ))

// function freeChocolate(N, P, K) {
//     let count = 0;
//     let flag = false;

//     function generate(currentarray) {
//         if (currentarray.length === N - 1) {
//             flag = true; // Remove the 'let' keyword to use the outer 'flag'
//             let arr = [...currentarray];
//             let current = arr[0];

//             for (let i = 1; i < arr.length; i++) {
//                 let nextEle = arr[i];
//                 if (current == nextEle) {
//                     flag = false;
//                     break;
//                 } else {
//                     current = nextEle;
//                 }
//             }

//             if (flag) {
//                 let index1 = currentarray.indexOf('P1');
//                 let index2 = currentarray.indexOf('P2');
//                 let index3 = currentarray.indexOf('P3');
//                 if (index1 !== -1 && index2 !== -1 && index3 !== -1) {
//                     count++;
//                 }
//             }
//         }
//     }

//     for (let i = 1; i <= P; i++) {
//         currentarray.push(`P${i}`);
//         generate(currentarray);
//         currentarray.pop();
//     }
//     generate([]);
//     return count;
// }

// console.log(freeChocolate(5, 3, 1));

