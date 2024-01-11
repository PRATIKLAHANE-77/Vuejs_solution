function findThreeSumIndices(arr, target) {
    let m = 3;
    let arrIndex = [];

    for (let i = 0; i < arr.length; i++) {
        arrIndex[i] = i;
    }

    function generator(currentArray, remainingArray) {
        if (currentArray.length === m) {
            let sum = currentArray.reduce((a, ele) => arr[ele] + a, 0);
            if(sum===target){
                return true
            }
            return
        }

        for (let i = 0; i < remainingArray.length; i++) {
            currentArray.push(remainingArray[i]);
            let newArr = remainingArray.slice(0, i).concat(remainingArray.slice(i + 1));
            const isAnswer = generator(currentArray, newArr);

            if (isAnswer) {
                return currentArray;
            }

            currentArray.pop();
        }

        
    }

    const result = generator([], arrIndex);
    return result;
}

console.log(findThreeSumIndices([2, 7, 5, 1], 8));



// 2nd approach


// function findThreeSumIndices(arr, target) {

// const n=arr.length;
// const m=3

// arr= arr.map((value, index)=> ({value, index})).sort((a, b)=> a.value - b.value);


// const result=[]

// function generator(start, currentArray, currentSum) {

// if (currentArray.length===m){

// if (currentSum=== target) { 

// result.push([...currentArray]);
// }

// return;
// }

// for (let i= start; i < n; i++) {

// if (i >start && arr[i].value=== arr[i-1].value) {

// continue;
// }
// currentArray.push(arr[i].index);

// generator(i +1, currentArray, currentSum +arr[i].value);

// currentArray.pop();
// }
// }
// generator(0, [], 0);

// return result.length > 0?result[0]: [-1];
// }
// console.log(findThreeSumIndices([2, 7, 5, 1], 8));


