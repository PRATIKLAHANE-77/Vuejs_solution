function smallestString(N,K){
     if(K>N || (K==1 && N>1)){
        return -1
     }
     if(K==1 && N==1){
        return 'a'
     }
     let str=""
     let startingLength=N-K+2
     while(str.length!==startingLength){
        if(str[str.length-1]!='a'){
            str+='a'
        }
        else{
            str+='b'
        }
     }
     let i=2
     while(str.length!=N){
        str+=String.fromCharCode(97+i)
        i++
     }
     return str
}
console.log(smallestString(2,3))