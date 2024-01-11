function greaterisbetter(arr){
    let result=[]
    let n=arr.length
    let leftGreater=new Array(n).fill(-1)
    let rightGreater=new Array(n).fill(-1)
    let stack=[]

    for(let i=0;i<n;i++){
        while(stack.length>0 && arr[stack[stack.length-1]]<=arr[i]){
            stack.pop()
        }
        if(stack.length>0){
            leftGreater[i]=stack[stack.length-1]
        }
        stack.push(i)
    }
    stack.length=0
    for(let i=n-1;i>=0;i--){
        while(stack.length>0 && arr[stack[stack.length-1]]<=arr[i]){
            stack.pop()
        }
        if(stack.length>0){
            rightGreater[i]=stack[stack.length-1]
        }
        stack.push(i)
    }
    for(let i=0;i<n;i++){
        let x=leftGreater[i]=== -1? -1: leftGreater[i]+1
        let y=rightGreater[i]===-1? -1 : rightGreater[i]+1
        result.push(x+y)
    }
    return result
}
console.log(greaterisbetter([5,4,1,3,2]))