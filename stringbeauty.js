function calculateDifference(k1,k2){
    k1=k1.toLowerCase()
    k2=k2.toLowerCase()
    let count=0
    for(let i=0;i<k1.length;i++){
        if(k1[i]!==k2[i]){
            count ++
        }
    }
    return count
}


let result=calculateDifference('hello',"HeLlO")
console.log(result)