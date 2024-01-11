function courseOfACollege(arr) {
    let n = arr.length; 
    let m = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > m) {
            m = arr[i];
        }
    }

    return n - m;
}

// Example usage:
let inputArray = [1,0,1,0,1 ];
let result = courseOfACollege(inputArray);
console.log(result);


// function courseOfACollege(arr){
//     let max = Math.max(...arr);
//     return arr.length-max;
// }
