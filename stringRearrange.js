function stringRearrange(S){
    const map=new Map()
    for(let i=0;i<S.length;i++){
        if(S[i]==='a'||S[i]==='b' ||S[i]==='c' ||S[i]=='d'){
            if(!map.has(S[i])){
                map.set(S[i],1)
            }
            else{
                map.set(S[i],map.get(S[i])+1)
            }
            
        }
    }
    if(map.size<4){
        return 0
    }
    let ans=Math.min(Math.floor(map.get('a')/2),map.get('b'),map.get('c'),map.get('d'))
     return ans

}
const result = stringRearrange('abcdabcdaa');
console.log(result); // Output: 4