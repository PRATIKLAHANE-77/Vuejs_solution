function maxOddChunks(n,k){
    let oddCards=k
    let evenCards=n-k
    let answer=Math.min(oddCards,evenCards)
    if(oddCards>evenCards){
        return answer+(Math.floor((oddCards-evenCards)/3))
    }
    return answer
}
console.log(maxOddChunks(6,5 ))