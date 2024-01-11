function maxMovies(n,k,movies){
    movies.sort((a,b)=>a[0]-b[0])
    let count=0
    let endtime=0
    for(let ele of movies){
        const[start,end]=ele
        if(start>=endtime){
            count++
            endtime=end
        }
    }
    return count
}
console.log(maxMovies(5,1,[[1,5],[2,4],[5,7],[3,6],[8,10]]))