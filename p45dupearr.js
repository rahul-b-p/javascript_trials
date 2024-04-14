a=[10,20,30,20,10,30,40,50,60,10]
// w.a.p to find the duplicate numbers from given array
temp=[]
for(let i of a){
    temp.push(i)
}
op=[]
isDupe=false
for (let i of a){ 
    temp.shift() 
    for(j of temp){
        if(i==j){ 
            isDupe=true
            op.push(j)
            // console.log(op);
            if(op.length>1){
                for(let k of op){
                    // console.log(k);
                    if(k==j){
                        op.pop()
                    }
                    break
                }
                    
            }
        break    
        }
    }
}

console.log(isDupe?op:'no duplication');