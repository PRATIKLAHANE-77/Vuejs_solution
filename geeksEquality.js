// function geeksEquality(arr) {
  
//     let map = new Map();
//     for(let num of arr) {
//       if(map.has(num)) {
//         map.set(num, map.get(num)+1);
//       } else {
//         map.set(num, 1);
//       }
//     }
    
//     let max = 0;
//     for(let freq of map.values()) {
//       if(max < freq) {
//         max = freq;
//       }
//     }
    
//     return arr.length - max;
    
//   }

//   console.log(geeksEquality([2,2,1,8,6,7]));

// function geeksEquality(a){
//   a.sort((x, y) => x - y);

//         let count = 1;
//         let maxCount = 0;

//         for (let i = 0; i < a.length - 1; i++) {
//             if (a[i] === a[i + 1]) {
//                 count++;
//             } else {
//                 count = 1;
//             }
//             maxCount = Math.max(maxCount, count);
//         }

//         return a.length - maxCount;
//     }
//     console.log(geeksEquality([2,2,1,8,6,7]));


    function sharpenersEquality(piles){
        let map=new Map()
        for(let i=0;i<piles.length;i++){
            map.set(piles[i],(map.get(piles[i])||0)+1)
        }
        let max=Math.max(...map.values())
        return piles.length-max
        

    }
    console.log(sharpenersEquality([2,2,1,8,6,7])) 



   