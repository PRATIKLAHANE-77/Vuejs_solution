function isRepeating(s){
    let start=0
    let end=s.length/2
    while(end<s.length){
        if(s[start]!=s[end]){
            return false
        }
        start++;
        end++
    }
    return true
}

function encode(s){
    let ans=""
    let i=s.length-1
    while(i>=0){
        let str=s.substring(0,i+1)
        if(str.length%2==0 && isRepeating(str)){
            str=str.substring(0,str.length/2)
            ans='*' +ans
            i=str.length-1
        }
        else{
            ans=str[str.length-1]+ans
            i--
        }
    }
    return ans
}
console.log(encode('ababcababcd'))